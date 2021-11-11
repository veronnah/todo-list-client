import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {TodoService, Task} from '../services/todo.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})

export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Input() index: number;
  @Output() removeTaskEvent = new EventEmitter<number>();

  constructor(private todoService: TodoService) {
  };

  ngOnInit(): void {
  }

  public removeTask() {
    this.todoService.removeTask(this.task.id)
      .subscribe(() => {
        this.removeTaskEvent.emit(this.task.id);
      })
  }

  public completeTask() {
    this.task.completed = !this.task.completed;
    this.todoService.completeTask(this.task)
      .subscribe(task => {
        this.task = task;
      })
  }

}
