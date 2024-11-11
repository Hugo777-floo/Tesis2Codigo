import React from 'react';
import { PageContainer, HeaderContainer, Title, ButtonContainer, Button, SolicitudContainer, SolicitudInfo, ActionsContainer, Checkbox } from './styles';
import { Solicitud } from './types';

interface RevisarSolicitudesProps {
  solicitudes: Solicitud[];
  onClose: () => void;
}

const RevisarSolicitudes: React.FC<RevisarSolicitudesProps> = ({ solicitudes, onClose }) => {
  const handleSeleccionarTodo = () => {
    // Lógica para seleccionar todas las solicitudes
  };

  const handleRechazarSeleccionados = () => {
    // Lógica para rechazar solicitudes seleccionadas
  };

  const handleAprobarSeleccionados = () => {
    // Lógica para aprobar solicitudes seleccionadas
  };

  return (
    <PageContainer>
      <HeaderContainer>
        <Title>Últimos Permisos Solicitados</Title>
        <ButtonContainer>
          <Button onClick={onClose}>Volver</Button>
          <Button onClick={handleSeleccionarTodo}>Seleccionar Todos</Button>
          <Button onClick={handleRechazarSeleccionados} style={{ backgroundColor: 'red' }}>Rechazar Seleccionados</Button>
          <Button onClick={handleAprobarSeleccionados} style={{ backgroundColor: 'green' }}>Aprobar Seleccionados</Button>
        </ButtonContainer>
      </HeaderContainer>

      {solicitudes.map((solicitud, index) => (
        <SolicitudContainer key={index}>
          <SolicitudInfo>
            <div>{solicitud.usuario}</div>
            <div>Fecha de Registro: {solicitud.fechaRegistro}</div>
            <div>Fecha de Permiso: {solicitud.fechaPermiso}</div>
            <div>Motivo: {solicitud.motivo}</div>
          </SolicitudInfo>
          <ActionsContainer>
            <Checkbox type="checkbox" />
            <Button onClick={() => {/* Lógica para ver detalles */}} style={{ backgroundColor: 'blue' }}>Ver Detalle</Button>
            <Button onClick={() => {/* Lógica para cancelar solicitud */}} style={{ backgroundColor: 'red' }}>Cancelar Solicitud</Button>
            <Button onClick={() => {/* Lógica para aprobar solicitud */}} style={{ backgroundColor: 'green' }}>Aprobar Solicitud</Button>
          </ActionsContainer>
        </SolicitudContainer>
      ))}
    </PageContainer>
  );
};

export default RevisarSolicitudes;
