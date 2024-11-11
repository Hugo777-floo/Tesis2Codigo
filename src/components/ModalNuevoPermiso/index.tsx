import React, { useState } from 'react';
import { PageContainer, HeaderContainer, Title, Button, Input, TextArea, Select } from './styles'; // Asegúrate de definir los estilos apropiados
import { Solicitud, Status } from './types';

interface NuevoPermisoPageProps {
  onSave: (newSolicitud: Solicitud) => void;
  onCancel: () => void;
  defaultStatus: Status;
  defaultFechaRegistro: string;
}

const NuevoPermisoPage: React.FC<NuevoPermisoPageProps> = ({ onSave, onCancel, defaultStatus, defaultFechaRegistro }) => {
  const [motivo, setMotivo] = useState('');
  const [fechaPermiso, setFechaPermiso] = useState('');
  const [horaEntrada, setHoraEntrada] = useState('');
  const [horaSalida, setHoraSalida] = useState('');
  const [jefeNotificar, setJefeNotificar] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newSolicitud: Solicitud = {
      status: defaultStatus,
      fechaRegistro: defaultFechaRegistro,
      fechaPermiso,
      motivo,
      horaEntrada,
      horaSalida,
      jefeNotificar,
      usuario: 'Usuario Ejemplo', // Cambia esto por el usuario real si es necesario
      descripcion,
    };
    onSave(newSolicitud);
  };

  return (
    <PageContainer>
      <HeaderContainer>
        <Title>Nuevo Permiso</Title>
        <Button onClick={onCancel}>Volver</Button>
      </HeaderContainer>
      <form onSubmit={handleSubmit}>
        <Select value={motivo} onChange={(e) => setMotivo(e.target.value)} required>
          <option value="" disabled>Selecciona un motivo</option>
          <option value="Salida Temprana">Salida Temprana</option>
          <option value="Entrada Tardía">Entrada Tardía</option>
          <option value="Otro">Otro</option>
        </Select>
        <Input type="date" value={fechaPermiso} onChange={(e) => setFechaPermiso(e.target.value)} required />
        <Input type="time" value={horaEntrada} onChange={(e) => setHoraEntrada(e.target.value)} required />
        <Input type="time" value={horaSalida} onChange={(e) => setHoraSalida(e.target.value)} required />
        <Input type="text" placeholder="Jefe a Notificar" value={jefeNotificar} onChange={(e) => setJefeNotificar(e.target.value)} required />
        <TextArea placeholder="Descripción del Caso" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
        <Button type="submit">Enviar</Button>
      </form>
    </PageContainer>
  );
};

export default NuevoPermisoPage;
