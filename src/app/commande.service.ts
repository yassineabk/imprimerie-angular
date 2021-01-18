import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commande } from './commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private baseUrl = 'http://localhost:8036/generated/commande';
  private commandes : Commande[] = [];

  constructor(private http: HttpClient) { }

  getCommande(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/id/${id}`);
  }

  createCommande(commande: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/`, commande);
  }

  updateCommande(value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/`, value);
  }

  deleteCommande(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/id/${id}`, { responseType: 'text' });
  }

  getCommandesList(): Commande[] {
    this.http.get<Commande[]>(`${this.baseUrl}/`).subscribe(value => {
      console.log(value[0].produitsVo + "YOOOO");
      this.commandes.push(value[value.length-1]);
    });
    console.log(this.commandes + "YEES");
    return this.commandes;
  }

}
