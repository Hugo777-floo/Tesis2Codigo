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

  // Estado inicial con los datos de solicitud y fecha en formato ISO
  const [formData, setFormData] = useState({
    ...solicitud,
    fechaInicio: formatDateToISO(solicitud.fechaInicio),
    fechaFin: formatDateToISO(solicitud.fechaFin),
    documento: solicitud.documento || null,
  });

  const [openSelectId, setOpenSelectId] = useState<string | null>(null); // Controla qué select está abierto

  const handleSelectOpen = (id: string) => setOpenSelectId(id);
  const handleSelectClose = () => setOpenSelectId(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData({ ...formData, documento: file });
  };

  const handleDeleteFile = () => {
    setFormData({ ...formData, documento: null });
  };

  const handleSave = () => {
    const formattedSolicitud = {
      ...formData,
      fechaInicio: formData.fechaInicio.split('-').reverse().join('/'), // Convierte de 'YYYY-MM-DD' a 'DD/MM/YYYY'
      fechaFin: formData.fechaFin.split('-').reverse().join('/'),
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
            Fecha Inicio
            <Input
              type="date"
              name="fechaInicio"
              value={formData.fechaInicio}
              onChange={handleChange}
            />
          </Label>

          <Label>
            Fecha Fin
            <Input
              type="date"
              name="fechaFin"
              value={formData.fechaFin}
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
              <option value="vacaciones">Vacaciones</option>
              <option value="enfermedad">Descanso Médico</option>
              <option value="nacimiento">Nacimiento Hijo</option>
              <option value="luto">Duelo</option>
              <option value="Otro">Otro (Explique en Descripción del caso)</option>
            </Select>
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

          <Label>
            Documento Adjunto
            {formData.documento ? (
              <>
                <a
                  href={formData.documento instanceof File ? URL.createObjectURL(formData.documento) : formData.documento}
                  download={formData.documento instanceof File ? formData.documento.name : 'Documento.pdf'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Descargar Documento Actual
                </a>
                <Button onClick={handleDeleteFile} type="button">
                  Eliminar Documento
                </Button>
              </>
            ) : (
              <Input
                type="file"
                onChange={handleFileChange}
              />
            )}
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

