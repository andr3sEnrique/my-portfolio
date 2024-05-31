import React, {useRef} from "react";
import '../styles/contact.css';
import arroba from '../img/arroba.png';
import telefono from '../img/llamada.png';
import ubicacion from '../img/marcador.png';
import emailjs from 'emailjs-com';

function Contact () {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tm7jyq7', 'template_c2z30di', form.current, 'AKtVQzWcPvbyu3Z-l')
            .then((result) => {
                console.log(result.text);
                alert('Mensaje enviado con éxito!');
            }, (error) => {
                console.log(error.text);
                alert('Error al enviar el mensaje. Intente de nuevo.');
            });
    };
    return(
        <div className="container-xxl p-5">
            <h1 className="text-center mt-5 title-contact mb-5">Contact Me 📩</h1>
            <div className="contact-container">
                <div className="content-contact">
                    <p className="contact-text pe-4">If you have any questions or concerns, please don't hesitate to contact me. I am open to any opportunities that align with my skills and interests.</p>
                    <div className="d-flex flex-column justify-content-start align-items-start">
                        <div className="d-flex flex-row mt-4 align-items-center">
                            <img src={telefono} alt="Telefono icon" className="contact-icons me-2" />
                            <span className="contact-text info">+33 0744755637</span>
                        </div>
                        <div className="d-flex flex-row mt-4 align-items-center">
                            <img src={arroba} alt="mail icon" className="contact-icons me-2" />
                            <span className="contact-text info">enrique.ortizsc@gmail.com</span>
                        </div>
                        <div className="d-flex flex-row mt-4 align-items-center">
                            <img src={ubicacion} alt="ubicacion icon" className="contact-icons me-2"/>
                            <span className="contact-text info">Île-de-France</span>
                        </div>
                    </div>
                    <a href={`${process.env.PUBLIC_URL}/cv.pdf`} download="CV_Andres.pdf" className="download-btn">
                      Download CV
                    </a>
                </div>
                <div className="content-contact content-form">
                    <form ref={form} onSubmit={sendEmail} class="row g-3 needs-validation" novalidate>
                        <div class="mb-3">
                            <label for="name" class="form-label contact-text">* Your Name :</label>
                            <input type="text" class="form-control" id="name" name="name" required/>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label contact-text">* Your Email : </label>
                            <input type="email" class="form-control" id="email" name="email" required/>
                        </div>
                        <div class="mb-3">
                            <label class="form-check-label" for="message">* Your Message :</label>
                            <input type="text" class="form-control" id="message" name="message" required/>
                        </div>
                        <button type="submit" class="btn btn-outline-info">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;