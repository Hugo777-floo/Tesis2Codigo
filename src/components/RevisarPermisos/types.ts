export type Status = 'Aprobado' | 'Rechazado' | 'Pendiente de Aprobación';
export interface Solicitud {
   id: string,
    usuario: string;
    fechaRegistro: string;
    fechaPermiso: string;
    motivo: string;
    status: Status;
    horaEntrada: string;
    horaSalida: string;
    jefeNotificar: string;
    descripcion: string;

  }
  