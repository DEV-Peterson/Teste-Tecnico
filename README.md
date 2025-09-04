# Sistema de Gerenciamento de Pacientes

Este projeto é um sistema web para busca, cadastro e listagem de pacientes, desenvolvido com **React + TypeScript + Redux Toolkit** no frontend e **.NET 6+** no backend.

## Funcionalidades

- Buscar pacientes por nome (GET `/api/pacientes`)
- Listar pacientes
- Cadastrar novo paciente (POST `/api/pacientes`)
- Integração com sistema legado (GET `/api/legacy/pacientes`)
- Estado global com Redux Toolkit (RTK Query)
- Estilização com Tailwind CSS

## Requisitos

- Node.js 20+ (para frontend)
- .NET 6 ou superior (para backend)

## Instalação e execução

### Backend (.NET)

1. Navegue até a pasta do backend.
2. Execute:
   ```
   dotnet run
   ```
3. O backend estará disponível em `https://localhost:7287`.

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

## Proxy Vite

O arquivo `vite.config.ts` já está configurado para proxy das rotas `/api` para o backend .NET.

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
