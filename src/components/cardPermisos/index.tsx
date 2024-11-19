import React from 'react';
import { Wrapper, Container, StatusText, InfoText, ButtonContainer, Button } from './styles';
import { StatusComponentProps } from './types';


const StatusComponent: React.FC<StatusComponentProps> = ({
  status,
  fechaRegistro,
  fechaPermiso,
  motivo,
  onVerDetalle,
  onEditar,
  onCancelar
}) => {
  return (
    <Wrapper>
      <Container status={status}>
        <StatusText status={status}>{status}</StatusText>
        <InfoText>Fecha de Registro: {fechaRegistro}</InfoText>
        <InfoText>Fecha de Permiso: {fechaPermiso}</InfoText>
        <InfoText>Motivo: {motivo}</InfoText>
      </Container>
      <ButtonContainer>
        {status === 'Pendiente de Aprobación' ? (
          <>
            <Button color="blue" onClick={onEditar}>Editar</Button>
            <Button color="red" onClick={onCancelar}>Cancelar</Button> {/* Botón de cancelar */}
          </>
        ) : (
          <Button color="blue" onClick={onVerDetalle}>Ver Detalle</Button>
        )}
      </ButtonContainer>
    </Wrapper>
  );
};

export default StatusComponent;


