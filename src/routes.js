import express from 'express';

import RankingController from './controllers/RankingController.js';

const routes = express.Router();

routes.get('/ranking', RankingController);

export default routes;