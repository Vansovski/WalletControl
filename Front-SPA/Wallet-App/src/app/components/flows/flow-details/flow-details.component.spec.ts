import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowDetailsComponent } from './flow-details.component';

describe('FlowDetailsComponent', () => {
  let component: FlowDetailsComponent;
  let fixture: ComponentFixture<FlowDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
