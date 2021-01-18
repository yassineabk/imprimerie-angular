import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from "rxjs";
import { Panier } from 'src/app/panier';
import { Produit } from 'src/app/produit';
import { ProduitService} from '../../produit.service'
import { PanierService } from '../../panier.service'
import { Commande } from 'src/app/commande';
import { CommandeService } from 'src/app/commande.service';
@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  id: number;
  qte :number = 10;
  pr : number;
  product: Produit;
  commande : Commande = new Commande();
  commande2 : Commande = new Commande();
  productList : Produit[] = [];

  constructor(private route: ActivatedRoute,private commandeService: CommandeService,
    private productService: ProduitService,private router: Router) { }

    ngOnInit(): void {
      //this.panier.listProducts = [];
      this.id = this.route.snapshot.params['id'];

      //this.qte = this.route.snapshot.params['qte'];

      this.productService.getProduit(this.id)
      .subscribe(data => {
        console.log(data)
        this.product = data;
        this.product.url = 'data:image/jpg;base64,' + this.product.content;
      }, error => console.log(error));
    }

    sendCommande(Qte : number){
      this.pr = this.product.prixUnitaire;
      this.commande = new Commande();
      this.qte = Qte;
      //this.commande.prix_total = this.qte*this.product.prixUnitaire;
      this.commande.prixTotal = this.commande.prixTotal+ (this.qte * this.pr);
      console.log(this.pr);
      this.commande.dateAchat = new Date();
      this.commande.etat = "en attente";
      this.commande.reference = "REF002021-"+this.commande.dateAchat;
      this.commande.produitsVo.push(this.product);
      console.log(this.commande);
      this.commande2.produitsVo = this.commande.produitsVo;
      console.log(this.commande2);
      
      /*
      this.commandeService.createCommande(this.commande).subscribe(data => {
        console.log(data);
      },
      error => console.log(error));
      */
      

      this.router.navigate(['checkout']);
    }
}

