import { Request, Response, Router } from "express";
import { UsuarioController } from "./controllers/UsuarioController";


export const router = Router();

const usuarioController = new UsuarioController();

router.get("/teste", (request: Request, response: Response) => {
    response.status(200).json({
        message: "funcionou"
    })
})

router.post("/users", usuarioController.createUser);
router.put("/users", usuarioController.updateUser);