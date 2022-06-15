import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UsersService } from 'src/app/services/users.service';
import IUsers from 'src/models/users';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  users : { email : string , password : string} = {
    email : "",
    password : ""
  }

  createMessage(type : string) : void{
    this.message.create(type,`Login ${type}`)
  }

  constructor(
    private userService : UsersService,
    private message : NzMessageService,
    private router : Router
    ) { }

  ngOnInit(): void {
  }

  submitForm(){
    this.userService.login(this.users).subscribe(data => {
      this.createMessage('success')
      console.log(data);
      localStorage.setItem('user',JSON.stringify(data))
    })
  }
}
