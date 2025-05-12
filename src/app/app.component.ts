import { Component } from '@angular/core';
import { ClientesComponent } from './components/clientes/clientes.component'; // ajusta el path si está diferente
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // ✅ hacemos que sea standalone
  imports: [RouterOutlet, RouterModule], // ✅ importamos tu componente
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Hospital Sideral Carrion';
}
