import { Component, OnInit } from "@angular/core";
import { Produit } from "./../shared/produit";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ProduitService } from "./produit.service";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-produit",
  templateUrl: "./produit.component.html",
  styleUrls: ["./produit.component.css"]
})
export class ProduitComponent implements OnInit {
  produits: Produit[];
  produitForm: FormGroup;
  produit: Produit;
  operation: string = "add";
  selectedProduit: Produit;

  constructor(
    private produitService: ProduitService,
    private fb: FormBuilder,
    private router: ActivatedRoute
  ) {
    this.createForm();
  }

  createForm() {
    this.produitForm = this.fb.group({
      ref: ["", Validators.required],
      quantite: "",
      prixUnitaire: ""
    });
  }
  ngOnInit() {
    // this.produits=this.produitMockSerivice.getProduits();
    this.initProduit();
    this.produits = this.router.snapshot.data.produits;
  }

  loadProduits() {
    this.produitService.getProduits().subscribe(
      data => {
        this.produits = data;
      },
      error => {
        console.log("An error was occured .");
      },
      () => {
        console.log("loading produit was done.");
      }
    );
  }

  addProduit() {
    /**recuperer la valur de  produit form  */

    const p = this.produitForm.value;
    this.produitService.addProduit(p).subscribe(res => {
      this.loadProduits();
      this.initProduit();
    });
  }

  updateProduit() {
    this.produitService.updateProduit(this.selectedProduit).subscribe(res => {
      this.initProduit();
      this.loadProduits();

    });
  }

  //pour initialiser le formulaire
  initProduit() {
    this.selectedProduit = new Produit();
    this.createForm();
  }

  deleteProduit() {
    this.produitService
      .deleteProduit(this.selectedProduit.ref)
      .subscribe(res => {
        this.selectedProduit = new Produit();
        this.loadProduits();
      });
  }
}
