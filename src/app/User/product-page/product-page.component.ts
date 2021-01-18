import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from "rxjs";
import { Panier } from 'src/app/panier';
import { Produit } from 'src/app/produit';
import { ProduitService} from '../../produit.service'
import { PanierService } from '../../panier.service'
import { Commande } from 'src/app/commande';
import { CommandeService } from 'src/app/commande.service';

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
      this.commande.prix_total = this.qte*this.pr;
      console.log(this.pr);
      this.commande.date_achat = new Date();
      this.commande.etat = "en attente";
      this.commande.reference = "REF002021-"+this.commande.date_achat;
      console.log(this.commande);
      this.commandeService.createCommande(this.commande).subscribe(data => {
        console.log(data);
      },
      error => console.log(error));
      
      //this.router.navigate(['home']);
    }
}

