import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowCenterComponent } from './flow-center.component';

describe('FlowCenterComponent', () => {
  let component: FlowCenterComponent;
  let fixture: ComponentFixture<FlowCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowCenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
