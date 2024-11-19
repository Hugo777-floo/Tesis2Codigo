import React from 'react';
import Modal from 'react-modal';
import { DetalleSolicitudModalProps } from './types';
import {
  Container,
  Title,
  DetailContainer,
  DetailItem,
  Label,
  Value,
  TextArea,
  CloseButton
} from './styles';

const DetalleSolicitudModal: React.FC<DetalleSolicitudModalProps> = ({
  isOpen,
  onRequestClose,
  solicitud
}) => {
  return (
    <Modal
  isOpen={isOpen}
  onRequestClose={onRequestClose}
  contentLabel="Detalle de Solicitud"
  style={{
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
      zIndex: 1000, // Asegura que el modal se superponga a todo
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)', // Centra el modal
      borderRadius: '8px',
      padding: '20px',
      width: '600px', // Ancho fijo para el modal
      maxWidth: '90vw', // Se adapta a pantallas pequeñas
    },
  }}
>
  <Container>
    <Title>Detalle de Solicitud</Title>
    <DetailContainer>
      <DetailItem>
        <Label>Fecha Inicio</Label>
        <Value>{solicitud.fechaInicio}</Value>
      </DetailItem>
      <DetailItem>
        <Label>Fecha Fin</Label>
        <Value>{solicitud.fechaFin}</Value>
      </DetailItem>
      <DetailItem>
        <Label>Motivo</Label>
        <Value>{solicitud.motivo}</Value>
      </DetailItem>
      <DetailItem>
        <Label>Jefe a Notificar</Label>
        <Value>{solicitud.jefeNotificar}</Value>
      </DetailItem>
      <DetailItem>
        <Label>Usuario registrado</Label>
        <Value>{solicitud.usuario}</Value>
      </DetailItem>
      <DetailItem>
        <Label>Descripción del Caso / Comentario</Label>
        <TextArea>{solicitud.descripcion}</TextArea>
      </DetailItem>

      {/* Documento Adjunto */}
      {solicitud.documento && (
        <DetailItem>
          <Label>Documento Adjunto</Label>
          <Value>
            <a
              href={
                solicitud.documento instanceof File
                  ? URL.createObjectURL(solicitud.documento)
                  : solicitud.documento
              }
              download={
                solicitud.documento instanceof File
                  ? solicitud.documento.name
                  : 'documentoEstandar.pdf'
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              Descargar Documento
            </a>
          </Value>
        </DetailItem>
      )}
    </DetailContainer>
    <CloseButton onClick={onRequestClose}>Cerrar</CloseButton>
  </Container>
</Modal>

  );
};

export default DetalleSolicitudModal;


