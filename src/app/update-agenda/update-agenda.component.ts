import { Component, OnInit } from '@angular/core';
import { Agenda } from '../agenda';
import { ActivatedRoute, Router } from '@angular/router';
import { AgendaService } from '../agenda.service';

@Component({
  selector: 'app-update-agenda',
  templateUrl: './update-agenda.component.html',
  styleUrls: ['./update-agenda.component.css']
})
export class UpdateAgendaComponent implements OnInit {

  id: number;
  agenda: Agenda;
  submitted: boolean = false;
   

  constructor(private route: ActivatedRoute,private router: Router,
    private agendaService: AgendaService) { }

  ngOnInit() {
    this.agenda = new Agenda();

    this.id = this.route.snapshot.params['id'];
    
    this.agendaService.getAgenda(this.id)
      .subscribe(data => {
        console.log(data)
        this.agenda = data;
      }, error => console.log(error));
  }

  updateAgenda() {
    this.agendaService.updateAgenda(this.agenda)
      .subscribe(data => {
        console.log(data);
        this.agenda = new Agenda();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {    
    this.submitted = true;
    this.updateAgenda();    
  }

  gotoList() {
    this.router.navigate(['/agendas']);
  }

  
}
