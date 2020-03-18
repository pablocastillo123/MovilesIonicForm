import { Component, OnInit } from '@angular/core';

import { User } from '../../shared/user.class'

import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service'

import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  
  user: User = new User()

  constructor(private router: Router, private authSvc: AuthService,
     public alertController: AlertController) { }

  ngOnInit() {
  }

  async onLogin (event: any) {

    if(event.target.user.value == "" && event.target.password.value == "") {
      this.alerta('Por favor llene los campos')
    }
    if(event.target.user.value !== "" && event.target.password.value == "") {
      this.alerta('Por favor llene el campo de contraseña')
    }
    if(event.target.user.value == "" && event.target.password.value !== "") {
      this.alerta('Por favor llene el campo de usuario')
    } 
    if(event.target.user.value !== "" && event.target.password.value !== "") {
      const user = await this.authSvc.onLogin(this.user);

    if(user) {
      if (user.user.email != 'admin@gmail.com') {
        this.router.navigateByUrl('/user/tabs/perfil')
    }else {
      this.router.navigateByUrl('/admin/tabs/formulario')
    }
  } else {
    this.alerta('Usuario o contraseña incorrecto')
  }
    }
  }

  async alerta(mensaje) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'problema',
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }

}
