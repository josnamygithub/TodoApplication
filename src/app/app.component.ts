import { Component } from '@angular/core';
import { Task } from 'src/ModelInterface/toDoModel';
import { TaskserviceService } from './taskservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoApplication';
  
  tasks: Task[] = [];

  constructor(private taskService :TaskserviceService){
    this.tasks=this.taskService.getTasks();
    }


}

