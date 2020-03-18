import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { User } from './../../shared/user.class';
import { UtiltoolService } from '../../services/utiltool.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  private user: User = new User();
  private exp: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  private data_sexo = ['Hombre','Mujer'];
  private user_sexo:string;
  private email_verifi:string

  constructor(
    private authSvc: AuthService,private router: Router,private utilTool:UtiltoolService,
    private formBuilder: FormBuilder,private db: AngularFirestore, private loadingController:LoadingController
    ){}

  registerForm = this.formBuilder.group({
    name:['',Validators.required], 
    last_name:['',Validators.required],
    password:['',[Validators.required,Validators.minLength(6)]],
    email:['',[Validators.required,Validators.pattern(this.exp)]],
    age:[0,Validators.required],
  });

  onRegister(){
    const reg = this.registerForm;
    this.verifiEmail()
    let bool:boolean = true

   if(Validators.required(reg.get('name')) || Validators.required(reg.get('last_name'))
      ||Validators.required(reg.get('age')) || Validators.required(reg.get('email'))
      || Validators.required(reg.get('password'))){

      bool = false
      this.utilTool.presentAlert('Error','empty fields','ok');
    }

   if(this.user_sexo === 'undefined'){
    console.log('sexo if')
    bool = false
    this.utilTool.presentAlert('Error','empty fields','ok');
   }

   if(Validators.email(reg.get('email'))){
      bool = false
      this.utilTool.presentAlert('Error','invalid email address','ok');
   }

   if(this.email_verifi === reg.get('email').value){
     console.log('if de email en uso')
    this.utilTool.presentAlert('Error','The email address is already in use by another account.','ok');
   }
   
   if(reg.get('age').value >120  || reg.get('age').value == 0){
      bool = false
      this.utilTool.presentAlert('Error','age must be under 120 and over 0','ok');
   }
   
   if(reg.get('password').value.length < 6){
      bool = false
      this.utilTool.presentAlert('Error','The password must be at least 6 characters','ok');
   }
   
   if(bool){
      this.register();
   }
      
  }

  async register(){
    
    const loading = await this.loadingController.create({
      message : 'Loading.....'
    })
    await loading.present()

    try{
      const id_user = this.utilTool.generateId();
      
      const user = await this.authSvc.onRegister(this.user)

      this.db.collection("usuario").doc(id_user).set({
        id:id_user,
        name:this.user.name,
        last_name:this.user.last_name,
        email:this.user.email,
        age:this.user.age,
        sexo:this.user_sexo
      });

      if(user){
        this.router.navigateByUrl('/');
      }

    }catch(error){
      this.utilTool.presentAlert('Error',error.message,'ok');
    }
    finally{
      loading.dismiss();
    }
  }

  value_sexo(e){
    this.user_sexo = e.target.value;

  }

   verifiEmail(){
    var coll_fb  = this.db.collection('usuario',ref => 
    ref.where('email','==',this.registerForm.get('email').value)).snapshotChanges().pipe(
      map(actions =>{
        return actions.map(a =>{
          const data = a.payload.doc.data()
          return data;
        })
      })
    ).subscribe(data => 
      this.email_verifi = data[0]['email']
    );
  }
}