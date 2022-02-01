export class MensalidadeDTO {
    id: number;
    dataVencimento: string;
    valorInicial: number;
    dataPagamento: string | null;
    juros: number;
    valorFinal: number | null;
    quitada: boolean;
    fkSocio: number;
}
