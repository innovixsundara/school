import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url='https://jsonplaceholder.typicode.com/posts'

  constructor(private http:HttpClient) { }

  users(){
    return this.http.get(this.url);
  }
  saveUser(data:any){
    return this.http.post(this.url,data)
  }
}
