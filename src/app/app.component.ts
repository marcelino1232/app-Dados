import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dadoleft = "../assets/img/dice1.png";
  dadorigth = "../assets/img/dice4.png";

  numero1: number = 0;
  numero2: number = 0; 

  mensaje = "";

  TitarDados(): void{
   this.numero1 = Math.round(Math.random() * 5) + 1;
   this.numero2 = Math.round(Math.random() * 5) + 1;

   this.dadoleft = `../assets/img/dice${this.numero1}.png`;
   this.dadorigth = `../assets/img/dice${this.numero2}.png`;

    if(this.numero1 > this.numero2){
     this.mensaje = "Datos Izquierdo Win";
    }else if(this.numero1 == this.numero2){
      this.mensaje = "Estan en pate";
    }else{
      this.mensaje = "Datos Derecho Win";
    }
  }
}
