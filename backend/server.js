const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
require('dotenv').config(); // Carrega as variáveis do .env

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
};

// Conexão com o banco de dados
let db;
async function connectToDatabase() {
    try {
        db = await mysql.createConnection(dbConfig);
        console.log('Conexão com o banco de dados MySQL estabelecida!');
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
        process.exit(1); // Encerra o processo se a conexão falhar
    }
}
connectToDatabase();

app.get('/', (req, res) => {
    res.send('Servidor do backend está rodando!');
});

app.post('/policiais', async (req, res) => {
    
    const { rg_civil, rg_militar, cpf, data_nascimento, matricula } = req.body;

    if (!rg_civil || !rg_militar || !cpf || !data_nascimento || !matricula) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    try {
        
        const cpfLimpo = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos
        if (cpfLimpo.length !== 11) {
            return res.status(400).json({ error: 'CPF inválido.' });
        }

        const salt = await bcrypt.genSalt(10);
        const matriculaHash = await bcrypt.hash(matricula, salt);

        const sql = `
            INSERT INTO policiais (rg_civil, rg_militar, cpf, data_nascimento, matricula)
            VALUES (?, ?, ?, ?, ?)
        `;
        const values = [rg_civil, rg_militar, cpf, data_nascimento, matriculaHash];
        
        await db.execute(sql, values);

        // 5. Retornar uma resposta de sucesso
        res.status(201).json({ message: 'Policial cadastrado com sucesso!' });

    } catch (error) {
        console.error('Erro ao cadastrar policial:', error);
        
        // Verifica se é um erro de duplicidade (RG, CPF ou Matrícula já existem)
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({ error: 'RG ou CPF já cadastrados.' });
        }

        res.status(500).json({ error: 'Erro interno do servidor.' });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});