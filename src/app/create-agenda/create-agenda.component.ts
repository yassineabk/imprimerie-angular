import { AgendaService } from '../agenda.service';
import { Agenda } from '../agenda';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CarteVisite} from "../carteVisite";

@Component({
  selector: 'app-create-agenda',
  templateUrl: './create-agenda.component.html',
  styleUrls: ['./create-agenda.component.css']
})
export class CreateAgendaComponent implements OnInit {

  agenda: Agenda = new Agenda();
  submitted = false;
  uploadedFiles: Array<File> = new Array<File>();

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
      console.log(data);
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

  onUpload(event) {
    for (const file of event.files) {
      this.uploadedFiles.push(file);
    }
    console.log(this.uploadedFiles);
    this.agendaService.upload(this.uploadedFiles, this.agenda.reference);
    this.uploadedFiles = [];
    this.agenda = new Agenda();
    this.gotoList();
  }
}
