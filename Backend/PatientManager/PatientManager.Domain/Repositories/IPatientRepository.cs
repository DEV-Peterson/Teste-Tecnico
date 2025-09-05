
using PatientManager.Domain.Entities;

namespace PatientManager.Domain.Repositories
{
    public interface IPatientRepository
    {
        Task<List<Patient>> GetAllAsync(string? nome = null);
        Task<Patient> CreateAsync(Patient paciente);
    }
}
