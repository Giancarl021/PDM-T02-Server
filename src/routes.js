import express from 'express';

import RankingController from './controllers/RankingController.js';
import NewRankController from './controllers/NewRankController.js';

const routes = express.Router();

routes.get('/ranking', RankingController);
routes.post('/upload', NewRankController);

export default routes;