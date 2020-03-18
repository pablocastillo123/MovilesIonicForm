import { Component, OnInit } from '@angular/core';

import { User } from '../../shared/user.class'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User = new User()


  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  onLogin () {
    this.router.navigateByUrl('/admin/tabs/tab1')
  }

}
