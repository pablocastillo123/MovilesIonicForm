import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private firebase: AngularFireAuth) {}

  ngOnInit(){
    var user = this.firebase.user
    console.log(user)
  }

}
