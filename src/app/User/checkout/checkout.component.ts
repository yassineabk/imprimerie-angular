import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Commande } from 'src/app/commande';
import { CommandeService } from 'src/app/commande.service';
import { User } from 'src/app/user';
import { ProductPageComponent } from '../product-page/product-page.component';
import { UserServiceService } from '../../user-service.service'
import { Produit } from 'src/app/produit';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  id : number;
  commande : Commande = new Commande();
  commandes: Commande[];
  user : User;

  constructor(private route: ActivatedRoute,private commandeService:CommandeService,
    private router: Router,private userService : UserServiceService, private productComp :ProductPageComponent) { }

  ngOnInit(): void {
    //this.id = this.route.snapshot.params['id'];
    this.commandes = this.commandeService.getCommandesList();
    console.log("THIS IS IT " + this.commandes);
  }
  onSubmit(){
    //this.save();
    this.router.navigate(['/home']);
  }
  save() {
    this.commandeService
    .createCommande(this.commande).subscribe(data => {
      console.log(data)
      this.commande = new Commande();
      this.goHome();
    }, 
    error => console.log(error));
  }

  goHome() {
    this.router.navigate(['/home']);
  }

}
