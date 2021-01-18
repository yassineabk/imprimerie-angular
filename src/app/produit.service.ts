import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from './produit';
@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  products : Produit[] = [];
  private baseUrl = 'http://localhost:8036/generated/produit';

  constructor(private http: HttpClient) { }

  getProduit(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/id/${id}`);
  }

  createProduit(carteVisite: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/`, carteVisite);
  }

  updateProduit(value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/`, value);
  }

  deleteProduit(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/id/${id}`, { responseType: 'text' });
  }

  getProduitsList(): Produit[] {
    //return this.http.get(`${this.baseUrl}/`);
    
    this.http.get<Produit[]>(`${this.baseUrl}/`).subscribe(value =>{
      value.forEach(v1 => {
        v1.url = 'data:image/jpg;base64,' + v1.content;
        this.products.push(v1);



      });
    });

    return this.products;
  }

}
