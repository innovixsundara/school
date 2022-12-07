import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router,private http:HttpClient) { }

  isAuthenticated():boolean{
    if(sessionStorage.getItem('token')!==null){
      return true;
    }
    return false;
  };

  canAccess(){
    if(this.isAuthenticated()){
       //redirect to login
       this.router.navigate(['/login'])
    }
  }

  canAuthenticate(){
    if(this.isAuthenticated()){
      this.router.navigate(['/dashboard'])
    }
  }

  register(name:string,gmail:string,password:string,phonenumber:string){
    //send data to register api

    return this.http.
    post<{idToken:string}>(
      'http://192.168.0.160:8080/api/products/c1',
      {displayName:name,gmail,password,phonenumber})
  }

  storeToken(token:string){
    sessionStorage.setItem('token',token)
  }

  login(email:string,password:string){
    return this.http
    .post<{idToken:string}>(
      'http://192.168.0.160:8080/api/products/c1',
      {email,password}
    )
  }

  detail(){
    let token=sessionStorage.getItem('token');

    return this.http.post<{users:Array<{localId:string,displayName:string}>}>(
      '',
      {idToken:token}
    )
  }

  removeToken(){
    sessionStorage.removeItem('token')
  }
}
