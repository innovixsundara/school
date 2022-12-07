import { Component, OnInit } from '@angular/core';
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-addprincipal',
  templateUrl: './addprincipal.component.html',
  styleUrls: ['./addprincipal.component.css']
})
export class AddprincipalComponent implements OnInit {

  users:any;
   constructor(private userData:UsersService){
    this.userData.users().subscribe((data)=>{
      this.users=data;
    })
   }

  getUserFormData(data:any){
    console.warn(data)
    this.userData.saveUser(data).subscribe((result)=>{
      console.warn(result)
    })
  }

  ngOnInit(): void {
  }

}
