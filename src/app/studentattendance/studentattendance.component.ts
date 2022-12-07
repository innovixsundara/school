import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentattendance',
  templateUrl: './studentattendance.component.html',
  styleUrls: ['./studentattendance.component.css']
})
export class StudentattendanceComponent implements OnInit {

  ctitle(title: any) {
    throw new Error('Method not implemented.');
  }
  public dataa = [
    {name: 'Bharathi',rollno:'001',class:'12',section:'A',phoneno:9500854241,gender:'male'},
    {name: 'Athi',rollno:'001',class:'12',section:'A',phoneno:9500854241,gender:'male'},
    {name: 'Rathi',rollno:'001',class:'12',section:'A',phoneno:9500854241,gender:'male'},
    {name: 'Hari',rollno:'001',class:'12',section:'A',phoneno:9500854241,gender:'male'},
    {name: 'Aarthi',rollno:'001',class:'12',section:'A',phoneno:9500854241,gender:'male'},
    {name: 'Abi',rollno:'001',class:'12',section:'A',phoneno:9500854241,gender:'male'},
    {name: 'Bhai',rollno:'001',class:'12',section:'A',phoneno:9500854241,gender:'male'},
    {name: 'Gowri',rollno:'001',class:'12',section:'A',phoneno:9500854241,gender:'male'},
    {name: 'Josuva',rollno:'001',class:'12',section:'A',phoneno:9500854241,gender:'male'},
    {name: 'Hakeem',rollno:'001',class:'12',section:'A',phoneno:9500854241,gender:'male'},
    
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
}
