import React, { useState } from 'react';
import { PageContainer, HeaderContainer, Title, Button, Input, TextArea, Select, Label } from './styles';
import { Solicitud, Status } from './types';
import ConfirmModal from '../../components/ModalConfirmacion';
import InfoModal from '../../components/ModalInformativo'; 
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
  const [fechaInicio, setFechaInicio] = useState(getTodayDate());
  const [fechaFin, setFechaFin] = useState(getTodayDate());
  const [documento, setDocumento] = useState<File | null>(null);
  const [jefeNotificar, setJefeNotificar] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [openSelectId, setOpenSelectId] = useState<string | null>(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false); 
  const [showInfoModal, setShowInfoModal] = useState(false); 

  const handleSelectOpen = (id: string) => setOpenSelectId(id);
  const handleSelectClose = () => setOpenSelectId(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setDocumento(file);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowConfirmModal(true);
  };

  const confirmSave = () => {
    const newSolicitud: Solicitud = {
      status: defaultStatus,
      fechaRegistro: defaultFechaRegistro,
      id: "99",
      fechaInicio,
      fechaFin,
      motivo,
      documento,
      jefeNotificar,
      usuario: 'Diego Torres',
      descripcion,
    };
    onSave(newSolicitud);
    setShowConfirmModal(false); 
    setShowInfoModal(true); 
  };

  const closeInfoModal = () => {
    setShowInfoModal(false);
    onCancel(); 
  };

  const cancelConfirm = () => {
    setShowConfirmModal(false); 
  };

  return (
    <PageContainer>
      <HeaderContainer>
        <Title>Nuevo Absentismo</Title>
        <Button onClick={onCancel}>Volver</Button>
      </HeaderContainer>
      <form onSubmit={handleSubmit}>
        <Label>
          Motivo del Absentismo
          <Select
            value={motivo}
            onChange={(e) => {
              setMotivo(e.target.value);
              handleSelectClose();
            }}
            onFocus={() => handleSelectOpen('motivo')}
            onBlur={handleSelectClose}
            isOpen={openSelectId === 'motivo'}
            required
          >
            <option value="" disabled>Selecciona un motivo</option>
            <option value="Vacaciones">Vacaciones</option>
            <option value="Descanso Médico">Descanso Médico</option>
            <option value="Nacimiento Hijo">Nacimiento Hijo</option>
            <option value="Duelo">Duelo</option>
            <option value="Otro (Explique en Descripción del caso)">Otro (Explique en Descripción del caso)</option>
          </Select>
        </Label>
        
        <Label>
          Seleccione la Fecha de inicio de su absentismo
          <Input type="date" value={fechaInicio} onChange={(e) => setFechaInicio(e.target.value)} required />
        </Label>
        <Label>
          Seleccione la Fecha de fin de su absentismo
          <Input type="date" value={fechaFin} onChange={(e) => setFechaFin(e.target.value)} required />
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
          Realice una descripción del caso del absentismo
          <TextArea placeholder="Descripción del Caso" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
        </Label>

        <Label>
          Subir Documento (opcional)
          <Input type="file" onChange={handleFileChange} />
        </Label>

        <Button type="submit">Enviar</Button>
      </form>

      {}
      {showConfirmModal && (
        <ConfirmModal
          message="¿Estás seguro de que deseas enviar esta solicitud de absentismo?"
          onConfirm={confirmSave} 
          onCancel={cancelConfirm} 
        />
      )}

      {}
      {showInfoModal && (
        <InfoModal
          message="Su solicitud de absentismo ha sido enviada exitosamente."
          onClose={closeInfoModal} 
        />
      )}
    </PageContainer>
  );
};

export default NuevoPermisoPage;
