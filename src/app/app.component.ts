import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import {
  TodoService,
  Task
} from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private todoService: TodoService) {}
  public tasks: Task[] = [];

  ngOnInit() {
    this.fetchTasks();
  }

  public addTask(task: Task) {
    this.tasks.push(task);
  }

  public fetchTasks() {
    this.todoService.fetchTasks()
      .subscribe(tasks => {
        this.tasks = tasks.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
      })
  }

  public removeTask(id ? : number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
