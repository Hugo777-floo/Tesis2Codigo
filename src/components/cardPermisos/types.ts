export type Status = 'Aprobado' | 'Rechazado' | 'Pendiente de Aprobación';

export interface StatusComponentProps {
  status: Status;
  fechaRegistro: string;
  fechaPermiso: string;
  motivo: string;
  onVerDetalle: () => void; 
  onEditar?: () => void;
  onCancelar: () => void; // Agregar esta línea
}
