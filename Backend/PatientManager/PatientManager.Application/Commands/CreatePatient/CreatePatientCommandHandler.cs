using MediatR;
using PatientManager.Domain.Entities;
using PatientManager.Domain.Repositories;

namespace PatientManager.Application.Commands.CreatePatient
{
    public class CreatePatientCommandHandler : IRequestHandler<CreatePatientCommand, Patient>
    {
        private readonly IPatientRepository _patientRepository;

        public CreatePatientCommandHandler(IPatientRepository patientRepository)
        {
            _patientRepository = patientRepository;
        }

        public async Task<Patient> Handle(CreatePatientCommand request, CancellationToken cancellationToken)
        {
            var patient = new Patient(request.Nome, request.DataNascimento);

            await _patientRepository.CreateAsync(patient);

            return patient;
        }
    }
}
