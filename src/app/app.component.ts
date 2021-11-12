import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TodoService} from './services/todo.service';
import {Task} from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public tasks: Task[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.fetchTasks();
  }

  public addTask(task: Task) {
    this.tasks.push(task);
  }

  public fetchTasks() {
    this.todoService.fetchTasks()
      .subscribe(tasks => {
        this.tasks = tasks;
      })
  }

  public removeTask(id ?: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
