import React from "react";
import { Modal, Button } from 'react-bootstrap';
import Film1 from '../img/back-to-the-future.jpg';
import Film2 from '../img/spiderman.jpg';
import Anime1 from '../img/snk.jpg';
import Anime2 from '../img/tengen.jpg';
import Serie1 from '../img/breaking-bad.jpg';
import Serie2 from '../img/rick.png';
import { useTranslation } from '../i18n/LanguageContext';

const ModalHobbie = ({ show, handleClose}) => {
    const { t } = useTranslation();
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{t('hobbieModal.title')}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="scrollable-div">
                    <h2>{t('hobbieModal.anime')}</h2>
                    <img src={Anime1} alt="anime 1" className="img-fluid mb-3" />
                    <img src={Anime2} alt="anime 2" className="img-fluid mb-3" />
                    <h2>{t('hobbieModal.movies')}</h2>
                    <img src={Film1} alt="film 1" className="img-fluid mb-3" />
                    <img src={Film2} alt="film 2" className="img-fluid mb-3"/>
                    <h2>{t('hobbieModal.series')}</h2>
                    <img src={Serie1} alt="serie 1" className="img-fluid mb-3"/>
                    <img src={Serie2} alt="serie 2" className="img-fluid mb-3"/>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    {t('common.close')}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalHobbie;
