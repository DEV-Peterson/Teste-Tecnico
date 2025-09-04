
using PacientesApp.Models;

namespace PacientesApp.Repositories
{
    public class PatientRepository : IPatientRepository
    {
        private readonly List<Patient> _pacientes = new();
        private int _nextId = 1;

        public IEnumerable<Patient> GetAll(string? nome = null)
        {
            if (string.IsNullOrWhiteSpace(nome))
                return _pacientes;
            return _pacientes.Where(p => p.Nome.Contains(nome, StringComparison.OrdinalIgnoreCase));
        }

        public Patient Add(Patient paciente)
        {
            paciente.Id = _nextId++;
            _pacientes.Add(paciente);
            return paciente;
        }
    }
}