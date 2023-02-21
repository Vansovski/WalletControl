import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowCentersComponent } from './flow-centers.component';

describe('FlowCentersComponent', () => {
  let component: FlowCentersComponent;
  let fixture: ComponentFixture<FlowCentersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowCentersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
