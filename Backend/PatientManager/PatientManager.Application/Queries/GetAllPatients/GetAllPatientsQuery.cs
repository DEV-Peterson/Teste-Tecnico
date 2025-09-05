using MediatR;
using PatientManager.Application.ViewModels;

namespace PatientManager.Application.Queries.GetAllPatients
{
    public class GetAllPatientsQuery : IRequest<List<PatientViewModel>>
    {
        public string? Nome { get; set; }
        public GetAllPatientsQuery(string? nome = null)
        {
            Nome = nome;
        }
    }
}
