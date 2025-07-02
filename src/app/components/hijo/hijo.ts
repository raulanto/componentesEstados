import { Component, Input, Output ,EventEmitter} from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css'
})
export class Hijo {
  @Input() mensaje: string = "";

  @Output() enviar = new EventEmitter<string>();


  enviarmensaje() {
    this.enviar.emit("Hola desde el hijo");
    console.log("Mensaje enviado desde el hijo");
  }
}
