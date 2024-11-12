export type Status = 'Aprobado' | 'Rechazado' | 'Pendiente de Aprobación';

export interface Solicitud {
    status: Status;
    id: string,
    fechaRegistro: string;
    fechaInicio: string;
    fechaFin: string;
    motivo: string,
    jefeNotificar: string;
    usuario: string;
    descripcion: string;
    documento?: File | null| string;
  }