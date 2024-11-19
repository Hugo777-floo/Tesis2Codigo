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
  CloseButton,
} from './styles';

const DetalleSolicitudModal: React.FC<DetalleSolicitudModalProps> = ({
  isOpen,
  onRequestClose,
  solicitud,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Detalle de Solicitud"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
          zIndex: 1000, // Prioridad para estar encima de todo
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
          maxWidth: '90vw', // Adaptabilidad en pantallas pequeñas
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Sombra suave para destacar
          backgroundColor: '#fff', // Fondo blanco
        },
      }}
    >
      <Container>
        <Title>Detalle de Solicitud</Title>
        <DetailContainer>
          <DetailItem>
            <Label>Fecha Programada</Label>
            <Value>{solicitud.fechaPermiso}</Value>
          </DetailItem>
          <DetailItem>
            <Label>Motivo</Label>
            <Value>{solicitud.motivo}</Value>
          </DetailItem>
          <DetailItem>
            <Label>Hora Entrada</Label>
            <Value>{solicitud.horaEntrada}</Value>
          </DetailItem>
          <DetailItem>
            <Label>Hora Salida</Label>
            <Value>{solicitud.horaSalida}</Value>
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
        </DetailContainer>
        <CloseButton onClick={onRequestClose}>Cerrar</CloseButton>
      </Container>
    </Modal>
  );
};

export default DetalleSolicitudModal;

