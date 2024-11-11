import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { EditarSolicitudModalProps } from './types';
import {
  Container,
  Title,
  Form,
  FormItem,
  Label,
  Input,
  TextArea,
  ButtonContainer,
  SaveButton,
  CancelButton
} from './styles';

const DetalleSolicitudModal: React.FC<EditarSolicitudModalProps> = ({
  isOpen,
  onRequestClose,
  solicitud,
  onSave
}) => {
  // Función para convertir 'DD/MM/YYYY' a 'YYYY-MM-DD'
  const formatDateToISO = (dateString: string) => {
    const [day, month, year] = dateString.split('/');
    return `${year}-${month}-${day}`;
  };

  // Configuramos el estado inicial con la fecha en formato 'YYYY-MM-DD'
  const [formData, setFormData] = useState({
    ...solicitud,
    fechaPermiso: formatDateToISO(solicitud.fechaPermiso)
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    // Si deseas conservar el formato 'DD/MM/YYYY' al guardar, convierte la fecha de vuelta
    const formattedSolicitud = {
      ...formData,
      fechaPermiso: formData.fechaPermiso.split('-').reverse().join('/') // Convierte de 'YYYY-MM-DD' a 'DD/MM/YYYY'
    };
    onSave(formattedSolicitud);
    onRequestClose(); // Cierra el modal después de guardar
  };
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Editar Solicitud">
      <Container>
        <Title>Editar Solicitud</Title>
        <Form>
          <FormItem>
            <Label>Fecha Programada</Label>
            <Input
              type="date"
              name="fechaPermiso"
              value={formData.fechaPermiso}
              onChange={handleChange}
            />
          </FormItem>
          <FormItem>
            <Label>Motivo</Label>
            <Input
              type="text"
              name="motivo"
              value={formData.motivo}
              onChange={handleChange}
            />
          </FormItem>
          <FormItem>
            <Label>Hora Entrada</Label>
            <Input
              type="text"
              name="horaEntrada"
              value={formData.horaEntrada}
              onChange={handleChange}
            />
          </FormItem>
          <FormItem>
            <Label>Hora Salida</Label>
            <Input
              type="text"
              name="horaSalida"
              value={formData.horaSalida}
              onChange={handleChange}
            />
          </FormItem>
          <FormItem>
            <Label>Jefe a Notificar</Label>
            <Input
              type="text"
              name="jefeNotificar"
              value={formData.jefeNotificar}
              onChange={handleChange}
            />
          </FormItem>
          <FormItem>
            <Label>Descripción del Caso / Comentario</Label>
            <TextArea
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
            />
          </FormItem>
        </Form>
        <ButtonContainer>
          <SaveButton onClick={handleSave}>Editar</SaveButton>
          <CancelButton onClick={onRequestClose}>Cancelar</CancelButton>
        </ButtonContainer>
      </Container>
    </Modal>
  );
};

export default DetalleSolicitudModal;
