export type Status = 'Aprobado' | 'Rechazado' | 'Pendiente de Aprobación';
export interface Solicitud {
    usuario: string;
    fechaRegistro: string;
    fechaPermiso: string;
    motivo: string;
    status?: Status; // Opcional, en caso de necesitar el estado actual de la solicitud (pendiente, aprobado, rechazado)
  }
  