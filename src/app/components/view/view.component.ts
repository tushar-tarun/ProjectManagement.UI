import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Task } from 'src/app/_models/task';
import { Project } from 'src/app/_models/project';
import { User } from 'src/app/_models/user'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email'];
  displayedColumnsTask: string[] = ['id', 'prodjectId', 'detail', 'createdOn', 'status','assignedTo'];
  displayedColumnsProject: string[] = ['id', 'name', 'details', 'createdOn'];

  public USER_DATA: Observable<User> = this.GetAllUsers();
  public TASK_DATA: Observable<Task> = this.GetAllTasks();
  public PROJECT_DATA: Observable<Project> = this.GetAllProjects();

  dataSource = this.USER_DATA;
  dataSourceTask = this.TASK_DATA;
  dataSourceProject = this.PROJECT_DATA;
  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;

  constructor(public dialog: MatDialog, public http: HttpClient) { }

  GetAllUsers() {
    let url: string = "https://localhost:44303/api/user";
    return this.http.get<User>(url);
  }

  GetAllTasks() {
    let url: string = "https://localhost:44303/api/task";
    return this.http.get<Task>(url);
  }

  GetAllProjects() {
    let url: string = "https://localhost:44303/api/Project";
    return this.http.get<Project>(url);
  }
}
