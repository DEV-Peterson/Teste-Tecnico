export interface Patient {
  id: number;
  nome: string;
  dataNascimento: string; // ISO format with time from .NET
}

export interface PatientFormData {
  nome: string;
  dataNascimento: string; // Will be sent as YYYY-MM-DD from form
}

export interface PatientSearchParams {
  nome?: string;
}