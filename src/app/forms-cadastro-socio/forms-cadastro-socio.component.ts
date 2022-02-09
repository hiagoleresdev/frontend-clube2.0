import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SocioService } from '../Domain/Services/socio.service';
import { Socio } from '../Domain/Socio';
import { SocioDTOService } from '../DTOs/Services/socio-dto.service';
import { SocioDTO } from '../DTOs/SocioDTO';

@Component({
  selector: 'forms-cadastro-socio',
  templateUrl: './forms-cadastro-socio.component.html',
  styleUrls: ['./forms-cadastro-socio.component.css']
})
export class FormsCadastroSocioComponent implements OnInit 
{
  constructor(private sociosServiceDto: SocioDTOService,
     private socioService: SocioService,
     private modalService: BsModalService) { }

  titulo: string;
  formulario: any;
  nomeSocio: string;
  socioId: number;
  socios: Socio[];
  visibilidadeTabela: boolean = true;
  visibilidadeFormulario: boolean = false;
  modalRef: BsModalRef;

  ngOnInit(): void 
  {
    this.socioService.PegarTodos().subscribe(resultados => 
    {
      let socios = [];

      resultados.forEach((resultado)=>
      {
        socios.push(resultado)
      });

      this.socios = socios
    },
    (erro) =>
    {
      alert("Ocorreu um erro na listagem")
    });
  }

  ExibirFormularioCadastro():void
  {
    this.visibilidadeTabela = false;
    this.visibilidadeFormulario = true;

    this.titulo = "Cadastro de sócio"
    this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null),
      numeroCartao: new FormControl(null),
      telefone: new FormControl(null),
      cep: new FormControl(null),
      uf: new FormControl(null),
      cidade: new FormControl(null),
      bairro: new FormControl(null),
      logradouro: new FormControl(null),
      fkcategoria: new FormControl(null),
    });
  }

  ExibirFormularioAtualizacao(socioId)
  {
    this.visibilidadeTabela = false;
    this.visibilidadeFormulario = true;

    this.socioService.PegarPeloId(socioId).subscribe(resultado => 
    {
      this.titulo = `Atualizar sócio(a) ${resultado.nome}`;
      this.formulario = new FormGroup({
        id: new FormControl(resultado.id),
        nome: new FormControl(resultado.nome),
        email: new FormControl(resultado.email),
        numeroCartao: new FormControl(resultado.numeroCartao),
        telefone: new FormControl(resultado.telefone),
        cep: new FormControl(resultado.cep),
        uf: new FormControl(resultado.uf),
        cidade: new FormControl(resultado.cidade),
        bairro: new FormControl(resultado.bairro),
        logradouro: new FormControl(resultado.logradouro),
        fkcategoria: new FormControl(resultado.categoria.id)
      });
    },
    (erro) =>
    {
      alert("Ocorreu um erro na seleção")
    });
  }

  Voltar():void
  {
    this.visibilidadeTabela = true;
    this.visibilidadeFormulario = false;
  }

  EnviarSocio(): void 
  {
    const socio : SocioDTO = this.formulario.value;

    if(socio.id > 0)
    {
      this.sociosServiceDto.AtualizarSocio(socio).subscribe(resultado => 
      {
        alert(resultado.body)
        this.visibilidadeFormulario = false;
        this.visibilidadeTabela = true;

        this.socioService.PegarTodos().subscribe(registros => 
        {
          this.socios = registros;
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
      this.sociosServiceDto.SalvarSocio(socio).subscribe(resultado => 
      {
        alert(resultado.body.message)
        this.visibilidadeFormulario = false;
        this.visibilidadeTabela = true;

        this.socioService.PegarTodos().subscribe(registros =>
        {
          this.socios = registros;
        },
        (erro) =>
        {
          alert("Ocorreu um erro na listagem")
        });
      },
      (erro) =>
      {
        alert("O(A) sócio(a) infromado(a) já consta na base de dados")
      });
    }
  }

  ExibirConfirmacaoExclusao(socioId, nomeSocio, conteudoModal: TemplateRef<any>):void
  {
    this.modalRef = this.modalService.show(conteudoModal);
    this.socioId = socioId;
    this.nomeSocio = nomeSocio;
  }

  ExcluirSocio(socioId)
  {
    this.sociosServiceDto.ExcluirSocio(socioId).subscribe(resultado => 
    {
      this.modalRef.hide();
      alert(resultado.body.message)
      this.socioService.PegarTodos().subscribe(registros => 
      {
        this.socios = registros;
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

