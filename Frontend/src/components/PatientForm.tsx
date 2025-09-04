import React, { useState } from 'react';
import { useCreatePatientMutation } from '../store/patientSlice';
import type { PatientFormData } from '../types/Patient';
import { Plus, User, Calendar, Check, AlertCircle } from 'lucide-react';

export function PatientForm() {
  const [createPatient, { isLoading, error, isSuccess }] = useCreatePatientMutation();
  const [formData, setFormData] = useState<PatientFormData>({
    nome: '',
    dataNascimento: '',
  });
  const [validationErrors, setValidationErrors] = useState<Partial<PatientFormData>>({});

  const validateForm = (): boolean => {
    const errors: Partial<PatientFormData> = {};
    
    if (!formData.nome.trim()) {
      errors.nome = 'Nome é obrigatório';
    }
    
    if (!formData.dataNascimento) {
      errors.dataNascimento = 'Data de nascimento é obrigatória';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      await createPatient(formData).unwrap();
      setFormData({ nome: '', dataNascimento: '' });
      setValidationErrors({});
    } catch (err) {
      console.error('Erro ao cadastrar paciente:', err);
    }
  };

  const handleInputChange = (field: keyof PatientFormData, value: string) => {
    setFormData((prev: PatientFormData) => ({ ...prev, [field]: value }));
    if (validationErrors[field]) {
      setValidationErrors((prev: Partial<PatientFormData>) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="h-8 w-8 bg-green-100 rounded-lg flex items-center justify-center">
          <Plus className="h-4 w-4 text-green-600" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900">Cadastrar Novo Paciente</h2>
      </div>

      {isSuccess && (
        <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
          <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
          <div className="text-green-700">Paciente cadastrado com sucesso!</div>
        </div>
      )}

      {error && (
        <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-3">
          <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
          <div className="text-red-700">
            Erro ao cadastrar paciente. Verifique os dados e tente novamente.
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
            Nome Completo *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              id="nome"
              value={formData.nome}
              onChange={(e) => handleInputChange('nome', e.target.value)}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 transition-all duration-200 ${
                validationErrors.nome
                  ? 'border-red-300 focus:ring-red-500 focus:border-transparent'
                  : 'border-gray-300 focus:ring-blue-500 focus:border-transparent'
              }`}
              placeholder="Digite o nome completo do paciente"
            />
          </div>
          {validationErrors.nome && (
            <div className="mt-2 text-sm text-red-600">{validationErrors.nome}</div>
          )}
        </div>

        <div>
          <label htmlFor="dataNascimento" className="block text-sm font-medium text-gray-700 mb-2">
            Data de Nascimento *
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="date"
              id="dataNascimento"
              value={formData.dataNascimento}
              onChange={(e) => handleInputChange('dataNascimento', e.target.value)}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 transition-all duration-200 ${
                validationErrors.dataNascimento
                  ? 'border-red-300 focus:ring-red-500 focus:border-transparent'
                  : 'border-gray-300 focus:ring-blue-500 focus:border-transparent'
              }`}
            />
          </div>
          {validationErrors.dataNascimento && (
            <div className="mt-2 text-sm text-red-600">{validationErrors.dataNascimento}</div>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2"
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
          ) : (
            <>
              <Plus className="h-4 w-4" />
              <span>Cadastrar Paciente</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}