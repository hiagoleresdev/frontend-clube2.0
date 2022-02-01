import { Socio } from "./Socio";

export class Mensalidade{
    id: number;
    dataVencimento: Date;
    valorInicial: number;
    dataPagamento: Date;
    juros: number;
    valorFinal: number;
    quitada: boolean;
    socio: Socio;
}
