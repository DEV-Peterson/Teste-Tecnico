using MediatR;
using PatientManager.Domain.Entities;

namespace PatientManager.Application.Commands.CreatePatient
{
    public class CreatePatientCommand : IRequest<Patient>
    {
        public string Nome { get; set; } = string.Empty;
        public DateTime DataNascimento { get; set; }
    }
}
