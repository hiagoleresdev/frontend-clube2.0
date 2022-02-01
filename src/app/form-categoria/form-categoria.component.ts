import { Component, OnInit, TemplateRef } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { CategoriaDTO } from '../DTOs/CategoriaDTO';
import { CategoriaService } from '../Domain/Services/categoria.service';
import { CategoriaDTOService } from '../DTOs/Services/categoria-dto.service';
import { Categoria } from '../Domain/Categoria';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'form-categoria',
  templateUrl: './form-categoria.component.html',
  styleUrls: ['./form-categoria.component.css']
})
export class FormCategoriaComponent implements OnInit {

  constructor(private categoriasServiceDto: CategoriaDTOService, private categoriaService: CategoriaService,
    private modalService: BsModalService) {}


  titulo : string
  formulario: any;
  tipoCategoria: string;
  visibilidadeTabela: boolean = true;
  visibilidadeFormulario: boolean = false;
  idCategoria: number;

  categorias: Categoria[];
  modalRef: BsModalRef;

  ngOnInit(): void {


    this.categoriaService.PegarTodos().subscribe(resultados =>{
      console.log(resultados);

      let categorias = [];

      resultados.forEach((resultado)=>{
        console.log(resultado.id)
        categorias.push(resultado)

      });

      this.categorias = categorias;
    });

  }

  ExibirFormularioCadastro(){
    this.visibilidadeTabela = false;
    this.visibilidadeFormulario = true;

    this.formulario = new FormGroup({
      tipo: new FormControl(null),
      meses: new FormControl(null)
    });
  }


  ExibirFormularioAtualizacao(idCategoria):void{
    this.visibilidadeTabela = false;
    this.visibilidadeFormulario = true;

    this.categoriaService.PegarPeloId(idCategoria).subscribe(resultado => {

     this.titulo = `Atualizar ${resultado.tipo}`;

      this.formulario = new FormGroup({
        id: new FormControl(resultado.id),
        tipo: new FormControl(resultado.tipo),
        meses: new FormControl(resultado.meses)
      });
    });
  }


  EnviarCategoria(): void {
    const categoria : CategoriaDTO = this.formulario.value;

    if(categoria.id > 0){

      this.categoriasServiceDto.AtualizarCategoria(categoria).subscribe(resultado => {
        this.visibilidadeFormulario = false;
        this.visibilidadeTabela = true;
        alert('Categoria atualizada com sucesso!');

        this.categoriaService.PegarTodos().subscribe(registros => {
          this.categorias = registros;
        })
      });
    }else{

      this.categoriasServiceDto.SalvarCategoria(categoria).subscribe(resultado => {
        this.visibilidadeFormulario = false;
        this.visibilidadeTabela = true;
        alert('Categoria inserida com sucesso!');

        this.categoriaService.PegarTodos().subscribe(registros => {
          this.categorias = registros;
        })
      });
    }


  }

  voltar() : void{
    this.visibilidadeTabela = true;
    this.visibilidadeFormulario = false;
  }


  ExibirConfirmacaoExclusao(idCategoria,tipoCategoria,conteudoModal: TemplateRef<any>): void{
    this.modalRef = this.modalService.show(conteudoModal);
    this.idCategoria = idCategoria;
    this.tipoCategoria = tipoCategoria;
  }

  ExcluirCategoria(idCategoria){
    console.log(idCategoria)
      this.categoriasServiceDto.ExcluirCategoria(idCategoria).subscribe(resultado => {
        this.modalRef.hide();
        alert("Categoria excluida com sucesso");
        this.categoriaService.PegarTodos().subscribe(registros => {
          this.categorias = registros;
        })
      })
  }


}

