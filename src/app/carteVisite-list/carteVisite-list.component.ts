import { CarteVisiteDetailsComponent } from '../carteVisite-details/carteVisite-details.component';
import { Observable, Subject } from "rxjs";
import { CarteVisiteService } from "../carteVisite.service";
import { CarteVisite } from "../carteVisite";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';


@Component({
  selector: "app-carteVisite-list",
  templateUrl: "./carteVisite-list.component.html",
  styleUrls: ["./carteVisite-list.component.css"]
})
export class CarteVisiteListComponent implements OnInit {
  carteV : CarteVisite[] = [];
  carteVisites: Observable<CarteVisite[]>;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private carteVisiteService: CarteVisiteService,
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
    this.carteVisiteService.getCarteVisitesList()
      .subscribe(data => {
        this.carteV = (data as any).data;  
        this.dtTrigger.next();
      });
  }

  reloadData() {
    this.carteVisites = this.carteVisiteService.getCarteVisitesList();
  }

  deleteCarteVisite(id: number) {
    this.carteVisiteService.deleteCarteVisite(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  carteVisiteDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateCarteVisite(carteVisite :CarteVisite){
    this.carteVisiteService.updateCarteVisite(carteVisite).subscribe(
      data => {
        console.log(data);
        this.reloadData();
        this.router.navigate(['update', carteVisite.id]);
      },
      error => console.log(error));    
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  
}
