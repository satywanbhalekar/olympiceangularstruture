import { Component } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent {
// public students=[
//   {name:"sam",age:21},
// {name:"sataym",age:22},
// {name:"sam",age:21},
// {name:"sataym",age:22},
// {name:"sam",age:21},
// {name:"sataym",age:22},
// {name:"sam",age:21},
// {name:"sataym",age:22},]

/**
 *
 */
public students:any;
constructor(private std:ServiceService) {
  // this.students=std.getStudents();
  
  
}


 }
