import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {User} from 'src/app/_models/user';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public  email:  string  =  "";
  public  Id:  string  =  "";
  public  password:  string  =  "";
  public firstName: string = "";
  public lastName: string = "";
  
  constructor( public user : User, private  router: Router, public http : HttpClient) { }

  ngOnInit(): void {  }

  onSubmit(form: FormsModule) {
    if (this.user.id == '0')
      this.insertRecord(form);
    else
      this.updateRecord(form);

      this.Reset();
  }
  updateRecord(form: FormsModule) {
    let url: string = 'https://localhost:44303/api/user/Update' 
    this.http.post( url, new User(this.Id, this.firstName, this.lastName, this.email, this.password));
  }
  insertRecord(form: FormsModule) {
    let url: string = 'https://localhost:44303/api/user/Add' 
    this.http.put( url, new User(this.Id, this.firstName, this.lastName, this.email, this.password));
  }
 
  DeleteRecord(form: FormsModule) {
    let url: string = 'https://localhost:44303/api/user/{this.Id}' ;
    this.http.delete(url);

    this.Reset();
  }

  Reset(){
    this.router.navigateByUrl('/view');
  }
}
