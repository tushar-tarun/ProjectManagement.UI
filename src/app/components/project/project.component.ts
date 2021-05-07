import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Project} from 'src/app/_models/project';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit { 
public  id:  string  =  "";
public  Name:  string  =  "";
public details: string = "";
public CreatedOn: Date = new Date;
   
constructor( public project : Project, private  router: Router, public http : HttpClient) { }

  ngOnInit(): void {  }
  onSubmit(form: FormsModule) {
    if (this.project.id == '0')
      this.insertRecord(form);
    else
      this.updateRecord(form);

      this.Reset();
  }
  updateRecord(form: FormsModule) {
    let url: string = 'https://localhost:44303/api/Project/Update' 
    this.http.post( url, new Project(this.id, this.Name, this.details, this.CreatedOn));
  }
  insertRecord(form: FormsModule) {
    let url: string = 'https://localhost:44303/api/Project/Add' 
    this.http.put( url, new Project(this.id, this.Name, this.details, this.CreatedOn));
  }
 
  DeleteRecord(form: FormsModule) {
    let url: string = 'https://localhost:44303/api/Project/{this.Id}' ;
    this.http.delete(url);

    this.Reset();
  }

  Reset(){
    this.router.navigateByUrl('/view');
  }
}
