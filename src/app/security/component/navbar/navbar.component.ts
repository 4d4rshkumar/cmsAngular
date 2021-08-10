import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn=false;
  
  constructor(private loginService:LoginService) { }
  
  ngOnInit(): void {
    this.loggedIn=!!localStorage.getItem("token");
  }
  logoutUser(){
    this.loginService.logout();
    location.reload();
  }

}
