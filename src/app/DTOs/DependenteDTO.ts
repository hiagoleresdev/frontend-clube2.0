import { PessoaDTO } from "./PessoaDTO";

export class DependenteDTO extends PessoaDTO {
    numeroCartao: number;
    parentesco: string;
    fkSocio: number;
}
