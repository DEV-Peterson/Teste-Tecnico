import { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { SearchField } from './components/SearchField';
import { PatientList } from './components/PatientList';
import { PatientForm } from './components/PatientForm';
import { useGetPatientsQuery } from './store/patientSlice';
import { Activity } from 'lucide-react';

function PatientManagementApp() {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const {
    data: patients = [],
    error,
    isLoading,
  } = useGetPatientsQuery(
    debouncedSearchTerm ? { nome: debouncedSearchTerm } : {}
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="h-12 w-12 bg-blue-600 rounded-xl flex items-center justify-center">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">
              Sistema de Gerenciamento de Pacientes
            </h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Busque, visualize e cadastre pacientes de forma rápida e eficiente.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <SearchField
            value={searchTerm}
            onChange={setSearchTerm}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="lg:col-span-1">
              <PatientList
                patients={patients}
                isLoading={isLoading}
                error={error}
              />
            </div>

            <div className="lg:col-span-1">
              <PatientForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <PatientManagementApp />
    </Provider>
  );
}

export default App;