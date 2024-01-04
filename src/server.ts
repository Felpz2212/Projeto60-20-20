import express, { Request, Response, json } from 'express';
import { router } from './routes';

const app = express();

app.use(express.json())
app.use(router);

app.get("/", (request: Request, response: Response) => {
    response.status(200).json({
        message: 'OK'
    })
})

app.listen("8080", () => {
    console.log("Servidor rodando na porta 8080");
})