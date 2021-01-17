import { Component, OnInit } from '@angular/core';
import { CarteVisite } from '../carteVisite';
import { ActivatedRoute, Router } from '@angular/router';
import { CarteVisiteService } from '../carteVisite.service';

@Component({
  selector: 'app-update-carteVisite',
  templateUrl: './update-carteVisite.component.html',
  styleUrls: ['./update-carteVisite.component.css']
})
export class UpdateCarteVisiteComponent implements OnInit {

  id: number;
  carteVisite: CarteVisite;
  submitted: boolean = false;
   

  constructor(private route: ActivatedRoute,private router: Router,
    private carteVisiteService: CarteVisiteService) { }

  ngOnInit() {
    this.carteVisite = new CarteVisite();

    this.id = this.route.snapshot.params['id'];
    
    this.carteVisiteService.getCarteVisite(this.id)
      .subscribe(data => {
        console.log(data)
        this.carteVisite = data;
      }, error => console.log(error));
  }

  updateCarteVisite() {
    this.carteVisiteService.updateCarteVisite(this.carteVisite)
      .subscribe(data => {
        console.log(data);
        this.carteVisite = new CarteVisite();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {    
    this.submitted = true;
    this.updateCarteVisite();    
  }

  gotoList() {
    this.router.navigate(['/carteVisites']);
  }
}
