export type Status = 'Aprobado' | 'Rechazado' | 'Pendiente de Aprobación';

export interface Solicitud {
    status: Status;               // Solo puede ser 'Aprobado', 'Rechazado', o 'Pendiente de Aprobación'
    fechaRegistro: string;
    fechaPermiso: string;
    motivo: string;
    horaEntrada: string;
    horaSalida: string;
    jefeNotificar: string;
    usuario: string;
    descripcion: string;
  }

export interface EditarSolicitudModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  solicitud: Solicitud;
  onSave: (solicitud: Solicitud) => void;
}
