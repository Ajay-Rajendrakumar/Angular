import { Component, OnInit } from '@angular/core';

import { User } from '../Interface/user';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User={
    name:"",
    password:"",
  };

  constructor(private userService:UserService) {}

  selectedHero?: User;
  onSelect(hero: User): void {
    this.selectedHero = hero;
    alert(hero['name'])
  }

  add(user: User): void {
    console.log(user)
    this.userService.loginUser(user).subscribe(data => {
      console.log(data);
    })
  }


  ngOnInit(): void {
  }

}
