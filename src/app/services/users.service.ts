import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import IUsers from 'src/models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  
  register(user : any) : Observable<IUsers>{
    return this.http.post<IUsers>('http://localhost:3000/register',user)
  }

  login(user : any) : Observable<IUsers>{
    return this.http.post<IUsers>('http://localhost:3000/login',user)
  }
}
