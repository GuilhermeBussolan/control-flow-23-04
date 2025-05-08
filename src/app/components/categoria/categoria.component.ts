import { CommonModule } from '@angular/common';
import { CategoriaService } from './../../services/categoria.service';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  Validators,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { Categoria } from '../../interfaces/Categoria';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})

export class CategoriaComponent {
  categoriaForm: FormGroup = new FormGroup({});
  categorias: Categoria[] = [];

  constructor(
    private categoriaService: CategoriaService,
    private formBuilder: FormBuilder
  ) {
    // this.categoriaForm = this.formBuilder.group({
    //   id: ['', Validators.required],
    //   nome: [''],
    //   descricao: [''],
    //   ativa: [''],
    // });
  }

  list(): void {
    this.categoriaService.list().subscribe((resposta) => (this.categorias = resposta));
  }

  ngOnInit(): void {
    this.list();
  }


}

