import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_URLS } from "./../api.url.config";
import { HttpClient } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { Produit } from "./../shared/produit";

@Injectable({
  providedIn: "root"
})
export class ProduitService {
  constructor(private httpClient: HttpClient) {}

  getProduits(): Observable<any> {
    return this.httpClient.get(API_URLS.PRODUIT_URL);
  }

  addProduit(produit: Produit): Observable<any> {
    return this.httpClient.post<any>(API_URLS.PRODUIT_URL_ADD, produit);
  }

  updateProduit(produit: Produit): Observable<any> {
    return this.httpClient.put<any>(API_URLS.PRODUIT_URL, produit);
  }

  deleteProduit(id: number): Observable<any> {
     return this.httpClient.delete<any>(API_URLS.PRODUIT_URL + `/${id}`);
  }
}
