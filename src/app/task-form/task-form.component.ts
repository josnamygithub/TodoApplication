import { Component } from '@angular/core';
import { TaskserviceService } from '../taskservice.service';
import { Task } from 'src/ModelInterface/toDoModel';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {

  task:Task;

  constructor(private taskService:TaskserviceService) { 
    this.task = this.getInitTask();
   }
  addTask(): void {
    console.log('Adding task:', this.task);
    this.taskService.addTask(this.task);
    console.log('Task added successfully.');
    this.task = this.getInitTask();
    
  }

  private getInitTask(): Task {
    return { id: 0, title: '', description: '' ,status:'incompleted'};
  }
}
