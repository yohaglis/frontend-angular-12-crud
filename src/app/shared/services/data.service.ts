import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "../interfaces/stores.interface";

@Injectable({
    providedIn: 'root'
})

export class DataService{

  apiURL= 'http://localhost:3000';

  constructor( private _http: HttpClient){
  }

  getStores():Observable<Store[]>{
   return this._http.get<Store[]>(`${this.apiURL}/stores`)
  }

}
