import { Router } from "express";
import axios from 'axios';

const server=Router();
const key=process.env.API_KEY;

server.get('/filmes/buscar/populares', async (req,resp) => {

    try{

        const result = await axios.get(`https://api.themoviedb.org/3/discover/movie`,{
            params:{
                api_key:key,
                language:"pt-BR"
            }
        });
        resp.send(result.data);
    }

    catch(err){

        resp.status(404).send({

            erro:err.message
        })
    }
});

server.get('/filmes/buscar/melhorAvaliados', async (req,resp) => {

    try{
        const result = await axios.get(`https://api.themoviedb.org/3/discover/movie?&vote_count.gte=1000`,{
            params:{
                api_key:key,
                language:"pt-BR",
                sort_by:"vote_average.desc"
            }
        });
        resp.send(result.data);
    }

    catch(err){
        resp.status(404).send({

            erro:err.message
        })
    }
});

server.get('/filmes/buscar/populares/BR', async (req,resp) => {

    try{

        const result = await axios.get(`https://api.themoviedb.org/3/discover/movie`,{
            params:{
                api_key:key,
                language:"pt-BR",
                with_origin_country:"BR"
            }
        });
        resp.send(result.data);
    }

    catch(err){

        resp.status(404).send({

            erro:err.message
        })
    }
});

server.get('/filmes/buscar/nome', async (req,resp) => {

    try{

        const query=req.query.nome;
        const page=req.query.pagina;

        const result = await axios.get(`https://api.themoviedb.org/3/search/movie`,{
            params:{
                api_key:key,
                language:"pt-BR",
                query,
                page
            }
        });
        resp.send(result.data);
    }

    catch(err){

        resp.status(404).send({

            erro:err.message
        })
    }
});

server.get('/filmes/:id', async (req,resp) => {

    try{

        const filmeID=req.params.id;

        const result = await axios.get(`https://api.themoviedb.org/3/movie/${filmeID}`,{

            params:{
                api_key:key,
                language:"pt-BR"
            }
        });
        resp.send(result.data);
    }

    catch(err){

        resp.status(404).send({

            erro:err.message
        })
    }
});

server.get('/filmes/:id/trailers', async (req,resp) => {

    try{

        const filmeID=req.params.id;

        const result = await axios.get(`https://api.themoviedb.org/3/movie/${filmeID}/videos`,{

            params:{
                api_key:key,
                language:"pt-BR"
            }
        });
        resp.send(result.data);
    }

    catch(err){

        resp.status(404).send({

            erro:err.message
        })
    }
});

export default server;