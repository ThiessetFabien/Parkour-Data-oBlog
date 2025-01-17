import express from 'express';
import apiRouter from './api/index.api.router.js';
import websiteRouter from './website/index.website.router.js';

const router = express.Router();

router.use('/api', apiRouter);

router.use('/', websiteRouter);

export default router;
