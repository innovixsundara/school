import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

  title(title: any) {
    throw new Error('Method not implemented.');
  }
  public dataa = [
    {name: 'Bharathi',rollno:'001',class:'12',section:'A',phoneno:9500854241,gender:'male'},
    {name: 'Bharathi',rollno:'001',class:'12',section:'A',phoneno:9500854241,gender:'male'},
    {name: 'Bharathi',rollno:'001',class:'12',section:'A',phoneno:9500854241,gender:'male'},
    {name: 'Bharathi',rollno:'001',class:'12',section:'A',phoneno:9500854241,gender:'male'},
    {name: 'Bharathi',rollno:'001',class:'12',section:'A',phoneno:9500854241,gender:'male'},
    {name: 'Bharathi',rollno:'001',class:'12',section:'A',phoneno:9500854241,gender:'male'},
    {name: 'Bharathi',rollno:'001',class:'12',section:'A',phoneno:9500854241,gender:'male'},
    {name: 'Bharathi',rollno:'001',class:'12',section:'A',phoneno:9500854241,gender:'male'},
    {name: 'Bharathi',rollno:'001',class:'12',section:'A',phoneno:9500854241,gender:'male'},
    {name: 'Bharathi',rollno:'001',class:'12',section:'A',phoneno:9500854241,gender:'male'},
    
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
