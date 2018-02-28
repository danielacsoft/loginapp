import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public islogin: boolean;
  public nombreUsuario: string;
  public emailUsuario: string;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe( auth => {
      if (auth) {
        this.islogin = true;
        this.nombreUsuario = auth.displayName;
        this.emailUsuario = auth.email;
      }else {
        this.islogin = false;
      }
    })
  }

  onClickLogout(){
    this.authService.logout();
  }

}
