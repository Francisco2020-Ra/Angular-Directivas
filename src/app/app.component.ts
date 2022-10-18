import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: string = 'Registro de Usuarios';
  mensaje: string ="";

  nombre:string = "";
  apellido:string = "";  

  entradas: Array<{titulo:string}>;

  constructor(){
    this.entradas=[

      {titulo:"Python cada día más presente"},
      {titulo:"Java presente desde hace más de 20 años"},
      {titulo:"JavaScript cada vez mas funcional"},
      {titulo:"Kotlin potencia para tus apps"},
      {titulo:"¿Dónde quedó pascal?"},
    ]
  }
  registrado:boolean = false;

  registrarUsuario(){
    this.registrado = true;
    this.mensaje = "Usuario registrado con exito"
  }
}
