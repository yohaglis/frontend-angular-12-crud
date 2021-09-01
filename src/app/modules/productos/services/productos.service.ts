import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private apiURL = 'http://localhost:3000/productos';

  constructor(private _http: HttpClient) { }

  getProductos():Observable<Producto[]>{
    return this._http.get<Producto[]>(this.apiURL)
  }

}
