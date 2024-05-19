import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user : any;
pass : any;
result : boolean = false;
  constructor(private rout:Router,private auth:AuthServiceService) { }

  ngOnInit(): void {
  }
signin(){

  this.result = this.auth.login(this.user , this.pass)
  
  if(this.result==true){
    this.rout.navigateByUrl("userlist")
  }
 else{
  this.rout.navigateByUrl("")
 }
  // if(this.user=="admin" && this.pass=="admin"){
  //     this.rout.navigateByUrl("userlist")
  // }
}
}
