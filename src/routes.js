import express from 'express';

import RankingController from './controllers/RankingController.js';
import NewRankController from './controllers/NewRankController.js';

// Cria um roteador do Express
const routes = express.Router();

// Cria a rota /ranking aceitando requisições GET
routes.get('/ranking', RankingController);

// Cria a rota /upload aceitando requisições POST
routes.post('/upload', NewRankController);

export default routes;