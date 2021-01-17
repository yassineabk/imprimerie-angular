import { FlyerService } from '../flyer.service';
import { Flyer } from '../flyer';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-flyer',
  templateUrl: './create-flyer.component.html',
  styleUrls: ['./create-flyer.component.css']
})
export class CreateFlyerComponent implements OnInit {

  flyer: Flyer = new Flyer();
  submitted = false;

  constructor(private flyerService: FlyerService,
    private router: Router) { }

  ngOnInit() {
  }

  newFlyer(): void {
    this.submitted = false;
    this.flyer = new Flyer();
  }

  save() {
    this.flyerService
    .createFlyer(this.flyer).subscribe(data => {
      console.log(data)
      this.flyer = new Flyer();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/flyers']);
  }
}
