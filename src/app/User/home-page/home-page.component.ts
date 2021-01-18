import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from "rxjs";
import { Produit } from 'src/app/produit';
import { ProduitService} from '../../produit.service'


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  //products: Observable<Produit[]>;
  products: Produit[];
  product: Produit[] = [];

  constructor(private productService: ProduitService,
    private router: Router) { }

  ngOnInit(): void {
    this.products = [];
    this.reloadData();
    

  }

  reloadData() {
    this.products = this.productService.getProduitsList();
    this.products.forEach(value => {
      value.url = 'data:image/jpg;base64,' + value.content;
    });
  }

  productDetails(id: number){
    this.router.navigate(['detailsProduct', id]);
    this.products = [];
  }

  ngOnDestroy(): void {
      this.products = [];
  }

}
