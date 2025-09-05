using System.Text.Json.Serialization;

namespace PatientManager.Domain.Entities
{
    public class LegacyPatient
    {
        [JsonPropertyName("codigo")]
        public int Codigo { get; set; }

        [JsonPropertyName("nomeCompleto")]
        public string NomeCompleto { get; set; } = string.Empty;

        [JsonPropertyName("dtNasc")]
        public string DtNasc { get; set; } = string.Empty;
    }
}
