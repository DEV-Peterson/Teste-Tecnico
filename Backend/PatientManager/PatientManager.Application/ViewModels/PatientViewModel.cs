namespace PatientManager.Application.ViewModels
{
    public class PatientViewModel
    {
        public PatientViewModel(int id, string nome, DateTime dataNascimento)
        {
            Nome = nome;
            DataNascimento = dataNascimento;
            Id = id;
        }

        public int Id { get; set; }
        public string Nome { get; set; } = string.Empty;
        public DateTime DataNascimento { get; set; }
    }
}
