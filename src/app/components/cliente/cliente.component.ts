import { Component } from '@angular/core';
import { Cliente } from '../../interfaces/Clientes';
import { ClienteService } from '../../services/cliente.service';
import {
  ReactiveFormsModule,
  Validators,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css',
})
export class ClienteComponent {
  clienteForm: FormGroup = new FormGroup({});
  cliente: Cliente[] = [];

  constructor(
    private clienteService: ClienteService,
    private formBuilder: FormBuilder
  ) {
    this.clienteForm = this.formBuilder.group({
      nome: ['', Validators.required],
      telefone: [''],
    });
  }

  list(): void {
    this.cliente = this.clienteService.list();
  }

  //metodo executado ao inicializar a pagina
  ngOnInit(): void {
    this.list();
  }

  save() {
    alert('Podemos salvar!');
  }
}
