using MediatR;
using PatientManager.Application.ViewModels;
using PatientManager.Domain.Repositories;

namespace PatientManager.Application.Queries.GetAllPatients
{
    public class GetAllPatientsQueryHandler : IRequestHandler<GetAllPatientsQuery, List<PatientViewModel>>
    {
        private readonly IPatientRepository _patientRepository;

        public GetAllPatientsQueryHandler(IPatientRepository patientRepository)
        {
            _patientRepository = patientRepository;
        }

        public async Task<List<PatientViewModel>> Handle(GetAllPatientsQuery request, CancellationToken cancellationToken)
        {
            var patients = await _patientRepository.GetAllAsync(request.Nome);

            var patientsViewModel = patients.Select(p => new PatientViewModel(p.Id, p.Nome, p.DataNascimento)).ToList();

            return patientsViewModel;
        }
    }
}
