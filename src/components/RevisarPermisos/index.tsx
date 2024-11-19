import React, { useState } from 'react';
import {
  PageContainer,
  HeaderContainer,
  Title,
  ButtonContainer,
  Button,
  SolicitudContainer,
  SolicitudInfo,
  ActionsContainer,
  Checkbox
} from './styles';
import DetalleSolicitudModal from '../ModalDetallePermiso';
import ConfirmModal from '../../components/ModalConfirmacion';
import InfoModal from '../../components/ModalInformativo'; // Importa el InfoModal
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
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [confirmMessage, setConfirmMessage] = useState('');
  const [confirmAction, setConfirmAction] = useState<() => void>(() => {});
  const [showInfoModal, setShowInfoModal] = useState(false); // Estado para InfoModal
  const [infoMessage, setInfoMessage] = useState(''); // Mensaje para InfoModal

  const handleSeleccionarTodo = () => {
    setSeleccionados(new Array(solicitudes.length).fill(true)); // Selecciona todo
  };

  const handleDeseleccionarTodo = () => {
    setSeleccionados(new Array(solicitudes.length).fill(false)); // Deselecciona todo
  };

  const handleRechazarSeleccionados = () => {
    const idsSeleccionados = solicitudes
      .filter((_, index) => seleccionados[index])
      .map((solicitud) => solicitud.id);

    setConfirmMessage("¿Estás seguro de que deseas rechazar las solicitudes seleccionadas?");
    setConfirmAction(() => () => {
      onRejectSelected(idsSeleccionados);
      setSeleccionados(new Array(solicitudes.length).fill(false));
    });
    setShowConfirmModal(true);
  };

  const handleAprobarSeleccionados = () => {
    const idsSeleccionados = solicitudes
      .filter((_, index) => seleccionados[index])
      .map((solicitud) => solicitud.id);

    setConfirmMessage("¿Estás seguro de que deseas aprobar las solicitudes seleccionadas?");
    setConfirmAction(() => () => {
      onApproveSelected(idsSeleccionados);
      setSeleccionados(new Array(solicitudes.length).fill(false));
    });
    setShowConfirmModal(true);
  };

  const handleRechazarSolicitud = (id: string) => {
    setConfirmMessage("¿Estás seguro de que deseas rechazar esta solicitud?");
    setConfirmAction(() => () => onReject(id));
    setShowConfirmModal(true);
  };

  const handleAprobarSolicitud = (id: string) => {
    setConfirmMessage("¿Estás seguro de que deseas aprobar esta solicitud?");
    setConfirmAction(() => () => onApprove(id));
    setShowConfirmModal(true);
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

  const confirmActionAndClose = () => {
    confirmAction();
    setShowConfirmModal(false);
    setInfoMessage("La solicitud se realizó con éxito. Será notificada al área de Gestión Humana y a su Jefe");
    setShowInfoModal(true);
  };

  const cancelConfirm = () => {
    setShowConfirmModal(false);
  };

  const closeInfoModal = () => {
    setShowInfoModal(false);
  };

  return (
    <PageContainer>
      <HeaderContainer>
        <Title>Permisos Pendientes de Aprobación</Title>
        <ButtonContainer>
          <Button onClick={onClose}>Volver</Button>
          <Button onClick={handleSeleccionarTodo}>Seleccionar Todos</Button>
          <Button onClick={handleDeseleccionarTodo}>Deseleccionar Todos</Button>
          <Button onClick={handleRechazarSeleccionados} style={{ backgroundColor: 'red' }}>Rechazar Seleccionados</Button>
          <Button onClick={handleAprobarSeleccionados} style={{ backgroundColor: 'green' }}>Aprobar Seleccionados</Button>
        </ButtonContainer>
      </HeaderContainer>

      {solicitudes.map((solicitud, index) => (
        <SolicitudContainer key={solicitud.id}>
          <SolicitudInfo>
            <div>{solicitud.usuario}</div>
            <div>Fecha de Registro: {solicitud.fechaRegistro}</div>
            <div>Fecha de Permiso: {solicitud.fechaPermiso}</div>
            <div>Motivo: {solicitud.motivo}</div>
          </SolicitudInfo>
          <ActionsContainer>
            <Checkbox
              type="checkbox"
              checked={seleccionados[index]}
              onChange={() => toggleCheckbox(index)}
            />
            <Button onClick={() => abrirModal(solicitud)} style={{ backgroundColor: 'blue' }}>Ver Detalle</Button>
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

      {showConfirmModal && (
        <ConfirmModal
          message={confirmMessage}
          onConfirm={confirmActionAndClose}
          onCancel={cancelConfirm}
        />
      )}

      {showInfoModal && (
        <InfoModal
          message={infoMessage}
          onClose={closeInfoModal}
        />
      )}
    </PageContainer>
  );
};

export default RevisarSolicitudes;
