import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacherlist',
  templateUrl: './teacherlist.component.html',
  styleUrls: ['./teacherlist.component.css']
})
export class TeacherlistComponent implements OnInit {


  title(title: any) {
    throw new Error('Method not implemented.');
  }
  public dataa = [
    {name: 'Bharathi',email: 'therichpost@gmail.com',class:'12',section:'A'},
    {name: 'Abiram',email: 'therichpost@gmail.com',class:'12',section:'B'},
    {name: 'Joshuva',email: 'therichpost@gmail.com',class:'12',section:'A'},
    {name: 'Gowri',email: 'therichpost@gmail.com',class:'12',section:'C'},
    {name: 'Sridhar',email: 'therichpost@gmail.com',class:'12',section:'C'},
    {name: 'Ashik',email: 'therichpost@gmail.com',class:'12',section:'A'},
    {name: 'Arshad',email: 'therichpost@gmail.com',class:'12',section:'B'},
    {name: 'Siva',email: 'therichpost@gmail.com',class:'12',section:'A'},
    {name: 'Venkat',email: 'therichpost@gmail.com',class:'12',section:'C'},
    {name: 'Ajay',email: 'therichpost@gmail.com',class:'12',section:'A'},
    
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
