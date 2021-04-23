import {Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource} from '@angular/material/table';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent 
{
  displayedColumns: string[] = ['Id'];
  dataSource = new MatTableDataSource<User>(USER_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
const USER_DATA: User[] = 
[
  {id: "1", firstName: 'John', lastName: 'Doe', email: 'john.doe@test.com'}
];
