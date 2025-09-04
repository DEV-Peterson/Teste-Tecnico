using PacientesApp.Models;

namespace PacientesApp.Repositories
{
    public interface IPatientRepository
    {
        IEnumerable<Patient> GetAll(string? nome = null);
        Patient Add(Patient paciente);
    }
}
