import { Component, OnInit,Input } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-cardform',
  templateUrl: './cardform.component.html',
  styleUrls: ['./cardform.component.scss'],
})

@NgModule({
	
})

export class CardformComponent implements OnInit {


  @Input() data_card = {formulario:'nombre del form',descrip:'descripcion de form'};

  //varialbe para habilitar el boton de eliminar card
  @Input() state_button: boolean = true;
  
  constructor() { }

  ngOnInit() {
  }

  delete(){
  	console.log('metdo para eliminar card')
  }

}