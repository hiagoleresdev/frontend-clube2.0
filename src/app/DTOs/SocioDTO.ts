import { PessoaDTO } from "./PessoaDTO";

export class SocioDTO extends PessoaDTO{

  numeroCartao: number;
  telefone: string;
  cep: string;
  uf: string;
  cidade: string;
  bairro: string;
  logradouro: string;
  fkcategoria: number;
}
