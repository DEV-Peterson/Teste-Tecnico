using Microsoft.AspNetCore.Mvc;
using PacientesApp.Models;
using System.Text.Json;

namespace PacientesApp.Controllers
{
    [ApiController]
    [Route("api/legacy/pacientes")]
    public class LegacyPatientController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            var filePath = Path.Combine(Directory.GetCurrentDirectory(), "legacy-pacientes.json");
            if (!System.IO.File.Exists(filePath))
                return NotFound("Arquivo legacy-pacientes.json não encontrado.");

            var json = System.IO.File.ReadAllText(filePath);
            var legacyPacientes = JsonSerializer.Deserialize<List<LegacyPatient>>(json);
            if (legacyPacientes == null)
                return BadRequest("Arquivo JSON inválido.");

            var pacientes = legacyPacientes.Select(lp => new Patient
            {
                Id = lp.Codigo,
                Nome = lp.NomeCompleto,
                DataNascimento = DateTime.TryParse(lp.DtNasc, out var dt) ? dt : DateTime.MinValue
            }).ToList();

            return Ok(pacientes);
        }
    }
}