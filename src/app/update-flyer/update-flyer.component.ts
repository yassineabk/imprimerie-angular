import { Component, OnInit } from '@angular/core';
import { Flyer } from '../flyer';
import { ActivatedRoute, Router } from '@angular/router';
import { FlyerService } from '../flyer.service';

@Component({
  selector: 'app-update-flyer',
  templateUrl: './update-flyer.component.html',
  styleUrls: ['./update-flyer.component.css']
})
export class UpdateFlyerComponent implements OnInit {

  id: number;
  flyer: Flyer;
  submitted: boolean = false;
   

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

  updateFlyer() {
    this.flyerService.updateFlyer(this.id, this.flyer)
      .subscribe(data => {
        console.log(data);
        this.flyer = new Flyer();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {    
    this.submitted = true;
    this.updateFlyer();    
  }

  gotoList() {
    this.router.navigate(['/flyers']);
  }
}
