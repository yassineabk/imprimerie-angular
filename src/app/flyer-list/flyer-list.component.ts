import { FlyerDetailsComponent } from '../flyer-details/flyer-details.component';
import { Observable } from "rxjs";
import { FlyerService } from "../flyer.service";
import { Flyer } from "../flyer";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-flyer-list",
  templateUrl: "./flyer-list.component.html",
  styleUrls: ["./flyer-list.component.css"]
})
export class FlyerListComponent implements OnInit {
  flyers: Observable<Flyer[]>;

  constructor(private flyerService: FlyerService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.flyers = this.flyerService.getFlyersList();
  }

  deleteFlyer(id: number) {
    this.flyerService.deleteFlyer(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  flyerDetails(id: number){
    this.router.navigate(['details', id]);
  }
}
