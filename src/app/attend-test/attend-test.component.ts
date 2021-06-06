import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attend-test',
  templateUrl: './attend-test.component.html',
  styleUrls: ['./attend-test.component.css']
})
export class AttendTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  questions = [
    {
      id:1,
      name:'Question',  
      answers:['a','b','c','d'],
      selectedAnswer:''
    }
  ];

  submitTest(){
    console.log(this.questions[0].selectedAnswer);
  }
}
