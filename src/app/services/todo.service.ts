import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from 'src/environments/environment';
import {Task} from '../models/task.model';

const API_URL = environment.api;

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient){};

  public addTask(task: Task): Observable<Task>{
    return this.http.post<Task>(API_URL, task);
  }
  public fetchTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(API_URL);
  }
  public removeTask(id?: number): Observable<void>{
   return this.http.delete<void>(`${API_URL}${id}`);
  }

  public completeTask(task: Task):Observable<Task>{
    return this.http.put<Task>(`${API_URL}${task.id}`, task);
  }


}
