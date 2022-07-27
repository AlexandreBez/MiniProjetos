import { Component } from '@angular/core';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-creation-task',
  templateUrl: './creation-task.component.html',
  styleUrls: ['./creation-task.component.css']
})
export class CreationTaskComponent{

  alertError: boolean = false;
  alertSuccess: boolean = false;

  constructor(
    private tasksService: TaskService
  ) { }
  
  // Junior stuff: yeah I know.. have better way to make this alert of task created but it's worked
  alertErrorHelper(){

    setTimeout(() => {
      this.alertError = true;

      setTimeout(()=> {
        this.alertError = false;
      }, 4000);
      
    }, 500);

  }

  alertSuccessHelper(){

    setTimeout(() => {
      this.alertSuccess = true;

      setTimeout(()=> {
        this.alertSuccess = false;
      }, 4000);
      
    }, 500);

  }

  onAddTask(priority: string, tasks: string){

    if(tasks === ""){
      // call error alert
      this.alertErrorHelper();
    }else{
      // call success alert
      this.alertSuccessHelper();
      // send the object with the task
      this.tasksService.addTask(priority, tasks);
      tasks = "";
    }

  }


}
