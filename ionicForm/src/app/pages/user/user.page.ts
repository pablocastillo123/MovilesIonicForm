import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Form } from '../../interface/form';
import { FormService } from './../../services/form.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  public collec_form: Form[];
  public button_user_admin: boolean = false;

  constructor(private firestore: AngularFirestore,private userform : FormService) { }

  ngOnInit() {
    this.userform.getForms().subscribe(res =>{
      this.collec_form = res;
      console.log(res)
    })

    console.log(this.collec_form)
  }

}
