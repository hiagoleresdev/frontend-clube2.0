import { Component, OnInit, TemplateRef } from '@angular/core';
import { Dependente } from '../../Domain/Dependente'
import { DependenteDTO } from '../../DTOs/DependenteDTO';
import { DependenteDTOService } from '../../DTOs/Services/dependente-dto.service';
import { DependenteService } from '../../Domain/Services/dependente.service';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Socio } from 'src/app/Domain/Socio';
import { SocioService } from 'src/app/Domain/Services/socio.service';



@Component({
  selector: 'app-forms-cadastro-dependente',
  templateUrl: './forms-cadastro-dependente.component.html',
  styleUrls: ['./forms-cadastro-dependente.component.css']
})
export class FormsCadastroDependenteComponent implements OnInit {

  constructor(private dependenteServiceDto: DependenteDTOService,
          private socioService: SocioService,
          private dependenteService: DependenteService,
          private modalService: BsModalService ) { }

  formulario: any;

  nomeDependente: string;
  visibilidadeTabela: boolean = true;
  visibilidadeFormulario: boolean = false;
  dependenteId: number;

  dependentes: Dependente[];
  socios: Socio[];

  modalRef: BsModalRef;

  ngOnInit(): void {

    this.dependenteService.PegarTodos().subscribe(resultados =>{
      console.log(resultados);

      let dependentes = [];

      resultados.forEach((resultado)=>{
        console.log(resultado.id)
        dependentes.push(resultado)

      });

      this.dependentes = dependentes;
    });

    this.socioService.PegarTodos().subscribe(resultados => {

      let socios = [];

      resultados.forEach((resultado)=>{
        console.log(resultado.id)

        socios.push(resultado)

      });

      this.socios = socios;
    });


  }

  ExibirFormularioCadastro() : void{

    this.visibilidadeTabela = false;
    this.visibilidadeFormulario = true;

    this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null),
      parentesco: new FormControl(null),
      numeroCartao: new FormControl(null),
      fkSocio: new FormControl(null)
    });
  }


  ExibirFormularioAtualizacao(dependenteId):void{
    this.visibilidadeTabela = false;
    this.visibilidadeFormulario = true;

    this.dependenteService.PegarPeloId(dependenteId).subscribe(resultado => {


      this.formulario = new FormGroup({
        id: new FormControl(resultado.id),
        nome: new FormControl(resultado.nome),
        email: new FormControl(resultado.email),
        parentesco: new FormControl(resultado.parentesco),
        numeroCartao: new FormControl(resultado.numeroCartao),
        fkSocio: new FormControl(resultado.socio.id)
      });
    });
  }


  Voltar() : void {
    this.visibilidadeFormulario = false;
    this.visibilidadeTabela = true;
  }

  EnviarDependente(): void {
    const dependente : DependenteDTO = this.formulario.value;

    if(dependente.id > 0){
      this.dependenteServiceDto.AtualizarDependente(dependente).subscribe(resultado => {
        this.visibilidadeFormulario = false;
        this.visibilidadeTabela = true;
        alert('Dependente atualizada com sucesso!');

        this.dependenteService.PegarTodos().subscribe(registros => {
          this.dependentes = registros;
        })
      });
    }else{
      this.dependenteServiceDto.SalvarDependente(dependente).subscribe(resultado => {

        this.visibilidadeFormulario = false;
        this.visibilidadeTabela = true;

        alert('Dependente inserido com sucesso!');

        this.dependenteService.PegarTodos().subscribe(registros => {
          this.dependentes = registros
        })
      });
    }

  }

  ExibirConfirmacaoExclusao(dependenteId, nomeDependente, conteudoModal: TemplateRef<any>):void{

    this.modalRef = this.modalService.show(conteudoModal);
    this.dependenteId = dependenteId;
    this.nomeDependente = nomeDependente;
  }

  ExcluirDependente(dependenteId){
    debugger;
    this.dependenteServiceDto.ExcluirDependente(dependenteId).subscribe(resultado => {
      this.modalRef.hide();
      alert("Dependente excluido com sucesso");
      this.dependenteService.PegarTodos().subscribe(registros => {
        this.dependentes = registros;
      })
    })
  }
}
