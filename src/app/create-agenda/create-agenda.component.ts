import { AgendaService } from '../agenda.service';
import { Agenda } from '../agenda';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-agenda',
  templateUrl: './create-agenda.component.html',
  styleUrls: ['./create-agenda.component.css']
})
export class CreateAgendaComponent implements OnInit {

  agenda: Agenda = new Agenda();
  submitted = false;

  constructor(private agendaService: AgendaService,
    private router: Router) { }

  ngOnInit() {
  }

  newAgenda(): void {
    this.submitted = false;
    this.agenda = new Agenda();
  }

  save() {
    this.agendaService
    .createAgenda(this.agenda).subscribe(data => {
      console.log(data)
      this.agenda = new Agenda();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/agendas']);
  }
}
