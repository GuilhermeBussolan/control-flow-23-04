import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/Clientes'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  clientes: Cliente[] = [
    {id: "bddrvbder", nome: "Thiago", telefone: "1199425483"},
    {id: "fv4efvvwa", nome: "Guilherme", telefone: "11999854723"},
    {id: "bddrvbder", nome: "Gustavo"},
  ]

  constructor() { }

  //retornar a lista de clientes
  list(): Cliente []{
    return this.clientes
  }

  //método para remover um cliente
  remove(id:string){
    const cliente = this.clientes.find(c => c.id == id) //buscar o cliente na lista

    if (cliente) { //se encontrar o cliente
      //busca o index
      const index = this.clientes.indexOf(cliente)
      //remove na lista
      this.clientes.splice(index, 1)
    }
  }

  //metodo adiciona um cliente
  add(cliente:Cliente){
    //o push adiciona um item (obj) dentro de uma array (lista)
    this.clientes.push(cliente)
    console.log(this.clientes)
  }

  update(id:string, cliente:Cliente){
    const index = this.clientes.findIndex(
      c => c.id == id
    )

    if(index !== -1){
      this.clientes[index] = {
        ...this.clientes[index],
        ...cliente
      }
    }
  }

}
