import { Pessoa } from "./Pessoa";
import { Socio } from "./Socio";

export class Dependente extends Pessoa{
    numeroCartao: number;
    parentesco: string;
    socio: Socio;
}
