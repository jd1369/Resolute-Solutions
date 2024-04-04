import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  apiUrl="http://localhost:3000/items";
  constructor(private http:HttpClient) { }

  addProduct(item:any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, item);
 }

 editProduct(item: any, updatedItem: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/${item.id}`, updatedItem);
}

 deleteProduct(id:any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
 }

 getProduct() {
  console.log(this.apiUrl)
    return this.http.get(this.apiUrl);
    
 }

 getProductbyId(id: number): Observable<any> {
  return this.http.get(`${this.apiUrl}/posts/${id}`);
}
}
