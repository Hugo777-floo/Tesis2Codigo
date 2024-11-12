import React, { useState } from 'react';
import { PageContainer, HeaderContainer, Title, Button, Input, TextArea, Select, Label } from './styles'; // Asegúrate de definir los estilos apropiados
import { Solicitud, Status } from './types';

interface NuevoPermisoPageProps {
  onSave: (newSolicitud: Solicitud) => void;
  onCancel: () => void;
  defaultStatus: Status;
  defaultFechaRegistro: string;
}

const getTodayDate = () => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};

const NuevoPermisoPage: React.FC<NuevoPermisoPageProps> = ({ onSave, onCancel, defaultStatus, defaultFechaRegistro }) => {
  const [motivo, setMotivo] = useState('');
  const [fechaPermiso, setFechaPermiso] = useState(getTodayDate());
  const [horaEntrada, setHoraEntrada] = useState('08:00');
  const [horaSalida, setHoraSalida] = useState('17:00');
  const [jefeNotificar, setJefeNotificar] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [openSelectId, setOpenSelectId] = useState<string | null>(null); // Almacena el ID del select abierto

  const handleSelectOpen = (id: string) => setOpenSelectId(id);
  const handleSelectClose = () => setOpenSelectId(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newSolicitud: Solicitud = {
      status: defaultStatus,
      fechaRegistro: defaultFechaRegistro,
      id: "99",
      fechaPermiso,
      motivo,
      horaEntrada,
      horaSalida,
      jefeNotificar,
      usuario: 'Diego Torres', // Cambia esto por el usuario real si es necesario
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
        <Label>
          Motivo del Permiso
          <Select
            value={motivo}
            onChange={(e) => {
              setMotivo(e.target.value);
              handleSelectClose();
            }}
            onFocus={() => handleSelectOpen('motivo')}
            onBlur={handleSelectClose}
            isOpen={openSelectId === 'motivo'} // La flecha se rota solo si este select está abierto
            required
          >
            <option value="" disabled>Selecciona un motivo</option>
            <option value="Salida Temprana">Salida Temprana</option>
            <option value="Entrada Tardía">Entrada Tardía</option>
            <option value="Emergencia Familiar">Emergencia Familiar</option>
            <option value="Evento Especial">Evento Especial</option>
            <option value="Otro">Otro (Explique en Descripción del caso)</option>
          </Select>
        </Label>
        
        <Label>
          Seleccione la Fecha del permiso
          <Input type="date" value={fechaPermiso} onChange={(e) => setFechaPermiso(e.target.value)} required />
        </Label>

        <Label>
          Modifique su hora de entrada para el permiso en caso sea necesario
          <Input type="time" value={horaEntrada} onChange={(e) => setHoraEntrada(e.target.value)} required />
        </Label>

        <Label>
          Modifique su hora de salida para el permiso en caso sea necesario
          <Input type="time" value={horaSalida} onChange={(e) => setHoraSalida(e.target.value)} required />
        </Label>

        <Label>
          Seleccione el jefe a notificar
          <Select
            value={jefeNotificar}
            onChange={(e) => {
              setJefeNotificar(e.target.value);
              handleSelectClose();
            }}
            onFocus={() => handleSelectOpen('jefeNotificar')}
            onBlur={handleSelectClose}
            isOpen={openSelectId === 'jefeNotificar'}
            required
          >
            <option value="" disabled>Selecciona un jefe a notificar</option>
            <option value="persona1">Diego Mendoza</option>
            <option value="persona2">Juan Sanchez</option>
            <option value="persona3">Abel Abelardo</option>
            <option value="persona4">Alejandra Gallegos</option>
            <option value="Otro">Otro (Explique en Descripción del caso)</option>
          </Select>
        </Label>

        <Label>
          Realice una descripción del caso del permiso
          <TextArea placeholder="Descripción del Caso" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
        </Label>

        <Button type="submit">Enviar</Button>
      </form>
    </PageContainer>
  );
};

export default NuevoPermisoPage;

