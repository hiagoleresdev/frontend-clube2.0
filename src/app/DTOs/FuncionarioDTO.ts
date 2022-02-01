import { PessoaDTO } from "./PessoaDTO";

export interface FuncionarioDTO extends PessoaDTO {
    usuario: string;
    senha: string;
}