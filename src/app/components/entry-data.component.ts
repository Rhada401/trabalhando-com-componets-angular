import { Component } from '@angular/core';

@Component({
  selector: 'app-entry-data',
  templateUrl: './entry-data.component.html',
  styleUrls: ['./entry-data.component.css']
})
export class EntryDataComponent {
  placeHolder:string = "E-mail"
  placePass:string = "Senha"
  color:string= "blue"
}