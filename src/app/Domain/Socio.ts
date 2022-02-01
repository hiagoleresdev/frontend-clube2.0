import { Categoria } from "./Categoria";
import { Dependente } from "./Dependente";
import { Mensalidade } from "./Mensalidade";
import { Pessoa } from "./Pessoa";

export class Socio extends Pessoa{
    numeroCartao: number;
    telefone: string;
    cep: string;
    uf: string;
    cidade: string;
    bairro: string;
    logradouro: string;
    categoria: Categoria;
    mensalidades: Mensalidade[];
    dependentes: Dependente[];
}
