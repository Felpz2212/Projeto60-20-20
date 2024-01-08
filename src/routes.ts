import { Request, Response, Router } from "express";
import { UsuarioController } from "./controllers/UsuarioController";
import { MovimentacoesController } from "./controllers/MovimentacoesController";
import { LoginController } from "./controllers/LoginController";


export const router = Router();

const usuarioController = new UsuarioController();
const movimentacoesController = new MovimentacoesController();
const loginController = new LoginController()

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

//Login
router.post("/login", loginController.login);