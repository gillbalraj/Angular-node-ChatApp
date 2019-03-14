import { Component, OnInit } from '@angular/core';
import { NewUser } from '../new-user';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.scss']
})
export class NewUserFormComponent implements OnInit {

  userType = ['New User', 'Registered User'];

  model = new NewUser(1, 'Mr. X', this.userType[0], 2269612087);

  submitted = false;

  onSubmit(){ this.submitted = true; }

  //TODO: Remove this when we are done
  get diagnostic() { return JSON.stringify(this.model); }

  constructor() { }

  ngOnInit() {
  }

}
