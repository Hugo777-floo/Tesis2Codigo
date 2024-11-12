import React, { useState } from 'react';
import { PageContainer, HeaderContainer, Title, ButtonContainer, Button, SolicitudContainer, SolicitudInfo, ActionsContainer, Checkbox } from './styles';
import DetalleSolicitudModal from '../ModalDetalleAbsentismo';
import { Solicitud } from './types';

interface RevisarSolicitudesProps {
  solicitudes: Solicitud[];
  onClose: () => void;
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
  onApproveSelected: (ids: string[]) => void;
  onRejectSelected: (ids: string[]) => void;
}

const RevisarSolicitudes: React.FC<RevisarSolicitudesProps> = ({
  solicitudes,
  onClose,
  onApprove,
  onReject,
  onApproveSelected,
  onRejectSelected,
}) => {
  const [seleccionados, setSeleccionados] = useState<boolean[]>(new Array(solicitudes.length).fill(false));
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [solicitudSeleccionada, setSolicitudSeleccionada] = useState<Solicitud | null>(null);

  const handleSeleccionarTodo = () => {
    const todosSeleccionados = seleccionados.every((seleccionado) => seleccionado);
    setSeleccionados(new Array(solicitudes.length).fill(!todosSeleccionados));
  };

  const handleRechazarSeleccionados = () => {
    const idsSeleccionados = solicitudes
      .filter((_, index) => seleccionados[index])
      .map((solicitud) => solicitud.id);
    onRejectSelected(idsSeleccionados);
    setSeleccionados(new Array(solicitudes.length).fill(false)); // Resetear selección
  };

  const handleAprobarSeleccionados = () => {
    const idsSeleccionados = solicitudes
      .filter((_, index) => seleccionados[index])
      .map((solicitud) => solicitud.id);
    onApproveSelected(idsSeleccionados);
    setSeleccionados(new Array(solicitudes.length).fill(false)); // Resetear selección
  };

  const toggleCheckbox = (index: number) => {
    const nuevosSeleccionados = [...seleccionados];
    nuevosSeleccionados[index] = !nuevosSeleccionados[index];
    setSeleccionados(nuevosSeleccionados);
  };

  const abrirModal = (solicitud: Solicitud) => {
    setSolicitudSeleccionada(solicitud);
    setModalIsOpen(true);
  };

  const cerrarModal = () => {
    setModalIsOpen(false);
    setSolicitudSeleccionada(null);
  };

  return (
    <PageContainer>
      <HeaderContainer>
        <Title>Últimos Absentismos Solicitados</Title>
        <ButtonContainer>
          <Button onClick={onClose}>Volver</Button>
          <Button onClick={handleSeleccionarTodo}>
            {seleccionados.every(Boolean) ? 'Deseleccionar Todos' : 'Seleccionar Todos'}
          </Button>
          <Button onClick={handleRechazarSeleccionados} style={{ backgroundColor: 'red' }}>Rechazar Seleccionados</Button>
          <Button onClick={handleAprobarSeleccionados} style={{ backgroundColor: 'green' }}>Aprobar Seleccionados</Button>
        </ButtonContainer>
      </HeaderContainer>

      {solicitudes.map((solicitud, index) => (
        <SolicitudContainer key={solicitud.id}>
          <SolicitudInfo>
            <div>{solicitud.usuario}</div>
            <div>Fecha de Registro: {solicitud.fechaRegistro}</div>
            <div>Fecha de Inicio: {solicitud.fechaInicio}</div>
            <div>Fecha de Fin: {solicitud.fechaFin}</div>
            <div>Motivo: {solicitud.motivo}</div>
          </SolicitudInfo>
          <ActionsContainer>
            <Checkbox
              type="checkbox"
              checked={seleccionados[index]}
              onChange={() => toggleCheckbox(index)}
            />
            <Button onClick={() => abrirModal(solicitud)} style={{ backgroundColor: 'blue' }}>Ver Detalle</Button>
            <Button onClick={() => onReject(solicitud.id)} style={{ backgroundColor: 'red' }}>Rechazar Solicitud</Button>
            <Button onClick={() => onApprove(solicitud.id)} style={{ backgroundColor: 'green' }}>Aprobar Solicitud</Button>
          </ActionsContainer>
        </SolicitudContainer>
      ))}

      {solicitudSeleccionada && (
        <DetalleSolicitudModal
          isOpen={modalIsOpen}
          onRequestClose={cerrarModal}
          solicitud={solicitudSeleccionada}
        />
      )}
    </PageContainer>
  );
};

export default RevisarSolicitudes;