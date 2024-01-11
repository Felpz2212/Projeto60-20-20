import { Movimentacao } from "../entities/Movimentacao";
import { MovimentacoesRepository } from "../repositories/MovimentacoesRepository";
import { UsuarioRepository } from "../repositories/UsuarioRepository";
import { TipoService } from "./TipoService";
import { UsuarioService } from "./UsuarioService";

export class MovimentacoesService { 


    movimentacoesRepository: MovimentacoesRepository;
    usuarioService: UsuarioService;
    tipoService: TipoService;

    constructor(
        movimentacoesRepository = new MovimentacoesRepository(),
        usuarioService = new UsuarioService(),
        tipoService = new TipoService()
    ){
        this.movimentacoesRepository = movimentacoesRepository;
        this.usuarioService = usuarioService;
        this.tipoService = tipoService;
    }


    getAllMovimentacoes = async (): Promise<Movimentacao[] | undefined> => {

        return await this.movimentacoesRepository.getAllMovimentacoes();
    }

    create = async (name: string, 
        descricao: string, 
        valor: number, usuario_id: string, tipo_id: string) => {

        const user = await this.usuarioService.findById(usuario_id);
        const tipo = await this.tipoService.findById(tipo_id);

        if(!user || !tipo){
            return undefined;
        }

        const movimentacao = new Movimentacao(name, descricao, valor, user, tipo);

        const response = await this.movimentacoesRepository.create(movimentacao);

        if(!response){
            return undefined
        }

        let movimentacaoData: Partial<Movimentacao> = {
            name: movimentacao.name,
            descricao: movimentacao.descricao,
            valor: movimentacao.valor,
            usuario_id: movimentacao.usuario.user_id,
            tipo_id: movimentacao.tipo.tipo_id
        }

        return movimentacaoData;
    }
}