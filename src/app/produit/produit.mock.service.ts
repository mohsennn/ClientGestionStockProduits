import { Produit } from "./../shared/produit";
import { Injectable } from "@angular/core";
/**
 * pourqu,on puisse injecter le services dans les autres composant, c'est l'injection de depnadances,un seul
 * instance est injecté dans les autres
 */
@Injectable()
export class ProduitMockSerivice {
  PRODUITS: Produit[] = [];
  constructor() {
    let p1 = new Produit(1,"livre", 10, 20);
    let p2 = new Produit(2,"Cahier", 30, 40);
    let p3 = new Produit(3,"Stylo", 50, 60);
    this.PRODUITS.push(p1);
    this.PRODUITS.push(p2);
    this.PRODUITS.push(p3);
  }

  public getProduits(): Produit[] {
    return this.PRODUITS;
  }
}
