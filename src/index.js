import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import filmesController from './controller/filmesController.js';

const server=express();

server.use(cors());
server.use(express.json());

server.use(filmesController);

const port = process.env.PORT || 5000;
server.listen(port, () => {console.log(`API iniciada na porta ${port}`)});