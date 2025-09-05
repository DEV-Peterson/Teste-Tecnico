using Moq;
using PatientManager.Application.Commands.CreatePatient;
using PatientManager.Domain.Entities;
using PatientManager.Domain.Repositories;

namespace PatientManager.Tests.Application.Commands
{
    public class CreatePatientCommandHandlerTests
    {
        [Fact]
        public async Task Handle_DeveCriarPacienteERetornarPaciente()
        {
            // Arrange
            var repoMock = new Mock<IPatientRepository>();
            repoMock.Setup(r => r.CreateAsync(It.IsAny<Patient>()))
                    .ReturnsAsync((Patient p) => { p.Id = 1; return p; });

            var handler = new CreatePatientCommandHandler(repoMock.Object);
            var command = new CreatePatientCommand { Nome = "Teste", DataNascimento = new DateTime(2000, 1, 1) };

            // Act
            var result = await handler.Handle(command, CancellationToken.None);

            // Assert
            Assert.NotNull(result);
            Assert.Equal("Teste", result.Nome);
            Assert.Equal(new DateTime(2000, 1, 1), result.DataNascimento);
            Assert.True(result.Id > 0);
            repoMock.Verify(r => r.CreateAsync(It.IsAny<Patient>()), Times.Once);
        }
    }
}