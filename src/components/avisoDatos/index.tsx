// components/Notification/index.tsx
import React from 'react';
import { NotificationContainer, InfoIcon, CloseIcon, Message } from './styles';
import { NotificationProps } from './types';

const Notification: React.FC<NotificationProps> = ({ onClose }) => {
  return (
    <NotificationContainer>
      <InfoIcon>ℹ️</InfoIcon>
      <Message>
      <span>Datos solo disponibles para visibilidad</span>
      <span>Si desea editar presione el botón editar</span>
      </Message>
      <CloseIcon onClick={onClose}>✖️</CloseIcon>
    </NotificationContainer>
  );
};

export default Notification;
