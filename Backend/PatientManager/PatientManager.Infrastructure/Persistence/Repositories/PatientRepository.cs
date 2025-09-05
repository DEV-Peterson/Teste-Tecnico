using PatientManager.Domain.Entities;
using PatientManager.Domain.Repositories;

namespace PatientManager.Infrastructure.Persistence.Repositories
{
    public class PatientRepository : IPatientRepository
    {
        private readonly List<Patient> _pacientes = new();
        private int _nextId = 1;

        public async Task<List<Patient>> GetAllAsync(string? nome = null)
        {
            if (string.IsNullOrWhiteSpace(nome))
                return await Task.FromResult(_pacientes);
            return await Task.FromResult(_pacientes.Where(p => p.Nome.Contains(nome, StringComparison.OrdinalIgnoreCase)).ToList());
        }

        public async Task<Patient> CreateAsync(Patient paciente)
        {
            paciente.Id = _nextId++;
            _pacientes.Add(paciente);
            return await Task.FromResult(paciente);
        }
    }
}