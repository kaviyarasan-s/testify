import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface testdetail { 
  name: string;  
}

const DATA :testdetail[] = [
  {name:'kavi'},
  {name:'karthi'}
] 

@Component({
  selector: 'app-upload-test',
  templateUrl: './upload-test.component.html',
  styleUrls: ['./upload-test.component.css']
})
export class UploadTestComponent implements OnInit { 

  testname: string = '';
  file: File = null;

  displayedColumns: string[] = ['name'];
  dataSource = DATA;
   
  constructor() { }

  ngOnInit(): void {
  }

  uploadFile(event) {   
    this.file = event.target.files[0];
  }

  
}
