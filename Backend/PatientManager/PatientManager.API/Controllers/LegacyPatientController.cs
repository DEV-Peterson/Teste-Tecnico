using MediatR;
using Microsoft.AspNetCore.Mvc;
using PatientManager.Domain.Entities;
using System.Text.Json;

namespace PatientManager.API.Controllers
{
    [ApiController]
    [Route("api/legacy/pacientes")]
    public class LegacyPatientController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            var baseDir = Directory.GetCurrentDirectory();
            var infraPath = Path.Combine(baseDir, "..", "PatientManager.Infrastructure", "Files", "legacy-pacientes.json");
            var filePath = Path.GetFullPath(infraPath);

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