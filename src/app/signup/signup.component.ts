import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/profile';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  profile: Profile = {
    id: 0,
    name: 'Kavi',
    dob: new Date(),
    email: 'kavi@gmail.com',
    phoneNumber: 9688272004,
    profilePicture: null,
    qualification: '1',
    role: '1',
    comments: 'Enter Comments'    
  }

  role = [
    {
      id: 1,
      name: 'Student'
    },
    {
      id: 2,
      name: 'Staff'
    }
  ];

  qualifications = [
    {
      id: 1,
      name: 'B.E'
    }, {
      id: 2,
      name: 'M.E'
    }, {
      id: 3,
      name: 'B.C.A'
    }, {
      id: 4,
      name: 'M.C.A'
    },
    {
      id: 5,
      name: 'Others'
    }
  ]
}
