import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignteacher',
  templateUrl: './assignteacher.component.html',
  styleUrls: ['./assignteacher.component.css']
})
export class AssignteacherComponent implements OnInit {

  title(title: any) {
    throw new Error('Method not implemented.');
  }
  public dataa = [
    {no: '1',fname:'abi', lname: 's', subject:'BA'},
    {no: '1',fname:'abi', lname: 's', subject:'BA'},
    {no: '1',fname:'abi', lname: 's', subject:'BA'},
    {no: '1',fname:'abi', lname: 's', subject:'BA'},
    {no: '1',fname:'abi', lname: 's', subject:'BA'},
    {no: '1',fname:'abi', lname: 's', subject:'BA'},
    {no: '1',fname:'abi', lname: 's', subject:'BA'},
    
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
