import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCarteVisiteComponent } from './create-carteVisite.component';

describe('CreateCarteVisiteComponent', () => {
  let component: CreateCarteVisiteComponent;
  let fixture: ComponentFixture<CreateCarteVisiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCarteVisiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCarteVisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
