import React, { useState } from 'react';
import StatusComponent from '../../components/cardAbsentismos';
import { PageContainer, HeaderContainer, Title, ButtonContainer, Button } from './styles';
import DetalleSolicitudModal from '../../components/ModalDetalleAbsentismo';
import EditarSolicitudModal from '../../components/ModalEditarAbsentismo';
import NuevoPermisoPage from '../../components/ModalNuevoAbsentismo';
import { Solicitud, RevisarSolicitudesDatos, Status } from './types';
import RevisarSolicitudes from '../../components/RevisarAbsentismos';
import InfoModal from '../../components/ModalInformativo';
import ConfirmModal from '../../components/ModalConfirmacion';

const PermissionsPage = () => {
  const [solicitudes, setSolicitudes] = useState<Solicitud[]>([
    {
      id: "04",
      status: 'Pendiente de Aprobación',
      fechaRegistro: '09/10/2024',
      fechaInicio: '16/10/2024',
      fechaFin: '24/10/2024',
      motivo: 'Vacaciones',
      jefeNotificar: 'Alejandra Gallegos',
      usuario: 'Diego Mendoza',
      descripcion: 'Me dio conjuntivitis',
      documento: `${process.env.PUBLIC_URL}/doc/pruebaDocumento.pdf`,
    },
    {
      id: "05",
      status: 'Aprobado',
      fechaRegistro: '08/10/2024',
      fechaInicio: '16/10/2024',
      fechaFin: '24/10/2024',
      motivo: 'Vacaciones',
      documento: `${process.env.PUBLIC_URL}/doc/pruebaDocumento.pdf`,
      jefeNotificar: 'Carlos Pérez',
      usuario: 'Ana Rodríguez',
      descripcion: 'Tuve una reunión importante que me retrasó.',
    },
    {
      id: "06",
      status: 'Rechazado',
      fechaRegistro: '08/10/2024',
      fechaInicio: '16/10/2024',
      fechaFin: '24/10/2024',
      motivo: 'Vacaciones',
      documento: `${process.env.PUBLIC_URL}/doc/pruebaDocumento.pdf`,
      jefeNotificar: 'Laura Gómez',
      usuario: 'Pedro Ruiz',
      descripcion: 'No se justificó adecuadamente la salida tardía.',
    },
  ]);

  const [revisarSolicitudes, setRevisarSolicitudes] = useState<RevisarSolicitudesDatos[]>([
    {
      id: "01",
      status: 'Pendiente de Aprobación',
      fechaRegistro: '09/10/2024',
      fechaInicio: '16/10/2024',
      fechaFin: '24/10/2024',
      motivo: 'Vacaciones',
      documento: `${process.env.PUBLIC_URL}/doc/pruebaDocumento.pdf`,
      jefeNotificar: 'Diego Mendoza',
      usuario: 'Diego Mendoza',
      descripcion: 'Me dio conjuntivitis y se me recetó unos días de descanso',
    },
    {
      id: "02",
      status: 'Pendiente de Aprobación',
      fechaRegistro: '08/10/2024',
      fechaInicio: '16/10/2024',
      fechaFin: '24/10/2024',
      motivo: 'Vacaciones',
      documento: `${process.env.PUBLIC_URL}/doc/pruebaDocumento.pdf`,
      jefeNotificar: 'Carlos Pérez',
      usuario: 'Ana Rodríguez',
      descripcion: 'Tuve una reunión importante que me retrasó.',
    },
    {
      id: "03",
      status: 'Pendiente de Aprobación',
      fechaRegistro: '01/10/2024',
      fechaInicio: '16/10/2024',
      fechaFin: '24/10/2024',
      motivo: 'Vacaciones',
      documento: `${process.env.PUBLIC_URL}/doc/pruebaDocumento.pdf`,
      jefeNotificar: 'Laura Gómez',
      usuario: 'Pedro Ruiz',
      descripcion: 'No se justificó adecuadamente la salida tardía.',
    },
    {
      id: "07",
      status: 'Pendiente de Aprobación',
      fechaRegistro: '09/10/2024',
      fechaInicio: '16/10/2024',
      fechaFin: '24/10/2024',
      motivo: 'Vacaciones',
      documento: `${process.env.PUBLIC_URL}/doc/pruebaDocumento.pdf`,
      jefeNotificar: 'Diego Mendoza',
      usuario: 'Diego Mendoza',
      descripcion: 'Comenté tener una evaluación parcial, sin embargo ahora es un trabajo de investigación que requerirá más tiempo',
    },
    {
      id: "08",
      status: 'Pendiente de Aprobación',
      fechaRegistro: '08/10/2024',
      fechaInicio: '16/10/2024',
      fechaFin: '24/10/2024',
      motivo: 'Vacaciones',
      documento: `${process.env.PUBLIC_URL}/doc/pruebaDocumento.pdf`,
      jefeNotificar: 'Carlos Pérez',
      usuario: 'Ana Rodríguez',
      descripcion: 'Tuve una reunión importante que me retrasó.',
    },
    {
      id: "09",
      status: 'Pendiente de Aprobación',
      fechaRegistro: '01/10/2024',
      fechaInicio: '16/10/2024',
      fechaFin: '24/10/2024',
      motivo: 'Vacaciones',
      documento: `${process.env.PUBLIC_URL}/doc/pruebaDocumento.pdf`,
      jefeNotificar: 'Laura Gómez',
      usuario: 'Pedro Ruiz',
      descripcion: 'No se justificó adecuadamente la salida tardía.',
    },
    {
      id: "10",
      status: 'Pendiente de Aprobación',
      fechaRegistro: '09/10/2024',
      fechaInicio: '16/10/2024',
      fechaFin: '24/10/2024',
      motivo: 'Vacaciones',
      documento: `${process.env.PUBLIC_URL}/doc/pruebaDocumento.pdf`,
      jefeNotificar: 'Diego Mendoza',
      usuario: 'Diego Mendoza',
      descripcion: 'Comenté tener una evaluación parcial, sin embargo ahora es un trabajo de investigación que requerirá más tiempo',
    },
    {
      id: "11",
      status: 'Pendiente de Aprobación',
      fechaRegistro: '08/10/2024',
      fechaInicio: '16/10/2024',
      fechaFin: '24/10/2024',
      motivo: 'Vacaciones',
      documento: `${process.env.PUBLIC_URL}/doc/pruebaDocumento.pdf`,
      jefeNotificar: 'Carlos Pérez',
      usuario: 'Ana Rodríguez',
      descripcion: 'Tuve una reunión importante que me retrasó.',
    },
    {
      id: "12",
      status: 'Pendiente de Aprobación',
      fechaRegistro: '01/10/2024',
      fechaInicio: '16/10/2024',
      fechaFin: '24/10/2024',
      motivo: 'Vacaciones',
      documento: `${process.env.PUBLIC_URL}/doc/pruebaDocumento.pdf`,
      jefeNotificar: 'Laura Gómez',
      usuario: 'Pedro Ruiz',
      descripcion: 'No se justificó adecuadamente la salida tardía.',
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isNuevoPermisoPageOpen, setIsNuevoPermisoPageOpen] = useState(false);
  const [isRevisarSolicitudesOpen, setIsRevisarSolicitudesOpen] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false); 
  const [showConfirmCancelModal, setShowConfirmCancelModal] = useState(false); 
  const [selectedSolicitud, setSelectedSolicitud] = useState<Solicitud | null>(null);
  const [solicitudToDelete, setSolicitudToDelete] = useState<string | null>(null); 
  const [infoMessage, setInfoMessage] = useState(''); 

  const openModal = (solicitud: Solicitud) => {
    setSelectedSolicitud(solicitud);
    setIsModalOpen(true);
  };

  const openEditModal = (solicitud: Solicitud) => {
    setSelectedSolicitud(solicitud);
    setIsEditModalOpen(true);
  };

  const openNuevoPermisoPage = () => {
    setIsNuevoPermisoPageOpen(true);
  };

  const closeNuevoPermisoPage = () => {
    setIsNuevoPermisoPageOpen(false);
  };

  const closeModal = () => {
    setSelectedSolicitud(null);
    setIsModalOpen(false);
    setIsEditModalOpen(false);
  };

  const saveSolicitud = (updatedSolicitud: Solicitud) => {
    setSolicitudes((prevSolicitudes) =>
      prevSolicitudes.map((solicitud) =>
        solicitud.id === updatedSolicitud.id ? updatedSolicitud : solicitud
      )
    );
    closeModal();
  };

  const saveNewSolicitud = (newSolicitud: Solicitud) => {
    setSolicitudes((prevSolicitudes) => [...prevSolicitudes, newSolicitud]);
    closeNuevoPermisoPage();
    setInfoMessage("La solicitud se realizó con exito. Será Notificada al área de Gestión Humana y a su Jefe."); 
    setShowInfoModal(true); 
  };

  const closeInfoModal = () => {
    setShowInfoModal(false); 
  };

  const confirmCancelSolicitud = () => {
    if (solicitudToDelete) {
      setSolicitudes((prevSolicitudes) =>
        prevSolicitudes.filter((solicitud) => solicitud.id !== solicitudToDelete)
      );
    }
    setInfoMessage("La solicitud se realizó con exito. Será Notificada al área de Gestión Humana y a su Jefe."); 
    setShowInfoModal(true); 
    setShowConfirmCancelModal(false); 
  };

  const cancelSolicitud = (id: string) => {
    setSolicitudToDelete(id); 
    setShowConfirmCancelModal(true); 
  };

  const cancelConfirm = () => {
    setShowConfirmCancelModal(false); 
    setSolicitudToDelete(null); 
  };

  const approveSolicitud = (id: string) => {
    setRevisarSolicitudes((prevSolicitudes) => {
      const solicitudAprobada = prevSolicitudes.find((solicitud) => solicitud.id === id);
      if (solicitudAprobada) {
        setSolicitudes((prev) => [
          ...prev,
          { ...solicitudAprobada, status: 'Aprobado' as Status },
        ]);
        return prevSolicitudes.filter((solicitud) => solicitud.id !== id);
      }
      return prevSolicitudes;
    });
  };

  const rejectSolicitud = (id: string) => {
    setRevisarSolicitudes((prevSolicitudes) => {
      const solicitudRechazada = prevSolicitudes.find((solicitud) => solicitud.id === id);
      if (solicitudRechazada) {
        setSolicitudes((prev) => [
          ...prev,
          { ...solicitudRechazada, status: 'Rechazado' as Status },
        ]);
        return prevSolicitudes.filter((solicitud) => solicitud.id !== id);
      }
      return prevSolicitudes;
    });
  };

  const approveSelectedSolicitudes = (ids: string[]) => {
    setRevisarSolicitudes((prevSolicitudes) => {
      const aprobadas = prevSolicitudes.filter((solicitud) => ids.includes(solicitud.id));
      const restantes = prevSolicitudes.filter((solicitud) => !ids.includes(solicitud.id));

      setSolicitudes((prev) => [
        ...prev,
        ...aprobadas.map((solicitud) => ({ ...solicitud, status: 'Aprobado' as Status })),
      ]);

      return restantes;
    });
  };

  const rejectSelectedSolicitudes = (ids: string[]) => {
    setRevisarSolicitudes((prevSolicitudes) => {
      const rechazadas = prevSolicitudes.filter((solicitud) => ids.includes(solicitud.id));
      const restantes = prevSolicitudes.filter((solicitud) => !ids.includes(solicitud.id));

      setSolicitudes((prev) => [
        ...prev,
        ...rechazadas.map((solicitud) => ({ ...solicitud, status: 'Rechazado' as Status })),
      ]);

      return restantes;
    });
  };

  const openRevisarSolicitudes = () => {
    setIsRevisarSolicitudesOpen(true);
  };

  const closeRevisarSolicitudes = () => {
    setIsRevisarSolicitudesOpen(false);
  };

  return (
    <PageContainer>
      {isNuevoPermisoPageOpen ? (
        <NuevoPermisoPage
          onSave={saveNewSolicitud}
          onCancel={closeNuevoPermisoPage}
          defaultStatus="Pendiente de Aprobación"
          defaultFechaRegistro={new Date().toLocaleDateString()}
        />
      ) : isRevisarSolicitudesOpen ? (
        <RevisarSolicitudes
          onClose={closeRevisarSolicitudes}
          solicitudes={revisarSolicitudes}
          onApprove={approveSolicitud}
          onReject={rejectSolicitud}
          onApproveSelected={approveSelectedSolicitudes}
          onRejectSelected={rejectSelectedSolicitudes}
        />
      ) : (
        <>
          <HeaderContainer>
            <Title>Últimos Absentismos Solicitados</Title>
            <ButtonContainer>
              <Button onClick={openNuevoPermisoPage}>Nuevo Absentismo</Button>
              <Button onClick={openRevisarSolicitudes}>Revisar Solicitudes</Button>
            </ButtonContainer>
          </HeaderContainer>

          {solicitudes.map((solicitud) => (
            <StatusComponent
              key={solicitud.id}
              status={solicitud.status}
              fechaRegistro={solicitud.fechaRegistro}
              fechaInicio={solicitud.fechaInicio}
              fechaVuelta={solicitud.fechaFin}
              motivo={solicitud.motivo}
              onVerDetalle={() => openModal(solicitud)}
              onEditar={() => openEditModal(solicitud)}
              onCancelar={() => cancelSolicitud(solicitud.id)}
            />
          ))}

          {selectedSolicitud && (
            <>
              <DetalleSolicitudModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                solicitud={selectedSolicitud}
              />
              <EditarSolicitudModal
                isOpen={isEditModalOpen}
                onRequestClose={closeModal}
                solicitud={selectedSolicitud}
                onSave={saveSolicitud}
              />
            </>
          )}
        </>
      )}

      {}
      {showInfoModal && (
        <InfoModal
          message={infoMessage} 
          onClose={closeInfoModal}
        />
      )}

      {}
      {showConfirmCancelModal && (
        <ConfirmModal
          message="¿Estás seguro de que deseas cancelar esta solicitud?"
          onConfirm={confirmCancelSolicitud}
          onCancel={cancelConfirm}
        />
      )}
    </PageContainer>
  );
};

export default PermissionsPage;

