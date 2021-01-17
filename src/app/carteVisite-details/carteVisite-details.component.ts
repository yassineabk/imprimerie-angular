import { CarteVisite } from '../carteVisite';
import { Component, OnInit, Input } from '@angular/core';
import { CarteVisiteService } from '../carteVisite.service';
import { CarteVisiteListComponent } from '../carteVisite-list/carteVisite-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carteVisite-details',
  templateUrl: './carteVisite-details.component.html',
  styleUrls: ['./carteVisite-details.component.css']
})
export class CarteVisiteDetailsComponent implements OnInit {

  id: number;
  carteVisite: CarteVisite;

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

  list(){
    this.router.navigate(['carteVisites']);
  }
}
