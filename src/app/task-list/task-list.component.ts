import { Component } from '@angular/core';
import { Task } from 'src/ModelInterface/toDoModel';
import { TaskserviceService } from '../taskservice.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
  export class TaskListComponent {
      
    tasks: Task[] = [];
    constructor(private taskService: TaskserviceService) {
    }
    ngOnInit(): void {
      this.tasks = this.taskService.getTasks();
      console.log(this.tasks);
    }
  
    updateTask(updateTask: Task): void {
      this.taskService.updateTask(updateTask);
  
    }
    deleteTask(taskId: number): void {
      this.taskService.deleteTask(taskId);
      this.tasks = this.taskService.getTasks();
  
    }
  
  

}
