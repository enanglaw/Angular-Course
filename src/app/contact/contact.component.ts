import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 contactMethods=[
          {id:1, name:"Mail"},
          {id:2, name:"Phone"}
          ];
  constructor() { }

  ngOnInit(): void {
  }
    log(f){
      console.log(f);
    }
    submit(f){
      console.log(f);
    }
}
