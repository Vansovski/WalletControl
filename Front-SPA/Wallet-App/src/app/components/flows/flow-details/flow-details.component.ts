import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Flow } from 'src/app/models/Flow';
import { FlowService } from 'src/app/services/flow.service';

@Component({
  selector: 'app-flow-details',
  templateUrl: './flow-details.component.html',
  styleUrls: ['./flow-details.component.scss'],
})
export class FlowDetailsComponent implements OnInit {
  form!: FormGroup;

  flow = {} as Flow;

  constructor(
    private fb: FormBuilder,
    private flowService: FlowService,
    private router: ActivatedRoute
  ) {}

  get f(): any {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.validation();
    this.loadFlow();
  }

  public validation(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      kind: ['0', [Validators.required]],
      description: [''],
    });
  }

  public loadFlow(): void {
    const flowIdParam = this.router.snapshot.paramMap.get('id');
    if (flowIdParam != null) {
      this.flowService.getFlow(+flowIdParam).subscribe({
        next: (response: Flow) => {
          this.flow = { ...response };
          this.form.setValue({
            kind: `${this.flow.kind}`,
            name: this.flow.name,
            description: this.flow.description,
          });
          console.log(this.flow);
          console.log(this.f.kind.value);
        },
        error: (error: any) => {
          console.log(error);
        },
        complete: () => console.log('Load Flow'),
      });
    }
  }

  public saveFlow(): void {
    const flowIdParam = this.router.snapshot.paramMap.get('id');

    this.flow = { ...this.form.value};
    this.flow.kind = this.f.kind.value == '1' ? 1 : 0;

    if (flowIdParam == null) {
      if (this.form.valid) {
        this.flowService.postFlow(this.flow).subscribe({
          next: () => {},
          error: (error) => {
            console.log(error);
          },
          complete: () => console.log('Save Flow'),
        });
      }
    } else {
      this.flow.id =  +flowIdParam;
      this.flowService.updateFlow(this.flow).subscribe({

        next: () => {},
        error: (error) => {
          console.log(error);
        },
        complete: () => console.log('Update Flow'),
      });
    }
  }
}
