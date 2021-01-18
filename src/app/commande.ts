import {Produit} from "./produit";

export class Commande {

    id : number;
    dateAchat : Date;
    etat : string;
    prixTotal : number;
    reference : string;
    user : number;
    produitsVo: Produit[] = [];

}
