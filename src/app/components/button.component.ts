import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class Button{
  //ela recebe a propiedade + o tipo
  @Input() buttonLabel: string;
  buttonText: string = 'ACESSAR';
  buttonTexts: string[] = ['ACESSAR AGORA', 'ADICIONAR AO CARRINHO'];

//AQUI É FUNÇÃO Get alert chamar alerta, com alert de olá e quem dispara é o html
   getAlert(){
     alert("Olá")
   }
}