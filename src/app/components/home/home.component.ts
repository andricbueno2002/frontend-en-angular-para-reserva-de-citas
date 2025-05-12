import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../services/usuario.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  loginForm: FormGroup;
  errorMessage: string = '';
  loading: boolean = false;

  constructor(
    private router: Router,
    private http: HttpClient,
    private fb: FormBuilder,
    private usuarioService: UsuarioService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Por favor, completa todos los campos correctamente.';
      return;
    }

    const { email, password } = this.loginForm.value;
    this.loading = true;
    this.errorMessage = '';

    this.usuarioService.login(email, password).subscribe({
      next: (usuario) => {
        alert(`Login exitoso: ${JSON.stringify(usuario)}`);
        //this.router.navigate(['/']); // Asegúrate de tener esta ruta en el router
      },
      error: (error) => {
        this.errorMessage = 'Correo o contraseña incorrectos';
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}
