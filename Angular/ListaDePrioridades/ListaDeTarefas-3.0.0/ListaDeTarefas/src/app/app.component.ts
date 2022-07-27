import { Component, OnInit } from '@angular/core';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  listTask: {priority: string, task: string}[] = [];

  confirmDelete = false;
  alertDelete = false;

  constructor(
    private tasksService: TaskService
  ){

  }

  ngOnInit(){
    this.listTask = this.tasksService.tasks;
  }

  onBtnDeleteAll(){
    this.onDeleteAll();  
  }

  onBtnDelete(){
    this.onDeleteLast();
  }

  onCancelDelete(){
    this.confirmDelete = false;
  }

  onDeleteLast(){
    this.tasksService.deleteTask();
    
    setTimeout(() => {
      this.alertDelete = true;

      setTimeout(()=> {
        this.alertDelete = false;
      }, 4000);
      
    }, 500);
  
  }

  onDeleteAll(){
    this.tasksService.deleteAll();
    
    setTimeout(() => {
      this.alertDelete = true;

      setTimeout(()=> {
        this.alertDelete = false;
      }, 4000);
      
    }, 500);
  }

}
