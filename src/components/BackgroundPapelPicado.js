import React, { useEffect, useRef } from 'react';
import '../styles/background.css';

/* Papel picado behind the page: a field of four-petal perforations in the site
   palette. At rest they are barely there — a texture. The pointer acts as a
   light: nearby petals grow, turn towards it and bloom into full colour, and
   the light trails behind the cursor so the motion reads as fluid rather than
   snapped.

   The resting field is painted once into an offscreen canvas and blitted each
   frame, so a frame only pays for the ~100 petals the pointer is actually
   lighting rather than the ~600 on screen. */

const PALETTE = ['#c54308', '#e8871e', '#d63384', '#2e8372'];
const SPACING = 52;      // px between perforations
const PETAL = 7;         // resting radius
const REACH = 330;       // how far the pointer's light carries
const REST_ALPHA = 0.055;
const LIT_ALPHA = 0.42;
const EASE = 0.12;       // pointer trail; lower is more sluggish

// Deterministic per-cell variation, so the field is stable across repaints.
const hash = (x, y) => {
    const n = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
    return n - Math.floor(n);
};

function drawPetal(ctx, radius, angle) {
    ctx.rotate(angle);
    ctx.beginPath();
    for (let i = 0; i < 4; i += 1) {
        const a = (i * Math.PI) / 2;
        const px = Math.cos(a) * radius;
        const py = Math.sin(a) * radius;
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(px - py * 0.6, py + px * 0.6, px, py);
        ctx.quadraticCurveTo(px + py * 0.6, py - px * 0.6, 0, 0);
    }
    ctx.fill();
}

function BackgroundPapelPicado() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !canvas.getContext) return undefined;
        const ctx = canvas.getContext('2d');
        if (!ctx) return undefined;

        const calm = window.matchMedia('(prefers-reduced-motion: reduce)');
        let cells = [];
        let rest = null;
        let dpr = 1;
        let width = 0;
        let height = 0;
        let frame = 0;
        const pointer = { x: -9999, y: -9999, tx: -9999, ty: -9999, seen: false };

        const build = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            // A collapsed pane or a minimised window reports 0: a canvas of that
            // size cannot be drawn from, and drawImage throws on it.
            if (width < 1 || height < 1) {
                rest = null;
                cells = [];
                return;
            }
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            cells = [];
            // Half-offset every other row: a punched sheet, not graph paper.
            for (let row = 0, y = SPACING / 2; y < height + SPACING; row += 1, y += SPACING) {
                const shift = row % 2 ? SPACING / 2 : 0;
                for (let x = shift + SPACING / 2; x < width + SPACING; x += SPACING) {
                    const seed = hash(x, y);
                    cells.push({
                        x,
                        y,
                        color: PALETTE[Math.floor(seed * PALETTE.length) % PALETTE.length],
                        angle: seed * Math.PI * 2,
                        scale: 0.75 + seed * 0.5
                    });
                }
            }

            rest = document.createElement('canvas');
            rest.width = canvas.width;
            rest.height = canvas.height;
            const rctx = rest.getContext('2d');
            rctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            rctx.globalAlpha = REST_ALPHA;
            cells.forEach((cell) => {
                rctx.save();
                rctx.translate(cell.x, cell.y);
                rctx.fillStyle = cell.color;
                drawPetal(rctx, PETAL * cell.scale, cell.angle);
                rctx.restore();
            });
        };

        const paint = () => {
            if (!rest || !rest.width || !rest.height) return;
            ctx.clearRect(0, 0, width, height);
            ctx.drawImage(rest, 0, 0, width, height);
            if (!pointer.seen) return;

            // A warm pool of light under the cursor.
            const glow = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, REACH);
            glow.addColorStop(0, 'rgba(232, 135, 30, 0.08)');
            glow.addColorStop(1, 'rgba(232, 135, 30, 0)');
            ctx.fillStyle = glow;
            ctx.fillRect(pointer.x - REACH, pointer.y - REACH, REACH * 2, REACH * 2);

            cells.forEach((cell) => {
                const dx = pointer.x - cell.x;
                const dy = pointer.y - cell.y;
                const distance = Math.hypot(dx, dy);
                if (distance > REACH) return;
                // Smoothstep, so petals bloom in rather than pop in.
                const near = 1 - distance / REACH;
                const lit = near * near * (3 - 2 * near);
                ctx.save();
                ctx.translate(cell.x, cell.y);
                ctx.globalAlpha = REST_ALPHA + (LIT_ALPHA - REST_ALPHA) * lit;
                ctx.fillStyle = cell.color;
                // Petals turn to face the light.
                const facing = Math.atan2(dy, dx);
                drawPetal(
                    ctx,
                    PETAL * cell.scale * (1 + lit * 1.3),
                    cell.angle + (facing - cell.angle) * lit * 0.5
                );
                ctx.restore();
            });
        };

        const tick = () => {
            pointer.x += (pointer.tx - pointer.x) * EASE;
            pointer.y += (pointer.ty - pointer.y) * EASE;
            paint();
            frame = window.requestAnimationFrame(tick);
        };

        const start = () => {
            if (!frame) frame = window.requestAnimationFrame(tick);
        };
        const stop = () => {
            window.cancelAnimationFrame(frame);
            frame = 0;
        };

        const onMove = (event) => {
            if (!rest) build();
            pointer.tx = event.clientX;
            pointer.ty = event.clientY;
            if (!pointer.seen) {
                pointer.seen = true;
                pointer.x = event.clientX;
                pointer.y = event.clientY;
            }
            start();
        };

        const onLeave = () => {
            pointer.seen = false;
            stop();
            paint();
        };

        const onVisibility = () => {
            if (document.hidden) {
                stop();
                return;
            }
            // Coming back from a hidden pane, the viewport may only now have a
            // real size.
            if (!rest) {
                build();
                paint();
            }
            if (pointer.seen) start();
        };

        let resizeTimer = 0;
        const onResize = () => {
            window.clearTimeout(resizeTimer);
            resizeTimer = window.setTimeout(() => {
                build();
                paint();
            }, 150);
        };

        build();
        paint();

        // Someone who asked for less motion gets the texture, not the chase.
        if (!calm.matches) {
            window.addEventListener('pointermove', onMove, { passive: true });
            document.addEventListener('pointerleave', onLeave);
            document.addEventListener('visibilitychange', onVisibility);
        }
        window.addEventListener('resize', onResize);

        return () => {
            stop();
            window.clearTimeout(resizeTimer);
            window.removeEventListener('pointermove', onMove);
            document.removeEventListener('pointerleave', onLeave);
            document.removeEventListener('visibilitychange', onVisibility);
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return <canvas ref={canvasRef} className="papel-picado" aria-hidden="true" />;
}

export default BackgroundPapelPicado;
