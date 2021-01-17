import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyerListComponent } from 'angular10-springboot-client/src/app/flyer-list/flyer-list.component';

describe('FlyerListComponent', () => {
  let component: FlyerListComponent;
  let fixture: ComponentFixture<FlyerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlyerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
