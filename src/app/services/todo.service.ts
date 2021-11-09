import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { delay } from "rxjs/operators";

export interface Task{
  id?: number,
  title: string,
  completed: boolean
}

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  constructor(private http: HttpClient){};

  public addTask(task: Task): Observable<Task>{
    return this.http.post<Task>('http://localhost:3000/tasks', task);
  }
  public fetchTasks(): Observable<Task[]>{
    return this.http.get<Task[]>('http://localhost:3000/tasks');
  }
  public removeTask(id?: number): Observable<void>{
   return this.http.delete<void>(`http://localhost:3000/tasks/${id}`);
  }

  public completeTask(task: Task):Observable<Task>{
    return this.http.put<Task>(`http://localhost:3000/tasks/${task.id}`, task);
  }


}
