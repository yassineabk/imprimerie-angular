import { CarteVisiteService } from '../carteVisite.service';
import { CarteVisite } from '../carteVisite';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-carteVisite',
  templateUrl: './create-carteVisite.component.html',
  styleUrls: ['./create-carteVisite.component.css']
})
export class CreateCarteVisiteComponent implements OnInit {

  carteVisite: CarteVisite = new CarteVisite();
  submitted = false;
  uploadedFiles: Array<File> = new Array<File>();

  constructor(private carteVisiteService: CarteVisiteService,
    private router: Router) { }

  ngOnInit() {
  }

  newCarteVisite(): void {
    this.submitted = false;
    this.carteVisite = new CarteVisite();
  }

  save() {
    this.carteVisiteService
    .createCarteVisite(this.carteVisite).subscribe(data => {
      console.log(data);
    },
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/carteVisites']);
  }

  onUpload(event) {
    for (const file of event.files) {
      this.uploadedFiles.push(file);
    }
    console.log(this.uploadedFiles);
    this.carteVisiteService.upload(this.uploadedFiles, this.carteVisite.reference);
    this.uploadedFiles = [];
    this.carteVisite = new CarteVisite();
    this.gotoList();
  }
}
