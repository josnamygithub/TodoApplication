import { Injectable } from '@angular/core';
import { Task } from 'src/ModelInterface/toDoModel';

@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {

  private tasks:Task[] =[];

  constructor() { 
    const storedTask =localStorage.getItem('tasks');
    if(storedTask){
      this.tasks=JSON.parse(storedTask);
    }
  }

  getTasks():Task[]{
  return this.tasks;
  }

  addTask(task:Task):void{
    task.id=Date.now();
    this.tasks.push(task);
    this.saveTasksToLocalStorage();
  }

  updateTask(updatedTask:Task):void{
    const index =this.tasks.findIndex((task) =>task.id === updatedTask.id);
    if(index !==-1){
      this.tasks[index] =updatedTask;
      this.saveTasksToLocalStorage();
    }
  }

  deleteTask(taskId :Number):void{
    this.tasks =this.tasks.filter((task) => task.id !==taskId);
    this.saveTasksToLocalStorage();
  
  }


  private saveTasksToLocalStorage():void{
    localStorage.setItem('tasks' ,JSON.stringify(this.tasks));
  }
}

    


