import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  user: any;
  // pswd:any;
  constructor(private http: HttpClient) {
    this.http.get('http://localhost:3000/user').subscribe((data: any) => {
      this.user = data;
    });
  }
  login(name: any, pswd: any) {
    const user = this.user.find((user: any) => user.name === name && user.pswd === pswd);
    if (user) {
      return true
    } else {
      return false
    }
  }
}