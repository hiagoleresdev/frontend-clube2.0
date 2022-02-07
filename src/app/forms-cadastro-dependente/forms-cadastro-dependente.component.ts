import { Component, OnInit, TemplateRef } from '@angular/core';
import { Dependente } from '../Domain/Dependente'
import { DependenteDTO } from '../DTOs/DependenteDTO';
import { DependenteDTOService } from '../DTOs/Services/dependente-dto.service';
import { DependenteService } from '../Domain/Services/dependente.service';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';



@Component({
  selector: 'app-forms-cadastro-dependente',
  templateUrl: './forms-cadastro-dependente.component.html',
  styleUrls: ['./forms-cadastro-dependente.component.css']
})
export class FormsCadastroDependenteComponent implements OnInit 
{
  constructor(private dependenteServiceDto: DependenteDTOService, private dependenteService: DependenteService,
          private modalService: BsModalService ) { }

  titulo: string;
  formulario: any;
  nomeDependente: string;
  visibilidadeTabela: boolean = true;
  visibilidadeFormulario: boolean = false;
  dependenteId: number;
  dependentes: Dependente[];
  modalRef: BsModalRef;

  ngOnInit(): void 
  {

    this.dependenteService.PegarTodos().subscribe(resultados =>
    {
      let dependentes = [];

      resultados.forEach((resultado)=>
      {
        dependentes.push(resultado)
      });

      this.dependentes = dependentes;
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

    this.titulo = "Cadastro de dependente"
    this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null),
      parentesco: new FormControl(null),
      numeroCartao: new FormControl(null),
      fkSocio: new FormControl(null)
    });
  }

  ExibirFormularioAtualizacao(dependenteId):void
  {
    this.visibilidadeTabela = false;
    this.visibilidadeFormulario = true;

    this.dependenteService.PegarPeloId(dependenteId).subscribe(resultado => 
    {
      this.titulo = `Atualizar dependente ${resultado.nome}`;
      this.formulario = new FormGroup({
        id: new FormControl(resultado.id),
        nome: new FormControl(resultado.nome),
        email: new FormControl(resultado.email),
        parentesco: new FormControl(resultado.parentesco),
        numeroCartao: new FormControl(resultado.numeroCartao),
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
    this.visibilidadeFormulario = false;
    this.visibilidadeTabela = true;
  }

  EnviarDependente(): void 
  {
    const dependente : DependenteDTO = this.formulario.value;

    if(dependente.id > 0)
    {
      this.dependenteServiceDto.AtualizarDependente(dependente).subscribe(resultado => 
      {
        alert(resultado.body);
        this.visibilidadeFormulario = false;
        this.visibilidadeTabela = true;

        this.dependenteService.PegarTodos().subscribe(registros => 
        {
          this.dependentes = registros;
        })
      },
      (erro) =>
      {
        alert("Ocorreu um erro na atualização do item")
      });
    }
    else
    {
      this.dependenteServiceDto.SalvarDependente(dependente).subscribe(resultado => 
      {
        alert(resultado.body);
        this.visibilidadeFormulario = false;
        this.visibilidadeTabela = true;

        this.dependenteService.PegarTodos().subscribe(registros => 
        {
          this.dependentes = registros
        },
        (erro) =>
        {
          alert("Ocorreu um erro na listagem")
        });
      },
      (erro) =>
      {
        alert("O dependente informado já consta na base de dados")
      });
    }
  }

  ExibirConfirmacaoExclusao(dependenteId, nomeDependente, conteudoModal: TemplateRef<any>):void
  {
    this.modalRef = this.modalService.show(conteudoModal);
    this.dependenteId = dependenteId;
    this.nomeDependente = nomeDependente;
  }

  ExcluirDependente(dependenteId)
  {
    this.dependenteServiceDto.ExcluirDependente(dependenteId).subscribe(resultado => 
    {
      this.modalRef.hide();
      alert(resultado.body);
      this.dependenteService.PegarTodos().subscribe(registros => 
      {
        this.dependentes = registros;
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
