import { Component, OnInit } from '@angular/core';

import {FormGroup, FormControl, Validators} from "@angular/forms"

import {UsernameValidators} from "../signup-form/username.validators"

@Component({
  selector: 'app-signup',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  form =new FormGroup({
    username:new
        FormControl('',
            [Validators.required, 
             Validators.minLength(3), 
             UsernameValidators.cannotContainSpace]),
    password: new 
        FormControl('',
            [Validators.required, 
             Validators.minLength(8)])

  })
  constructor() { }

  ngOnInit(): void {
  }
get username(){
  return this.form.get('username');
}

get password(){
  return this.form.get('password');
}
}
