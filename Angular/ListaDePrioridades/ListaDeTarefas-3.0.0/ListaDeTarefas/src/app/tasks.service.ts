import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class TaskService{

  tasks: any = [];

  addTask(priority: string, task: string){
    this.tasks.push({priority: priority, task: task});
    console.log('A ' + priority + ' task was added!')
  }

  deleteTask(){
    this.tasks.pop();
  }

  deleteAll(){
    this.tasks = [];
  }
}