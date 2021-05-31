import express from 'express';
import cors from 'cors';
import routes from './routes.js';

// Cria a aplicação Express
const app = express();

// Habilita Cross Origin Resource Sharing
app.use(cors());

// Habilita a decodificação de JSON no corpo das requisições
app.use(express.json());

// Configura as rotas da API
app.use(routes);

export default app;