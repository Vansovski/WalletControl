import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flow } from 'src/app/models/Flow';
import { FlowService } from 'src/app/services/flow.service';

@Component({
  selector: 'app-flow-list',
  templateUrl: './flow-list.component.html',
  styleUrls: ['./flow-list.component.scss'],
})
export class FlowListComponent implements OnInit {
  constructor(private flowService: FlowService, private router: Router) {}

  public ngOnInit(): void {
    this.getFlows();
  }

  public flows: Flow[] = [];

  public getFlows(): void {
    this.flowService.getFlows().subscribe({
      next: (response) => (this.flows = response),
      error: (error) => console.log(error),
      complete: () => console.log('Get Flows'),
    });
  }

  public detailFlow(id: number): void {

    this.router.navigate([`flows/detail/${id}`])
  }

  public deleteFlow(id: number): void {

    this.flowService.deleteFlow(id).subscribe({
      next: () => this.getFlows(),
      error: (error) => console.log(error),
      complete: () => console.log('Delete Flows'),
  });
  }
}
