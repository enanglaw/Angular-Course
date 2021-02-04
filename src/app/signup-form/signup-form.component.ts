import { Component, OnInit } from '@angular/core';

import {FormGroup, FormControl, Validators} from "@angular/forms"

@Component({
  selector: 'app-signup',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  form =new FormGroup({
    username:new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)

  })
  constructor() { }

  ngOnInit(): void {
  }

}
