import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flows',
  templateUrl: './flows.component.html',
  styleUrls: ['./flows.component.scss'],
})
export class FlowsComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getFlows();
  }

  public flows: any;

  public getFlows(): void {
    this.http.get('http://localhost:5044/api/flow').subscribe(
      (response) => (this.flows = response),
      (error) => console.log(error)
    );
  }
}
