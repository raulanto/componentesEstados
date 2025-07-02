import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hijo } from "./components/hijo/hijo";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hijo],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'componentesEstados';
  mensaje:string = "Hola desde el padre";
  mensajeREcibido:string = "";

  recibirMensaje(mensaje: string) {
    this.mensajeREcibido = mensaje;
  }

}
