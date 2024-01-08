import { Request, Response, Router } from "express";
import { UsuarioController } from "./controllers/UsuarioController";
import { MovimentacoesController } from "./controllers/MovimentacoesController";


export const router = Router();

const usuarioController = new UsuarioController();
const movimentacoesController = new MovimentacoesController();

router.get("/teste", (request: Request, response: Response) => {
    response.status(200).json({
        message: "funcionou"
    })
})

router.post("/users", usuarioController.createUser);
router.put("/users", usuarioController.updateUser);
router.get("/users/:user_id", usuarioController.findUserById);

//Movimentações
router.get("/movimentacoes", movimentacoesController.getAllMovimentacoes);