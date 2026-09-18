import React from "react";
import { Modal, Button } from 'react-bootstrap';
import { useTranslation } from '../i18n/LanguageContext';

const CustomModal = ({ title, img, show, handleClose}) => {
    const { t } = useTranslation();
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={img} alt="Workout" className="img-fluid" />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    {t('common.close')}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CustomModal;
