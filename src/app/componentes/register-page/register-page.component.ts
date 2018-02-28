import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  public email: string;
  public password: string;
  public router: Router;
  constructor(
    public authService: AuthService
  ) {}

  ngOnInit() {
  }
  onSubmitAddUser(){
    this.authService.registeruser(this.email,this.password)
    .then( (res) =>{
     this.router.navigate(['/privado']);
    }).catch( (err) =>{
       console.log(err);
    })
  }
}
