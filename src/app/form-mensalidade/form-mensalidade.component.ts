import { Component, OnInit, TemplateRef } from '@angular/core';
import { Mensalidade } from '../Domain/Mensalidade';
import { FormControl, FormGroup } from '@angular/forms';
import { MensalidadeDTO } from '../DTOs/MensalidadeDTO';
import { MensalidadesService } from '../Domain/Services/mensalidades.service';
import { MensalidadeDTOService } from '../DTOs/Services/mensalidade-dto.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'form-mensalidade',
  templateUrl: './form-mensalidade.component.html',
  styleUrls: ['./form-mensalidade.component.css']
})
export class FormMensalidadeComponent implements OnInit 
{

  constructor(private mensalidadeServiceDto: MensalidadeDTOService, private mensalidadeService: MensalidadesService,
    private modalService: BsModalService) { }

  titulo: string;
  formulario: any;
  mensalidades: Mensalidade[];
  mensalidadeId: number;
  dataVencimento: string;
  visibilidadeTabela: boolean = true;
  visibilidadeFormulario: boolean = false;
  modalRef: BsModalRef;

  ngOnInit(): void 
  {
    this.mensalidadeService.PegarTodos().subscribe(resultado => 
    {
      this.mensalidades = resultado
    },
    (erro) =>
    {
      alert("Ocorreu um erro na listagem")
    });
  }

  ExibirFormularioCadastro() : void 
  {
    this.visibilidadeTabela = false;
    this.visibilidadeFormulario = true;

    this.titulo = "Cadastro de mensalidade"
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

  ExibirFormularioAtualizacao(mensalidadeId)
  {
    this.visibilidadeTabela = false;
    this.visibilidadeFormulario = true;

    this.mensalidadeService.PegarPeloId(mensalidadeId).subscribe(resultado => 
    {
      this.titulo = `Atualizar mensalidade de ${resultado.dataVencimento.getMonth()}`;
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
    },
    (erro) =>
    {
      alert("Ocorreu um erro na seleção")
    });
  }

  Voltar() : void
  {
    this.visibilidadeTabela = true;
    this.visibilidadeFormulario = false;
  }

  EnviarMensalidade(): void 
  {
    const mensalidade : MensalidadeDTO = this.formulario.value;

    if(mensalidade.id > 0)
    {
      this.mensalidadeServiceDto.AtualizarMensalidade(mensalidade).subscribe(resultado => 
      {
        alert(resultado.message)
        this.visibilidadeFormulario = false;
        this.visibilidadeTabela = true;

        this.mensalidadeService.PegarTodos().subscribe(registros => 
        {
          this.mensalidades = registros;
        },
        (erro) =>
        {
          alert("Ocorreu um erro na listagem")
        });
      },
      (erro) =>
      {
        alert("Ocorreu um erro na atualização do item")
      });
    }
    else
    {
      this.mensalidadeServiceDto.SalvarMensalidade(mensalidade).subscribe(resultado => 
      {
        alert(resultado.message)
        this.visibilidadeFormulario = false;
        this.visibilidadeTabela = true;

        this.mensalidadeService.PegarTodos().subscribe(registros =>
        {
          this.mensalidades = registros;
        },
        (erro) =>
        {
          alert("Ocorreu um erro na listagem")
        });
      },
      (erro) =>
      {
        alert("Ocorreu um erro no cadastro do item")
      });
    }
  }

  ExibirConfirmacaoExclusao(mensalidadeId, dataVencimento, conteudoModal: TemplateRef<any>):void
  {
    this.modalRef = this.modalService.show(conteudoModal);
    this.mensalidadeId = mensalidadeId;
    this.dataVencimento = dataVencimento;
  }

  ExcluirMensalidade(mensalidadeId)
  {
    console.log(mensalidadeId)
    this.mensalidadeServiceDto.ExcluirMensalidade(mensalidadeId).subscribe(resultado => 
    {
      this.modalRef.hide();
      alert(resultado.body)
      this.mensalidadeService.PegarTodos().subscribe(registros => 
      {
        this.mensalidades = registros;
      },
      (erro) =>
      {
        alert("Ocorreu um erro na listagem")
      });
    },
    (erro) =>
    {
      alert("Ocorreu um erro na exclusão do item")
    });
  }
}
