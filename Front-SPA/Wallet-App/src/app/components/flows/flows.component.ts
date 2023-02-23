import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Flow } from 'src/app/models/Flow';
import { FlowService } from '../../services/flow.service';

@Component({
  selector: 'app-flows',
  templateUrl: './flows.component.html',
  styleUrls: ['./flows.component.scss'],
})
export class FlowsComponent implements OnInit {
  constructor(private flowService: FlowService) {}

  public ngOnInit(): void {
    this.getFlows();
  }

  public flows: Flow[] = [];

  public getFlows(): void {

    this.flowService.getFlows().subscribe(
      {
        next : (response) => (this.flows = response),
        error: (error) => console.log(error),
        complete: () => console.log('Get Flows')
      });
  }

}
