import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Observable } from "rxjs";
import { Producto} from "src/app/modules/productos/interfaces/producto.interface";

@Injectable(
  {
    providedIn: "root"
  }
)

export class ShoppingCartService{

  productos: Producto[] = [];

/**
 *
 * Se inicializan algunas variables privadas con un tipo de Observable que nos va a permitir setear información requerida.
 * @private
 * @memberof ShoppingCartService
 */
  private cartSubject = new Subject<Producto[]>();
  private totalSubject = new Subject<number>();
  private quantitySubject = new Subject<number>();


/**
 *Métodos para acceder a las variables privadas declaradas anteriormente.Por Convención los nombres de métodos o variables que estan siendo Observadas deben de terminar con un signo de dolar $
 *
 * @readonly
 * @type {Observable<Producto[]>}
 * @memberof ShoppingCartService
 */
  get cartAction$():Observable<Producto[]>{
    return this.cartSubject.asObservable();
  }
  get totalAction$():Observable<number>{
    return this.totalSubject.asObservable();
  }
  get quantityAction$():Observable<number>{
    return this.quantitySubject.asObservable();
  }
  /**
 *Con este metodo publico podremos acceder a los metodos privados que realizan las acciones a la data.
 *
 * @param {Producto} producto
 * @memberof ShoppingCartService
 */
updateCart(producto: Producto): void{
  debugger
  this.addToCart(producto);
  this.quantityProductos();
  this.calcTotalProductos();
}

  /**
   *Métodos privados para realizar las aciones necesarias que provocan cambios o acciones en mi data.
   *
   * @private
   * @param {Producto} producto
   * @memberof ShoppingCartService
   */
  private addToCart(producto: Producto): void{
    this.productos.push(producto);
    this.cartSubject.next(this.productos);
  }

  private calcTotalProductos(): void{
    const total = this.productos.reduce( (acc, prod) => acc += prod.price, 0);
    this.totalSubject.next(total);
  }
  private quantityProductos(): void{
    const quantity = this.productos.length;
    this.quantitySubject.next(quantity);
  }


}
