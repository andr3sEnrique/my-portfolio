import React from "react";
import { Modal, Button } from 'react-bootstrap';
import Film1 from '../img/back-to-the-future.jpg';
import Film2 from '../img/spiderman.jpg';
import Anime1 from '../img/snk.jpg';
import Anime2 from '../img/tengen.jpg';
import Serie1 from '../img/breaking-bad.jpg';
import Serie2 from '../img/rick.png';

const ModalHobbie = ({ show, handleClose}) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Watch differents things</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="scrollable-div">
                    <h2>Anime</h2>
                    <img src={Anime1} alt="anime 1"className="img-fluid mb-3" />
                    <img src={Anime2} alt="anime 1"className="img-fluid mb-3" />
                    <h2>Movies</h2>
                    <img src={Film1} alt="film 1"className="img-fluid mb-3" />
                    <img src={Film2} alt="film 1" className="img-fluid mb-3"/>
                    <h2>Series</h2>
                    <img src={Serie1} alt="serie 1" className="img-fluid mb-3"/>
                    <img src={Serie2} alt="seire 2"className="img-fluid mb-3"/>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalHobbie;