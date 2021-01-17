import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCarteVisiteComponent } from 'angular10-springboot-client/src/app/update-carteVisite/update-carteVisite.component';

describe('UpdateCarteVisiteComponent', () => {
  let component: UpdateCarteVisiteComponent;
  let fixture: ComponentFixture<UpdateCarteVisiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCarteVisiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCarteVisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
