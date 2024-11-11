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
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Detalle de Solicitud">
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

