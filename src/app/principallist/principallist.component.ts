import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principallist',
  templateUrl: './principallist.component.html',
  styleUrls: ['./principallist.component.css']
})
export class PrincipallistComponent implements OnInit {

 
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  public dataa = [
    {name: 'Bharathi',mobilenumber:'6383711863', email: 'therichpost@gmail.com', qualification:'BA'},
    {name: 'abiram',mobilenumber:'6383711863', email: 'therichpost@gmail.com', qualification:'BA'},
    {name: 'dinesh',mobilenumber:'6383711863', email: 'therichpost@gmail.com', qualification:'BA'},
    {name: 'sridar',mobilenumber:'6383711863', email: 'therichpost@gmail.com', qualification:'BA'},
    {name: 'joshua',mobilenumber:'6383711863', email: 'therichpost@gmail.com', qualification:'BA'},
    {name: 'Ajay',mobilenumber:'6383711863', email: 'therichpost@gmail.com', qualification:'BA'},
    {name: 'Ajay',mobilenumber:'6383711863', email: 'therichpost@gmail.com', qualification:'BA'},
    {name: 'Ajay',mobilenumber:'6383711863', email: 'therichpost@gmail.com', qualification:'BA'},
    {name: 'Ajay',mobilenumber:'6383711863', email: 'therichpost@gmail.com', qualification:'BA'},
    
  ];
  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu : [5, 10, 25],
        processing: true
    };
  }

   deleterow(group: any){
    console.log(group);
    //here do delete event
    const that = this;
    // this.rerender()
 }
 
}
