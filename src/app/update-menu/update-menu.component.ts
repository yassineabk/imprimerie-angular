import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-update-menu',
  templateUrl: './update-menu.component.html',
  styleUrls: ['./update-menu.component.css']
})
export class UpdateMenuComponent implements OnInit {

  id: number;
  menu: Menu;
  submitted: boolean = false;
   

  constructor(private route: ActivatedRoute,private router: Router,
    private menuService: MenuService) { }

  ngOnInit() {
    this.menu = new Menu();

    this.id = this.route.snapshot.params['id'];
    
    this.menuService.getMenu(this.id)
      .subscribe(data => {
        console.log(data)
        this.menu = data;
      }, error => console.log(error));
  }

  updateMenu() {
    this.menuService.updateMenu(this.id, this.menu)
      .subscribe(data => {
        console.log(data);
        this.menu = new Menu();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {    
    this.submitted = true;
    this.updateMenu();    
  }

  gotoList() {
    this.router.navigate(['/menus']);
  }
}
