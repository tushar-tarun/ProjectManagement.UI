import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http'
import {User} from 'src/app/_models/user'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public  email:  string  =  "";
  public  password:  string  =  "";
  url: string = "https://localhost:44303/api/user"
  constructor(private  router: Router, public http : HttpClient) { }
    
  login()
  {
    let users = this.getUsers();
    users.forEach( (item: User)  => 
    {
      if(this.email ===  item.email  &&  this.password  === item.password)
      {
            this.router.navigateByUrl('/view');
        }
      }
    )
  }
  ngOnInit(): void {  }

  getUsers() : Observable<User>
  {
    return this.http.get<User>(this.url);
  }
}
