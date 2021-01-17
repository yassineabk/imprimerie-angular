import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFlyerComponent } from 'angular10-springboot-client/src/app/update-flyer/update-flyer.component';

describe('UpdateFlyerComponent', () => {
  let component: UpdateFlyerComponent;
  let fixture: ComponentFixture<UpdateFlyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFlyerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFlyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
