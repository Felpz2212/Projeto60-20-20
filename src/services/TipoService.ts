import { TipoMov } from "../entities/TipoMov";
import { TipoRepository } from "../repositories/TipoRepository";

export class TipoService {


    tipoRepository: TipoRepository;

    constructor(
        tipoRepository = new TipoRepository()
    ){
        this.tipoRepository = tipoRepository;
    }


    findById = async (tipo_id: string): Promise<TipoMov | undefined> => {
        
        const tipo = await this.tipoRepository.findByid(tipo_id);

        if(!tipo){
            return undefined
        }

        return tipo;

    }
}