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
export class FormCategoriaComponent implements OnInit
{

  constructor(private categoriasServiceDto: CategoriaDTOService, private categoriaService: CategoriaService,
    private modalService: BsModalService) {}

  titulo : string
  formulario: any;
  visibilidadeTabela: boolean = true;
  visibilidadeFormulario: boolean = false;
  idCategoria: number;
  tipoCategoria: string;
  categorias: Categoria[];
  modalRef: BsModalRef;

  ngOnInit(): void
  {
    this.categoriaService.PegarTodos().subscribe((resultados) =>
    {

      let categorias = [];

      resultados.forEach((resultado)=>
      {
        categorias.push(resultado)
      });

      this.categorias = categorias;
    },
    (erro) =>
    {
      alert("Ocorreu um erro na listagem")
    });
  }

  ExibirFormularioCadastro()
  {
    this.visibilidadeTabela = false;
    this.visibilidadeFormulario = true;

    this.titulo = "Cadastro de categoria"
    this.formulario = new FormGroup({
      tipo: new FormControl(null),
      meses: new FormControl(null)
    });
  }

  ExibirFormularioAtualizacao(idCategoria):void
  {
    this.visibilidadeTabela = false;
    this.visibilidadeFormulario = true;

    this.categoriaService.PegarPeloId(idCategoria).subscribe((resultado) =>
    {
      this.titulo = `Atualizar categoria ${resultado.tipo}`;

      this.formulario = new FormGroup({
        id: new FormControl(resultado.id),
        tipo: new FormControl(resultado.tipo),
        meses: new FormControl(resultado.meses)
      });
    },
    (erro) =>
    {
      alert("Ocorreu um erro na seleção")
    });
  }

  EnviarCategoria(): void
  {
    const categoria : CategoriaDTO = this.formulario.value;

    if(categoria.id > 0)
    {
      this.categoriasServiceDto.AtualizarCategoria(categoria).subscribe((resultado) =>
      {
        alert(resultado.body.message)
        this.visibilidadeTabela = true;
        this.visibilidadeFormulario = false;
        this.categoriaService.PegarTodos().subscribe((resultados) =>
        {
          let categorias = [];

          resultados.forEach((resultado)=>
          {
            categorias.push(resultado)
          });

          this.categorias = categorias;
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

      this.categoriasServiceDto.SalvarCategoria(categoria).subscribe((resultado) =>
      {
        alert(resultado.body.message);
        this.visibilidadeTabela = true;
        this.visibilidadeFormulario = false;
        this.categoriaService.PegarTodos().subscribe((resultados) =>
        {
          let categorias = [];

          resultados.forEach((resultado)=>
          {
            categorias.push(resultado)

          });

          this.categorias = categorias;
        },
        (erro) =>
        {
          alert("Ocorreu um erro na listagem")
        });
      },
      (erro) =>
      {
        alert("A categoria informada já consta na base de dados")
      });
    }
  }

  voltar() : void
  {
    this.visibilidadeTabela = true;
    this.visibilidadeFormulario = false;
  }

  ExibirConfirmacaoExclusao(idCategoria,tipoCategoria,conteudoModal: TemplateRef<any>): void
  {
    this.modalRef = this.modalService.show(conteudoModal);
    this.idCategoria = idCategoria;
    this.tipoCategoria = tipoCategoria;
  }

  ExcluirCategoria(idCategoria)
  {
    this.categoriasServiceDto.ExcluirCategoria(idCategoria).subscribe((resultado) =>
    {
      this.modalRef.hide();
      alert(resultado.body.message);
      this.visibilidadeTabela = false;
      this.visibilidadeTabela = true;
      this.categoriaService.PegarTodos().subscribe((resultados) =>
      {
        let categorias = [];

        resultados.forEach((resultado)=>
        {
          categorias.push(resultado)
        });

        this.categorias = categorias;
      },
      (erro) =>
      {
        alert("Ocorreu um erro na listagem")
      });
    },
    (erro) =>
    {
      alert("A categoria não pode ser excluída por estar em utilização")
    });
  }
}
