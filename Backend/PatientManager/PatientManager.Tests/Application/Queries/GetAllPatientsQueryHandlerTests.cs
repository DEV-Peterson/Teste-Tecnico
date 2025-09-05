using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Moq;
using Xunit;
using PatientManager.Application.Queries.GetAllPatients;
using PatientManager.Application.ViewModels;
using PatientManager.Domain.Entities;
using PatientManager.Domain.Repositories;

namespace PatientManager.Tests.Application.Queries
{
    public class GetAllPatientsQueryHandlerTests
    {
        [Fact]
        public async Task Handle_DeveRetornarTodosOsPacientesComoViewModel()
        {
            // Arrange
            var patients = new List<Patient>
            {
                new Patient("Paciente 1", new DateTime(1990, 1, 1)) { Id = 1 },
                new Patient("Paciente 2", new DateTime(2000, 2, 2)) { Id = 2 }
            };
            var repoMock = new Mock<IPatientRepository>();
            repoMock.Setup(r => r.GetAllAsync(null)).ReturnsAsync(patients);

            var handler = new GetAllPatientsQueryHandler(repoMock.Object);
            var query = new GetAllPatientsQuery();

            // Act
            var result = await handler.Handle(query, CancellationToken.None);

            // Assert
            Assert.NotNull(result);
            Assert.Equal(2, result.Count);
            Assert.Collection(result,
                p => Assert.Equal("Paciente 1", p.Nome),
                p => Assert.Equal("Paciente 2", p.Nome)
            );
        }

        [Fact]
        public async Task Handle_DeveFiltrarPorNomeSeFornecido()
        {
            // Arrange
            var patients = new List<Patient>
            {
                new Patient("Peterson", new DateTime(1995, 5, 5)) { Id = 3 }
            };
            var repoMock = new Mock<IPatientRepository>();
            repoMock.Setup(r => r.GetAllAsync("Peterson")).ReturnsAsync(patients);

            var handler = new GetAllPatientsQueryHandler(repoMock.Object);
            var query = new GetAllPatientsQuery("Peterson");

            // Act
            var result = await handler.Handle(query, CancellationToken.None);

            // Assert
            Assert.Single(result);
            Assert.Equal("Peterson", result[0].Nome);
        }
    }
}
