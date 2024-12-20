export type Status = 'Aprobado' | 'Rechazado' | 'Pendiente de Aprobación';

export interface Solicitud {
    status: Status;
    id: string,
    fechaRegistro: string;
    fechaPermiso: string;
    motivo: string;
    horaEntrada: string;
    horaSalida: string;
    jefeNotificar: string;
    usuario: string;
    descripcion: string;
  }
  