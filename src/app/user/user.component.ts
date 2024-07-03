import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  selectedUser;

  constructor() {
    this.selectedUser = DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)];
    
  }

  get imagePath(){
    return 'assets/users/' + this.selectedUser.avatar;
  }

  protected onSelectUser(){
    console.log("clicked")
  }

}
