export type Status = 'Aprobado' | 'Rechazado' | 'Pendiente de Aprobación';

export interface StatusComponentProps {
  status: Status;
  fechaRegistro: string;
  fechaInicio: string;
  fechaVuelta: string;
  motivo: string;
  onVerDetalle: () => void; 
  onEditar?: () => void;
  onCancelar: () => void; 
}