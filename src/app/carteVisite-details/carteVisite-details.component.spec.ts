import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteVisiteDetailsComponent } from 'angular10-springboot-client/src/app/carteVisite-details/carteVisite-details.component';

describe('CarteVisiteDetailsComponent', () => {
  let component: CarteVisiteDetailsComponent;
  let fixture: ComponentFixture<CarteVisiteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteVisiteDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteVisiteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
