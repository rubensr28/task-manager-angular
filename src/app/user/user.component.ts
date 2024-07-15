import { Component, computed, signal } from '@angular/core';
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
  imagePath = computed(()=> 'assets/users/' + this.selectedUser().avatar);

  constructor() {
    const index = this.generateRandomIndex();
    this.selectedUser = signal(DUMMY_USERS[index]);
    
  }

  protected onSelectUser(){
    const index = this.generateRandomIndex();
    this.selectedUser.set(DUMMY_USERS[index])
  }

  private generateRandomIndex(){
    return Math.floor(Math.random() * DUMMY_USERS.length);
  }

}
