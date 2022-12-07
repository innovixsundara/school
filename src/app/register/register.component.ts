import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth-.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formdata={name:"",gmail:"",password:"",phonenumber:""};
  submit=false;
  errorMessage="";
  loading=false;

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(){

    this.loading=true;

    //call register service
      this.auth
      .register(this.formdata.name,this.formdata.gmail,this.formdata.password,this.formdata.phonenumber)
      .subscribe({
          next:data=>{
            //store token from response data
            this.auth.storeToken(data.idToken);
            console.log('Registered idtoken is'+data.idToken);
          },
          error:data=>{
            if(data!=undefined && data.error!=undefined &&data.error.error!=undefined &&data.error.error.message!=undefined &&data.error.error.message=="INVALID_EMAIL"){
              this.errorMessage="Invalid Email!"
            } else if (data!=undefined && data.error!=undefined &&data.error.error!=undefined &&data.error.error.message!=undefined &&data.error.error.message=="EMAIL_EXISTS"){
              this.errorMessage="Already Email Exists!"
            }else{
              this.errorMessage="Unknown error occured when creating this account!"
            }
          }
      }).add  (()=>{
        this.loading=false;
        console.log('Registered completed!')
      })
  }
}
