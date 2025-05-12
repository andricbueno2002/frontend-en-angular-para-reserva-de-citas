import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteService, Cliente } from '../../services/cliente.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'clientes.component.html'
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(data => {
      this.clientes = data;
    });
  }
}
