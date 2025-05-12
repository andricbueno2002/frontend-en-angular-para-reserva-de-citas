import { Routes } from '@angular/router';
import { UsuariosComponent } from './components/usuarios/usuarios.component';   
import { HomeComponent } from './components/home/home.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component'; // Asegúrate de que la ruta sea correcta
export const routes: Routes = [
    {path: '', component: HomeComponent, title: 'inicio',}, // Ruta por defecto
    {path: 'listaclientes', component: UsuariosComponent, title: 'USUARIOS'},
    {path: 'usuarios',component: UsuarioFormComponent} // Ruta por defecto
];
