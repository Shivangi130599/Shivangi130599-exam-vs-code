import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username:string;
  password:string;

constructor(private router:Router){}
 login(){
   if( this.username=="Shiv"&& this.password=="135"){
         sessionStorage.setItem('loggedInUsername',this.username);
         this.router.navigate(['dashboard']);
   }
   
   else{
     alert("login not successful");
 }
 }

}
