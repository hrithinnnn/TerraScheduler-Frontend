import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffHoursComponent } from './off-hours.component';

describe('OffHoursComponent', () => {
  let component: OffHoursComponent;
  let fixture: ComponentFixture<OffHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffHoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
