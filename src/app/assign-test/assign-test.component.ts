import { Component, OnInit } from '@angular/core';

export interface test{
  id:number,
  name:string
}

export interface group{
  id:number,
  name:string
} 
@Component({
  selector: 'app-assign-test',
  templateUrl: './assign-test.component.html',
  styleUrls: ['./assign-test.component.css']
})
export class AssignTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tests : test[] = [
    {
      id:1,
      name:'test1'
    },
    {
      id:2,
      name:'test2'
    }
  ];

  groups : group[] = [
    {
      id:1,
      name:'group1'
    },
    {
      id:2,
      name:'group2'
    }
  ]

}
