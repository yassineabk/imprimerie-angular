import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaDetailsComponent } from 'angular10-springboot-client/src/app/agenda-details/agenda-details.component';

describe('AgendaDetailsComponent', () => {
  let component: AgendaDetailsComponent;
  let fixture: ComponentFixture<AgendaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
