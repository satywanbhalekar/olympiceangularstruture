import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayDatabindingComponent } from './two-way-databinding.component';

describe('TwoWayDatabindingComponent', () => {
  let component: TwoWayDatabindingComponent;
  let fixture: ComponentFixture<TwoWayDatabindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwoWayDatabindingComponent]
    });
    fixture = TestBed.createComponent(TwoWayDatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
