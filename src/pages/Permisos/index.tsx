import React, { useState } from 'react';
import StatusComponent from '../../components/cardPermisos';
import { PageContainer, HeaderContainer, Title, ButtonContainer, Button } from './styles';
import DetalleSolicitudModal from '../../components/ModalDetallePermiso';
import EditarSolicitudModal from '../../components/ModalEditarPermiso';
import NuevoPermisoPage from '../../components/ModalNuevoPermiso';
import { Solicitud, RevisarSolicitudesDatos, Status } from './types';
import RevisarSolicitudes from '../../components/RevisarPermisos';

const PermissionsPage = () => {
  const [solicitudes, setSolicitudes] = useState<Solicitud[]>([
    {
      id: "04",
      status: 'Pendiente de Aprobación',
      fechaRegistro: '09/10/2024',
      fechaPermiso: '16/10/2024',
      motivo: 'Salida Temprana',
      horaEntrada: '08:00',
      horaSalida: '14:00',
      jefeNotificar: 'Alejandra Gallegos',
      usuario: 'Diego Mendoza',
      descripcion: 'Comenté tener una evaluación parcial, sin embargo ahora es un trabajo de investigación que requerirá más tiempo',
    },
    {
      id: "05",
      status: 'Aprobado',
      fechaRegistro: '08/10/2024',
      fechaPermiso: '08/10/2024',
      motivo: 'Entrada Tardía',
      horaEntrada: '08:30',
      horaSalida: '17:00',
      jefeNotificar: 'Carlos Pérez',
      usuario: 'Ana Rodríguez',
      descripcion: 'Tuve una reunión importante que me retrasó.',
    },
    {
      id: "06",
      status: 'Rechazado',
      fechaRegistro: '01/10/2024',
      fechaPermiso: '02/10/2024',
      motivo: 'Salida Tardía',
      horaEntrada: '9:00',
      horaSalida: '18:00',
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
      fechaPermiso: '16/11/2024',
      motivo: 'Salida Temprana',
      horaEntrada: '08:00',
      horaSalida: '14:00',
      jefeNotificar: 'Diego Mendoza',
      usuario: 'Diego Mendoza',
      descripcion: 'Comenté tener una evaluación parcial, sin embargo ahora es un trabajo de investigación que requerirá más tiempo',
    },
    {
      id: "02",
      status: 'Pendiente de Aprobación',
      fechaRegistro: '08/10/2024',
      fechaPermiso: '18/11/2024',
      motivo: 'Entrada Tardía',
      horaEntrada: '08:30',
      horaSalida: '17:00',
      jefeNotificar: 'Carlos Pérez',
      usuario: 'Ana Rodríguez',
      descripcion: 'Tuve una reunión importante que me retrasó.',
    },
    {
      id: "03",
      status: 'Pendiente de Aprobación',
      fechaRegistro: '01/10/2024',
      fechaPermiso: '17/11/2024',
      motivo: 'Salida Tardía',
      horaEntrada: '9:00',
      horaSalida: '18:00',
      jefeNotificar: 'Laura Gómez',
      usuario: 'Pedro Ruiz',
      descripcion: 'No se justificó adecuadamente la salida tardía.',
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isNuevoPermisoPageOpen, setIsNuevoPermisoPageOpen] = useState(false);
  const [isRevisarSolicitudesOpen, setIsRevisarSolicitudesOpen] = useState(false);
  const [selectedSolicitud, setSelectedSolicitud] = useState<Solicitud | null>(null);

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
  };

  const deleteSolicitud = (id: string) => {
    setSolicitudes((prevSolicitudes) =>
      prevSolicitudes.filter((solicitud) => solicitud.id !== id)
    );
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
            <Title>Últimos Permisos Solicitados</Title>
            <ButtonContainer>
              <Button onClick={openNuevoPermisoPage}>Nuevo Permiso</Button>
              <Button onClick={openRevisarSolicitudes}>Revisar Solicitudes</Button>
            </ButtonContainer>
          </HeaderContainer>

          {solicitudes.map((solicitud) => (
            <StatusComponent
              key={solicitud.id}
              status={solicitud.status}
              fechaRegistro={solicitud.fechaRegistro}
              fechaPermiso={solicitud.fechaPermiso}
              motivo={solicitud.motivo}
              onVerDetalle={() => openModal(solicitud)}
              onEditar={() => openEditModal(solicitud)}
              onCancelar={() => deleteSolicitud(solicitud.id)}
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
    </PageContainer>
  );
};

export default PermissionsPage;

