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

  }

  public createFlow(): void {

  }
}
