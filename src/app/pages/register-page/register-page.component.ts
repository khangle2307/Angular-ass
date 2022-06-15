import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  users : { email : string , password : string} = {
    email : "",
    password : ""
  }
  createMessage(type : string) : void{
    this.message.create(type,`Register ${type}`)
  }

  constructor(
    private userService : UsersService,
    private message : NzMessageService,
    private router : Router
    ) { }

  ngOnInit(): void {
  }
  submitForm(){
    this.userService.register(this.users).subscribe(data => {
      this.createMessage("success")
      console.log(data);
    })
  }

}
