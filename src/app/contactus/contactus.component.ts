import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      'firstName': [null, Validators.required],
      'lastName' : [null, Validators.required],
      'email': [null, [Validators.required, Validators.email]],
      'message' : [null, Validators.required ]
    });
  }

  contact(formData: NgForm){
    console.log(formData);
  }
}
