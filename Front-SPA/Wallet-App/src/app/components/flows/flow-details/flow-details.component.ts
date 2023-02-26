import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-flow-details',
  templateUrl: './flow-details.component.html',
  styleUrls: ['./flow-details.component.scss']
})
export class FlowDetailsComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  get f(): any{
    return this.form.controls;
  }

  ngOnInit(): void {
    this.validation();
  }



  public validation(): void {
    this.form = this.fb.group({
      name:   ['', [Validators.required, Validators.minLength(4)]]
    });
  }
}
