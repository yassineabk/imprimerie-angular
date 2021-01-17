import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFlyerComponent } from './create-flyer.component';

describe('CreateFlyerComponent', () => {
  let component: CreateFlyerComponent;
  let fixture: ComponentFixture<CreateFlyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFlyerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFlyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
