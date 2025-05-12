import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,tap } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';


export interface Usuario {
  id: number;
  nombre: string;
  apellido: string;
  correo: string;
  password: string;
  telefono: string;
  rol: string;
  especialidadId:null;
  creadoEn: Date;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:8080/api/usuarios';
  private usuarioActual: Usuario | null = null;
  private isBrowser: boolean;
  // Ajusta si es necesario

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        this.usuarioActual = JSON.parse(storedUser);
      }
    }
  }

  obtenerUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  crearUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }

  eliminarUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  login(email: string, password: string): Observable<Usuario> {
    const body = { correo: email, password };
    return this.http.post<Usuario>(`${this.apiUrl}/login`, body).pipe(
      tap(usuario => {
        this.usuarioActual = usuario;
        localStorage.setItem('currentUser', JSON.stringify(usuario));
      })
    );
  }
  
}
