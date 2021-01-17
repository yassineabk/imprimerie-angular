import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteVisiteListComponent } from 'angular10-springboot-client/src/app/carteVisite-list/carteVisite-list.component';

describe('CarteVisiteListComponent', () => {
  let component: CarteVisiteListComponent;
  let fixture: ComponentFixture<CarteVisiteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteVisiteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteVisiteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
