import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { EditarSolicitudModalProps } from './types';
import {
  PageContainer,
  HeaderContainer,
  Title,
  Button,
  Input,
  TextArea,
  Select,
  Label,
  ButtonContainer,
  SaveButton,
  CancelButton,
} from './styles';

const DetalleSolicitudModal: React.FC<EditarSolicitudModalProps> = ({
  isOpen,
  onRequestClose,
  solicitud,
  onSave,
}) => {
  // Función para convertir 'DD/MM/YYYY' a 'YYYY-MM-DD'
  const formatDateToISO = (dateString: string) => {
    const [day, month, year] = dateString.split('/');
    return `${year}-${month}-${day}`;
  };

  // Configuramos el estado inicial con los datos de solicitud y fecha en formato ISO
  const [formData, setFormData] = useState({
    ...solicitud,
    fechaPermiso: formatDateToISO(solicitud.fechaPermiso),
  });

  const [openSelectId, setOpenSelectId] = useState<string | null>(null); // Controla qué select está abierto

  const handleSelectOpen = (id: string) => setOpenSelectId(id);
  const handleSelectClose = () => setOpenSelectId(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    const formattedSolicitud = {
      ...formData,
      fechaPermiso: formData.fechaPermiso.split('-').reverse().join('/'), // Convierte de 'YYYY-MM-DD' a 'DD/MM/YYYY'
    };
    onSave(formattedSolicitud);
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Editar Solicitud">
      <PageContainer>
        <HeaderContainer>
          <Title>Editar Solicitud</Title>
          <Button onClick={onRequestClose}>Cerrar</Button>
        </HeaderContainer>
        <form>
          <Label>
            Fecha Programada
            <Input
              type="date"
              name="fechaPermiso"
              value={formData.fechaPermiso}
              onChange={handleChange}
            />
          </Label>

          <Label>
            Motivo del Permiso
            <Select
              name="motivo"
              value={formData.motivo}
              onChange={(e) => {
                handleChange(e);
                handleSelectClose();
              }}
              onFocus={() => handleSelectOpen('motivo')}
              onBlur={handleSelectClose}
              isOpen={openSelectId === 'motivo'} // Controla la flecha del select
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
            Hora Entrada
            <Input
              type="time"
              name="horaEntrada"
              value={formData.horaEntrada}
              onChange={handleChange}
              required
            />
          </Label>

          <Label>
            Hora Salida
            <Input
              type="time"
              name="horaSalida"
              value={formData.horaSalida}
              onChange={handleChange}
              required
            />
          </Label>

          <Label>
            Jefe a Notificar
            <Select
              name="jefeNotificar"
              value={formData.jefeNotificar}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Selecciona un jefe a notificar</option>
              <option value="Diego Mendoza">Diego Mendoza</option>
              <option value="Juan Sanchez">Juan Sanchez</option>
              <option value="Abel Abelardo">Abel Abelardo</option>
              <option value="Alejandra Gallegos">Alejandra Gallegos</option>
              <option value="Otro">Otro (Explique en Descripción del caso)</option>
            </Select>
          </Label>

          <Label>
            Descripción del Caso / Comentario
            <TextArea
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              required
            />
          </Label>
        </form>
        
        <ButtonContainer>
          <SaveButton onClick={handleSave}>Guardar Cambios</SaveButton>
          <CancelButton onClick={onRequestClose}>Cancelar</CancelButton>
        </ButtonContainer>
      </PageContainer>
    </Modal>
  );
};

export default DetalleSolicitudModal;
