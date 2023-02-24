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

  getFlows(): Observable<Flow[]>{

    return this.http.get<Flow[]>(this.baseUrl)
  }

}
