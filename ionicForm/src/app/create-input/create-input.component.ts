import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy, Input , DoCheck} from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-create-input',
  templateUrl: './create-input.component.html',
  styleUrls: ['./create-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CreateInputComponent implements OnInit, DoCheck {

  public input : Array<Number> = []

  @Output() public childEvent = new EventEmitter();
  @Output() public formulario = new EventEmitter();

  public titulo_formulario : string 
  public titulo_input = []
  public valor_categoria : string 
  public type_input = []
  public disable : boolean = true

  public form  = {
    formulario: '',
    nombre_input : [''],
    tipo_input : [''],
    nombre_categoria: ''
  }

  public subCategory = []
  public category =  []
  public type : Array<String> = ['Number' , 'Date', 'String', 'Time']
  public idSub


  constructor(private alertController: AlertController) { 
  }

  onChangeCategoria(value){
    console.log(value.detail.value);
    this.valor_categoria = value.detail.value
  }
  
  ngDoCheck(): void {

    const inputSend = this.titulo_input.filter(element => {
      return element != null
    })

    const typeInput = this.type_input.filter(element => {
      return element != null
    })

    this.form = {
      formulario: this.titulo_formulario,
      nombre_input : [...inputSend], 
      tipo_input : [...typeInput],
      nombre_categoria: this.valor_categoria
    }
    this.formulario.emit(this.form)

    
  }

  ngOnInit() {

    this.childEvent.emit('true')
    
   }

  agregar () {    
    this.input.push(this.input.length + 1)
    if (this.input.length >= 1){
      this.childEvent.emit('false')
  }
}

  eliminar () {
    this.input.pop()
  if(this.input.length == 0) {
    this.childEvent.emit('true')
    this.alertaVacio()
  }
  this.titulo_input.pop()
  }
  
  async alertaVacio() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'problema',
      message: 'Por favor agregue inputs',
      buttons: ['OK']
    });

    await alert.present();
  }


}
