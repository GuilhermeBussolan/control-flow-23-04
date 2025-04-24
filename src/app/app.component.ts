import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterpolacaoComponent } from './components/interpolacao/interpolacao.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { Carros } from './interfaces/Carros';
import { ClienteComponent } from "./components/cliente/cliente.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    InterpolacaoComponent,
    ControlFlowComponent, ClienteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-control-flow';

  carros: Carros[] = [
    {id:1, nome: "Vectra", marca: "GM", ano:1998, chassi: "V1E2C3T4R5A"},
    {id:2, nome: "Corsa", marca: "GM", ano:2000, chassi: "C1O2R3S4A"},
    {id:3, nome: "Golf", marca: "VW", ano:1997, chassi: "G1O2L3F4"}
  ]
}
