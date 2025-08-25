# Sistema de Registro de Policiais (CRUD Simplificado)

Este projeto é uma aplicação completa para o registro e a listagem de policiais militares, desenvolvida como uma avaliação prática. A aplicação segue o padrão CRUD (Create, Read, Update, Delete) e é dividida em três partes principais: um backend para a API, um frontend para a interface do usuário e um banco de dados para a persistência dos dados.

---

### 🚀 Funcionalidades

- **Cadastro de Policiais:** Formulário para registrar novos policiais com validações de dados (campos obrigatórios e formato de CPF).
- **Listagem de Policiais:** Exibição em tabela de todos os policiais cadastrados no sistema.
- **Filtro de Busca:** Permite buscar policiais específicos por RG ou CPF.
- **Segurança:** A matrícula do policial é armazenada no banco de dados de forma criptografada para proteger informações sensíveis.
- **Layout Responsivo:** A interface é adaptável para visualização em diferentes tamanhos de tela (desktop e mobile).

---

### 💻 Tecnologias Utilizadas

**Backend:**
- **Node.js** com **Express.js:** Ambiente de execução e framework para a construção da API REST.
- **MySQL2:** Driver para a conexão com o banco de dados MySQL.
- **Bcrypt:** Biblioteca utilizada para criptografar a matrícula.
- **Dotenv:** Gerenciamento de variáveis de ambiente para credenciais de acesso ao banco de dados.

**Frontend:**
- **Angular 19:** Framework para a construção da interface do usuário.
- **Standalone Components:** Arquitetura que simplifica o gerenciamento de componentes.

**Banco de Dados:**
- **MySQL:** Sistema de Gerenciamento de Banco de Dados Relacional.

**Controle de Versão:**
- **Git & GitHub:** Utilizado para versionamento e acompanhamento do desenvolvimento.

---

### ⚙️ Como Instalar e Executar o Projeto

Siga os passos abaixo para ter o projeto rodando em sua máquina.

#### 1. Clonar o Repositório

```bash
git clone [https://github.com/elrpiter/crud_policiais.git](https://github.com/elrpiter/crud_policiais.git)
cd crud_policiais
2. Configurar o Banco de Dados
Crie um banco de dados chamado crud_policiais e execute a seguinte query para criar a tabela policiais:

SQL

CREATE DATABASE IF NOT EXISTS crud_policiais;
USE crud_policiais;

CREATE TABLE policiais (
    id INT AUTO_INCREMENT PRIMARY KEY,
    rg_civil VARCHAR(20) NOT NULL UNIQUE,
    rg_militar VARCHAR(20) NOT NULL UNIQUE,
    cpf VARCHAR(14) NOT NULL UNIQUE,
    data_nascimento DATE NOT NULL,
    matricula VARCHAR(60) NOT NULL,
    INDEX (cpf),
    INDEX (matricula)
);
3. Configurar e Iniciar o Backend
Navegue até a pasta do backend e instale as dependências:

Bash

cd backend
npm install
Crie um arquivo chamado .env na pasta backend e adicione as suas credenciais do MySQL:

Snippet de código

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha_do_mysql
DB_DATABASE=crud_policiais
Inicie o servidor do backend:

Bash

node server.js
O servidor estará rodando em http://localhost:3000.

4. Configurar e Iniciar o Frontend
Abra um novo terminal e navegue até a pasta do frontend:

Bash

cd ../frontend/crud-policiais
npm install
Inicie a aplicação Angular:

Bash

ng serve
A aplicação estará disponível em http://localhost:4200.

🖼️ Screenshots
[Insira aqui as imagens das telas da sua aplicação. Ex: tela de cadastro e tela de listagem.]

👨‍💻 Autor
Nome: PITER ELIAS LOURENCINI REZENDE

GitHub: elrpiter

E-mail: piter_elr@hotmail.com
