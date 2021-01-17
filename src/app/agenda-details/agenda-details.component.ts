import { Agenda } from '../agenda';
import { Component, OnInit, Input } from '@angular/core';
import { AgendaService } from '../agenda.service';
import { AgendaListComponent } from '../agenda-list/agenda-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agenda-details',
  templateUrl: './agenda-details.component.html',
  styleUrls: ['./agenda-details.component.css']
})
export class AgendaDetailsComponent implements OnInit {

  id: number;
  agenda: Agenda;

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

  list(){
    this.router.navigate(['agendas']);
  }
}
