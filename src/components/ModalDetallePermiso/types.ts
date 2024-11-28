export type Status = 'Aprobado' | 'Rechazado' | 'Pendiente de Aprobación';

export interface Solicitud {
    status: Status;               
    fechaRegistro: string;
    fechaPermiso: string;
    motivo: string;
    horaEntrada: string;
    horaSalida: string;
    jefeNotificar: string;
    usuario: string;
    descripcion: string;
  }

export interface DetalleSolicitudModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  solicitud: Solicitud;
}
