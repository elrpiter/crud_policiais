# 📋 Sistema de Registro de Policiais Militares (CRUD Simplificado)

Este projeto é uma aplicação full stack desenvolvida como parte da avaliação prática do curso de Análise e Desenvolvimento de Sistemas – CADSPM I 2025.  
O sistema permite cadastrar e listar policiais militares, armazenando dados básicos em um banco MySQL, com Node.js + Express no backend e Angular 19 (Standalone Components) no frontend.

---

## 🚀 Tecnologias Utilizadas

- 📦 Backend
  - Node.js + Express
  - MySQL
  - bcrypt (criptografia de matrícula)
  - dotenv (variáveis de ambiente)
  - cpf-cnpj-validator (validação de CPF)

- 🎨 Frontend
  - Angular 19 (Standalone Components)
  - Angular HttpClient
  - CSS / Tailwind / Angular Material (layout responsivo)

---

## 📂 Estrutura do Projeto

```bash
crud-policiais/
│
├── backend/       # Código do Node.js + Express (API RESTful)
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── models/
│   │   └── config/
│   └── package.json
│
├── frontend/      # Código do Angular 19
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   ├── services/
│   │   │   └── pages/
│   └── package.json
│
└── README.md
🗄️ Banco de Dados (MySQL)
Tabela: policiais
sql
Copiar código
CREATE TABLE policiais (
    id INT AUTO_INCREMENT PRIMARY KEY,
    rg_civil VARCHAR(20) UNIQUE NOT NULL,
    rg_militar VARCHAR(20) NOT NULL,
    cpf VARCHAR(11) UNIQUE NOT NULL,
    data_nascimento DATE NOT NULL,
    matricula VARCHAR(255) NOT NULL
);
📌 Observações:

Matrícula é armazenada criptografada no banco.

Todos os campos são obrigatórios.

Consultas otimizadas para busca por CPF ou matrícula.

🔌 Backend (Node.js + Express)
Rotas Implementadas
POST /policiais → Cadastra um policial

Validações:

CPF válido

Campos obrigatórios preenchidos

Matrícula criptografada

Respostas:

201 Created → sucesso

400 Bad Request → erro de validação

GET /policiais → Lista policiais cadastrados

Retorna matrícula descriptografada

Filtro opcional por CPF ou RG

Boas práticas aplicadas
Uso de dotenv para variáveis de ambiente

Criptografia com bcrypt

Validação de CPF com cpf-cnpj-validator

Separação de rotas, controladores e modelos

💻 Frontend (Angular 19)
Componentes
Cadastro de Policiais

Formulário com validação de campos e CPF

Feedback visual

Integração com API

Listagem de Policiais

Tabela com dados dos policiais

Filtros por CPF ou RG

Responsividade para celular e desktop

Serviços
cadastrarPolicial(dados): POST /policiais

listarPoliciais(): GET /policiais

⚙️ Instalação e Execução
🔹 Backend
bash
Copiar código
cd backend
npm install
cp .env.example .env   # configure DB_USER, DB_PASS etc.
npm start
🔹 Frontend
bash
Copiar código
cd frontend
npm install
ng serve
Acesse: http://localhost:4200

📸 Prints do Projeto
Adicione aqui capturas de tela das telas de cadastro e listagem após finalizar.

markdown
Copiar código
![Cadastro](docs/prints/cadastro.png)
![Listagem](docs/prints/listagem.png)
✅ Critérios Atendidos
 Banco de dados modelado e funcional

 API REST com validações e criptografia

 Frontend em Angular funcional e validado

 README completo

 Responsividade e organização

👨‍💻 Autor
Projeto desenvolvido por Piter Elias Lourencini Rezende
📅 Data: 25/08/2025
📍 Curso: CADSPM I – 2025