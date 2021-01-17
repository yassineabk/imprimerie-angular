import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyerDetailsComponent } from 'angular10-springboot-client/src/app/flyer-details/flyer-details.component';

describe('FlyerDetailsComponent', () => {
  let component: FlyerDetailsComponent;
  let fixture: ComponentFixture<FlyerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlyerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
