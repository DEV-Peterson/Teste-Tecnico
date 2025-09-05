# Sistema de Gerenciamento de Pacientes

Este projeto é um sistema web completo para busca, cadastro, listagem e integração de pacientes, desenvolvido com **React + TypeScript + Redux Toolkit** no frontend e **.NET 8** no backend. O sistema adota arquitetura moderna, boas práticas de design e integrações com sistemas legados.

---

## Tecnologias Utilizadas

**Backend (.NET 8)**
- ASP.NET Core Web API
- CQRS (Command Query Responsibility Segregation) com MediatR
- Repository Pattern
- Injeção de Dependência
- Testes unitários com xUnit e Moq

**Frontend**
- React + TypeScript
- Redux Toolkit (RTK Query)
- Tailwind CSS
- Vite

---

## Arquitetura e Padrões

- **Clean Architecture**: Separação em camadas (Domain, Application, Infrastructure, API)
- **CQRS**: Separação entre comandos (escrita) e queries (leitura)
- **Repository Pattern**: Abstração do acesso a dados
- **DTOs/ViewModels**: Separação entre entidades de domínio e objetos expostos na API

---

## Funcionalidades

- Buscar pacientes por nome (GET `/api/pacientes`)
- Listar pacientes
- Cadastrar novo paciente (POST `/api/pacientes`)
- Integração com sistema legado (GET `/api/legacy/pacientes`)
- Estado global com Redux Toolkit (RTK Query)
- Estilização com Tailwind CSS

---

## Requisitos

- Node.js 20+ (para frontend)
- .NET 8 (para backend)

---

## Instalação e Execução

### Backend (.NET)

1. Navegue até a pasta do backend.
2. Execute:
   ```
   dotnet run
   ```
3. O backend estará disponível em `https://localhost:7153`.

### Frontend (React + Vite)

1. Instale as dependências:
   ```
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```
   npm run dev
   ```
3. Acesse `http://localhost:5173` no navegador.

---

## Proxy Vite

O arquivo `vite.config.ts` já está configurado para proxy das rotas `/api` para o backend .NET.

---

## Estrutura de Pastas

```
src/
  components/
  store/
  types/
  App.tsx
  main.tsx
  index.css
  vite-env.d.ts
```

---

## Testes

- Testes unitários implementados para handlers de comandos e queries no backend (.NET), utilizando xUnit e Moq.
- Para rodar os testes:
   ```
  dotnet test
```

---

## Diferenciais

- Arquitetura moderna e escalável
- Código limpo, modular e testável
- Pronto para expansão (autenticação, logs, cache, etc.)
- Integração com sistema legado via arquivo JSON

---
