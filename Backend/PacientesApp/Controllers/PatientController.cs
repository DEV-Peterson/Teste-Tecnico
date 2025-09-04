using Microsoft.AspNetCore.Mvc;
using PacientesApp.Models;
using PacientesApp.Repositories;

namespace PacientesApp.Controllers
{
    [ApiController]
    [Route("api/pacientes")]
    public class PatientController : ControllerBase
    {
        private readonly IPatientRepository _repo;

        public PatientController(IPatientRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IActionResult Get([FromQuery] string? nome)
        {
            var pacientes = _repo.GetAll(nome);
            return Ok(pacientes);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Patient paciente)
        {
            if (string.IsNullOrWhiteSpace(paciente.Nome))
                return BadRequest("O campo nome é obrigatório.");
            var novoPaciente = _repo.Add(paciente);
            return CreatedAtAction(nameof(Get), new { id = novoPaciente.Id }, novoPaciente);
        }
    }
}