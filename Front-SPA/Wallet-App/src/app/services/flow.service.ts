import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flow } from '../models/Flow';

@Injectable({
  providedIn: 'root',
})
export class FlowService {
  baseUrl = 'http://localhost:5044/api/flow';

  constructor(private http: HttpClient) {}

  getFlows(): Observable<Flow[]> {
    return this.http.get<Flow[]>(this.baseUrl);
  }

  getFlow(id: number): Observable<Flow> {
    return this.http.get<Flow>(`${this.baseUrl}/${id}`);
  }

  postFlow(flow: Flow): Observable<Flow> {
    return this.http.post<Flow>(this.baseUrl, flow);
  }

  updateFlow(flow: Flow): Observable<Flow> {
    return this.http.put<Flow>(this.baseUrl, flow);
  }

  deleteFlow(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseUrl}/${id}`)
  }
}
