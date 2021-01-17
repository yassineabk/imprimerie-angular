import { AgendaDetailsComponent } from '../agenda-details/agenda-details.component';
import { Observable, Subject } from "rxjs";
import { AgendaService } from "../agenda.service";
import { Agenda } from "../agenda";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-agenda-list",
  templateUrl: "./agenda-list.component.html",
  styleUrls: ["./agenda-list.component.css"]
})
export class AgendaListComponent implements OnInit {
  
  agendas: Observable<Agenda[]>;
  agenda: Agenda[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private agendaService: AgendaService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
      "searching" : true,
      "paging"  : true,
      "ordering": true,
      "info"    : true
    };
    this.agendaService.getAgendasList()
    .subscribe(data => {
      this.agenda = (data as any).data;  
      this.dtTrigger.next();
    });

  }

  reloadData() {
    this.agendas = this.agendaService.getAgendasList();
  }

  deleteAgenda(id: number) {
    this.agendaService.deleteAgenda(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  agendaDetails(id: number){
    this.router.navigate(['detailsAgenda', id]);
  }

  updateAgenda(agenda :Agenda){
    this.agendaService.updateAgenda(agenda).subscribe(
      data => {
        console.log(data);
        this.reloadData();
        this.router.navigate(['updateAgenda', agenda.id]);
      },
      error => console.log(error));    
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
