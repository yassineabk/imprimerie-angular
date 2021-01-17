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
      console.log(data)
      this.carteVisite = new CarteVisite();
      this.gotoList();
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
}
