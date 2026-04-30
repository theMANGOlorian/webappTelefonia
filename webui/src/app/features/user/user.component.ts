import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {

  user: any;

  ngOnInit() {
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      this.user = JSON.parse(storedUser);
      console.log('User:', this.user);
    }
  }
}
