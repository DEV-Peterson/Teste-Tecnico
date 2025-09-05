namespace PatientManager.Domain.Entities
{
    public class Patient
    {
        public Patient() { }

        public Patient(string nome, DateTime dataNascimento)
        {
            Nome = nome;
            DataNascimento = dataNascimento;
        }

        public int Id { get; set; }
        public string Nome { get; set; } = string.Empty;
        public DateTime DataNascimento { get; set; }
    }
}