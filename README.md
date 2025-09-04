# Teste Técnico — Desenvolvedor(a) Fullstack Pleno (.NET + React/Redux)

Este repositório contém a solução para o desafio técnico.

## Estrutura
- **Backend/** → API .NET 6+ com dados em memória e adapter de legado.
- **Frontend/** → Aplicação React + Redux Toolkit (RTK Query).
- **USO-IA.md** → transparência no uso de ferramentas de IA.

---

## Como rodar

### Backend (.NET 6+)
```bash
cd Backend
# restaure dependências e rode
dotnet run
```
A API subirá em uma porta dinâmica (ex.: http://localhost:5000). Anote a porta exibida no console.

#### Endpoints
- `GET /api/pacientes?nome=ana` → lista pacientes (filtro case-insensitive)
- `POST /api/pacientes` → cadastra `{ nome: string, dataNascimento?: "YYYY-MM-DD" }`
- `GET /api/legacy/pacientes` → lê `legacy-pacientes.json` e adapta para o modelo atual

---

### Frontend (React + Redux Toolkit)
```bash
cd Frontend
cp .env.local.example .env.local
# edite VITE_API_BASE_URL conforme a porta da API
npm install
npm run dev
```
Acesse http://localhost:5173

---

## Observações
- Backend mantém os dados **em memória** (ao reiniciar, os registros são perdidos).
- CORS já configurado para `http://localhost:5173`.
