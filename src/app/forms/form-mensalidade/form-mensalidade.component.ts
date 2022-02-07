import { Component, OnInit, TemplateRef } from '@angular/core';
import { Mensalidade } from '../../Domain/Mensalidade';
import { FormControl, FormGroup } from '@angular/forms';
import { MensalidadeDTO } from '../../DTOs/MensalidadeDTO';
import { MensalidadesService } from '../../Domain/Services/mensalidades.service';
import { MensalidadeDTOService } from '../../DTOs/Services/mensalidade-dto.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'form-mensalidade',
  templateUrl: './form-mensalidade.component.html',
  styleUrls: ['./form-mensalidade.component.css']
})
export class FormMensalidadeComponent implements OnInit {

  constructor(private mensalidadeServiceDto: MensalidadeDTOService, private mensalidadeService: MensalidadesService,
    private modalService: BsModalService) { }

  formulario: any;
  mensalidades: Mensalidade[];
  mensalidadeId: number;
  dataVencimento: string;
  visibilidadeTabela: boolean = true;
  visibilidadeFormulario: boolean = false;

  modalRef: BsModalRef;

  maskData =  [/\d/, /\d/, '/',/\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]

  ngOnInit(): void {
    this.mensalidadeService.PegarTodos().subscribe(resultado => {
      this.mensalidades = resultado
    });
  }



  ExibirFormularioCadastro() : void {
    this.visibilidadeTabela = false;
    this.visibilidadeFormulario = true;

    this.formulario = new FormGroup({
      dataVencimento: new FormControl(null),
      valorInicial: new FormControl(null),
      dataPagamento: new FormControl(null),
      juros: new FormControl(null),
      valorFinal: new FormControl(null),
      quitada: new FormControl(null),
      fkSocio: new FormControl(null)
    });
  }

  ExibirFormularioAtualizacao(mensalidadeId){
    this.visibilidadeTabela = false;
    this.visibilidadeFormulario = true;

    this.mensalidadeService.PegarPeloId(mensalidadeId).subscribe(resultado => {
      this.formulario = new FormGroup({
        id: new FormControl(resultado.id),
        dataVencimento: new FormControl(resultado.dataVencimento),
        valorInicial: new FormControl(resultado.valorInicial),
        dataPagamento: new FormControl(resultado.dataPagamento),
        juros: new FormControl(resultado.juros),
        valorFinal: new FormControl(resultado.valorFinal),
        quitada: new FormControl(resultado.quitada),
        fkSocio: new FormControl(resultado.socio.id)
      });
    });
  }

  Voltar() : void{
    this.visibilidadeTabela = true;
    this.visibilidadeFormulario = false;
  }

  EnviarMensalidade(): void {
    const mensalidade : MensalidadeDTO = this.formulario.value;

    if(mensalidade.id > 0){
      this.mensalidadeServiceDto.AtualizarMensalidade(mensalidade).subscribe(resultado => {
        this.visibilidadeFormulario = false;
        this.visibilidadeTabela = true;
        alert('Mensalidade atualizado com sucesso!');

        this.mensalidadeService.PegarTodos().subscribe(registros => {
          this.mensalidades = registros;
        })
      });
    }else{

    this.mensalidadeServiceDto.SalvarMensalidade(mensalidade).subscribe(resultado => {
      this.visibilidadeFormulario = false;
      this.visibilidadeTabela = true;

      alert('Mensalidade inserida com sucesso!');

      this.mensalidadeService.PegarTodos().subscribe(registros =>{
        this.mensalidades = registros;
      });
    });
    }


  }

  ExibirConfirmacaoExclusao(mensalidadeId, dataVencimento, conteudoModal: TemplateRef<any>):void{

    this.modalRef = this.modalService.show(conteudoModal);
    this.mensalidadeId = mensalidadeId;
    this.dataVencimento = dataVencimento;
  }

  ExcluirMensalidade(mensalidadeId){
    console.log(mensalidadeId)
    this.mensalidadeServiceDto.ExcluirMensalidade(mensalidadeId).subscribe(resultado => {
      this.modalRef.hide();
      alert("Mensalidade excluida com sucesso");
      this.mensalidadeService.PegarTodos().subscribe(registros => {
        this.mensalidades = registros;
      })
    })
  }
}
