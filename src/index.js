import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import filmesController from './controller/filmesController.js';

const server=express();

server.use(cors());
server.use(express.json());

server.use(filmesController);

server.listen(process.env.PORT, () => {console.log(`API iniciada na porta ${process.env.PORT}`)});