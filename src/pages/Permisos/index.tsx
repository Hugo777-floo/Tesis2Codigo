import React, { useState } from 'react';
import StatusComponent from '../../components/cardPermisos';
import { PageContainer, HeaderContainer, Title, ButtonContainer, Button } from './styles';
import DetalleSolicitudModal from '../../components/ModalDetallePermiso';
import EditarSolicitudModal from '../../components/ModalEditarPermiso';
import NuevoPermisoPage from '../../components/ModalNuevoPermiso'; // Pantalla para nuevo permiso
import { Solicitud } from './types';
import RevisarSolicitudes from '../../components/RevisarPermisos'; // Importa el componente RevisarSolicitudes

const PermissionsPage = () => {
  const [solicitudes, setSolicitudes] = useState<Solicitud[]>([
    {
      status: 'Pendiente de Aprobación',
      fechaRegistro: '09/10/2024',
      fechaPermiso: '16/10/2024',
      motivo: 'Salida Temprana',
      horaEntrada: 'Regular',
      horaSalida: '2:00 PM',
      jefeNotificar: 'Diego Mendoza',
      usuario: 'Diego Mendoza',
      descripcion: 'Comenté tener una evaluación parcial, sin embargo ahora es un trabajo de investigación que requerirá más tiempo',
    },
    {
      status: 'Aprobado',
      fechaRegistro: '08/10/2024',
      fechaPermiso: '08/10/2024',
      motivo: 'Entrada Tardía',
      horaEntrada: '8:30 AM',
      horaSalida: '5:00 PM',
      jefeNotificar: 'Carlos Pérez',
      usuario: 'Ana Rodríguez',
      descripcion: 'Tuve una reunión importante que me retrasó.',
    },
    {
      status: 'Rechazado',
      fechaRegistro: '01/10/2024',
      fechaPermiso: '02/10/2024',
      motivo: 'Salida Tardía',
      horaEntrada: '9:00 AM',
      horaSalida: '6:00 PM',
      jefeNotificar: 'Laura Gómez',
      usuario: 'Pedro Ruiz',
      descripcion: 'No se justificó adecuadamente la salida tardía.',
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isNuevoPermisoPageOpen, setIsNuevoPermisoPageOpen] = useState(false);
  const [isRevisarSolicitudesOpen, setIsRevisarSolicitudesOpen] = useState(false); // Nuevo estado
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
        solicitud.fechaRegistro === updatedSolicitud.fechaRegistro ? updatedSolicitud : solicitud
      )
    );
    closeModal();
  };

  const saveNewSolicitud = (newSolicitud: Solicitud) => {
    setSolicitudes((prevSolicitudes) => [...prevSolicitudes, newSolicitud]);
    closeNuevoPermisoPage();
  };

  const deleteSolicitud = (fechaRegistro: string) => {
    setSolicitudes((prevSolicitudes) =>
      prevSolicitudes.filter((solicitud) => solicitud.fechaRegistro !== fechaRegistro)
    );
  };

  const openRevisarSolicitudes = () => {
    setIsRevisarSolicitudesOpen(true); // Abre la vista de Revisar Solicitudes
  };

  const closeRevisarSolicitudes = () => {
    setIsRevisarSolicitudesOpen(false); // Cierra la vista de Revisar Solicitudes y vuelve a la vista principal
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
      ) : isRevisarSolicitudesOpen ? ( // Condición para mostrar la vista de Revisar Solicitudes
        <RevisarSolicitudes onClose={closeRevisarSolicitudes} solicitudes={solicitudes} />
      ) : (
        <>
          <HeaderContainer>
            <Title>Últimos Permisos Solicitados</Title>
            <ButtonContainer>
              <Button onClick={openNuevoPermisoPage}>Nuevo Permiso</Button>
              <Button onClick={openRevisarSolicitudes}>Revisar Solicitudes</Button> {/* Botón para abrir Revisar Solicitudes */}
            </ButtonContainer>
          </HeaderContainer>

          {solicitudes.map((solicitud, index) => (
            <StatusComponent
              key={index}
              status={solicitud.status}
              fechaRegistro={solicitud.fechaRegistro}
              fechaPermiso={solicitud.fechaPermiso}
              motivo={solicitud.motivo}
              onVerDetalle={() => openModal(solicitud)}
              onEditar={() => openEditModal(solicitud)}
              onCancelar={() => deleteSolicitud(solicitud.fechaRegistro)}
            />
          ))}

          {selectedSolicitud && (
            <DetalleSolicitudModal
              isOpen={isModalOpen}
              onRequestClose={closeModal}
              solicitud={selectedSolicitud}
            />
          )}

          {selectedSolicitud && (
            <EditarSolicitudModal
              isOpen={isEditModalOpen}
              onRequestClose={closeModal}
              solicitud={selectedSolicitud}
              onSave={saveSolicitud}
            />
          )}
        </>
      )}
    </PageContainer>
  );
};

export default PermissionsPage;