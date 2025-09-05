using MediatR;
using Microsoft.AspNetCore.Mvc;
using PatientManager.Application.Commands.CreatePatient;
using PatientManager.Application.Queries.GetAllPatients;
using PatientManager.Domain.Entities;

namespace PatientManager.API.Controllers
{
    [ApiController]
    [Route("api/pacientes")]
    public class PatientController : ControllerBase
    {
        private readonly IMediator _mediator;
        public PatientController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public IActionResult Get([FromQuery] string? nome)
        {
            var pacientes = _mediator.Send(new GetAllPatientsQuery(nome)).Result;
            return Ok(pacientes);
        }

        [HttpPost]
        public IActionResult Post([FromBody] CreatePatientCommand command)
        {
            if (string.IsNullOrWhiteSpace(command.Nome))
                return BadRequest("O campo nome é obrigatório.");
            var id = _mediator.Send(command).Result;
            return CreatedAtAction(nameof(Get), new { id }, command);
        }
    }
}