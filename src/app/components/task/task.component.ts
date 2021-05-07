import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Task} from 'src/app/_models/task';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  public  pojectId:  string  =  "";
  public  id:  string  =  "";
  public  details:  string  =  "";
  public status: string = "";
  public AssignedToUserID: string = "";
  public CreatedOn: Date = new Date;
  
  constructor( public task : Task, private  router: Router, public http : HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(form: FormsModule) {
    if (this.task.id == '0')
      this.insertRecord(form);
    else
      this.updateRecord(form);

      this.Reset();
  }
  updateRecord(form: FormsModule) {
    let url: string = 'https://localhost:44303/api/task/Update' 
    this.http.post( url, new Task(this.id, this.pojectId, this.details, this.CreatedOn, this.status, this.AssignedToUserID));
  }
  insertRecord(form: FormsModule) {
    let url: string = 'https://localhost:44303/api/task/Add' 
    this.http.put( url,new Task(this.id, this.pojectId, this.details, this.CreatedOn, this.status, this.AssignedToUserID));
  }
 
  DeleteRecord(form: FormsModule) {
    let url: string = 'https://localhost:44303/api/task/{this.Id}' ;
    this.http.delete(url);

    this.Reset();
  }

  Reset(){
    this.router.navigateByUrl('/view');
  }
}
