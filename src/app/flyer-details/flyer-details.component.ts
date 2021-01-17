import { Flyer } from '../flyer';
import { Component, OnInit, Input } from '@angular/core';
import { FlyerService } from '../flyer.service';
import { FlyerListComponent } from '../flyer-list/flyer-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flyer-details',
  templateUrl: './flyer-details.component.html',
  styleUrls: ['./flyer-details.component.css']
})
export class FlyerDetailsComponent implements OnInit {

  id: number;
  flyer: Flyer;

  constructor(private route: ActivatedRoute,private router: Router,
    private flyerService: FlyerService) { }

  ngOnInit() {
    this.flyer = new Flyer();

    this.id = this.route.snapshot.params['id'];
    
    this.flyerService.getFlyer(this.id)
      .subscribe(data => {
        console.log(data)
        this.flyer = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['flyers']);
  }
}
