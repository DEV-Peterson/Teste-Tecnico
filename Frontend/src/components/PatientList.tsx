import type { Patient } from '../types/Patient';
import { User, Calendar, Users } from 'lucide-react';

interface PatientListProps {
  patients: Patient[];
  isLoading: boolean;
  error?: any;
}

export function PatientList({ patients, isLoading, error }: PatientListProps) {
  if (isLoading) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center">
            <Users className="h-4 w-4 text-blue-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">Lista de Pacientes</h2>
        </div>
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-gray-50 rounded-lg p-4 animate-pulse">
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-gray-300 h-10 w-10"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center">
            <Users className="h-4 w-4 text-blue-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">Lista de Pacientes</h2>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <div className="text-red-600 font-medium">Erro ao carregar pacientes</div>
          <div className="text-red-500 text-sm mt-1">
            Verifique se o backend está rodando e tente novamente.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center">
          <Users className="h-4 w-4 text-blue-600" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900">
          Lista de Pacientes
          {patients.length > 0 && (
            <span className="ml-2 text-sm font-normal text-gray-500">
              ({patients.length} {patients.length === 1 ? 'paciente' : 'pacientes'})
            </span>
          )}
        </h2>
      </div>

      {patients.length === 0 ? (
        <div className="text-center py-12">
          <User className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <div className="text-gray-600 font-medium">Nenhum paciente encontrado</div>
          <div className="text-gray-500 text-sm mt-1">
            Tente uma busca diferente ou cadastre um novo paciente.
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          {patients.map((patient, index) => (
            <div
              key={patient.id}
              className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-all duration-200 border border-gray-100 hover:border-gray-200"
              style={{
                animationDelay: `${index * 50}ms`,
                animation: 'fadeInUp 0.3s ease-out forwards',
              }}
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-lg font-semibold text-gray-900 truncate">
                    {patient.nome}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>
                      {new Date(patient.dataNascimento).toLocaleDateString('pt-BR', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit'
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}