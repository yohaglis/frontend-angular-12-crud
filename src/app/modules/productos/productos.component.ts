import { Component, OnInit } from '@angular/core';
import { ProductosService } from './services/productos.service';
import { tap } from 'rxjs/operators';
import { Producto } from './interfaces/producto.interface';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'app-productos',
  template: ` <div class="productos">
        <app-producto
          (addToCartClick)="addToCart($event)"
          [producto]="producto"
          *ngFor="let producto of productos"
        ></app-producto>
</div>`,
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  productos!: Producto[];

  constructor(
    private _productosSvc: ProductosService,
    private _shoppingCartSvc: ShoppingCartService
  ) {}
  /**
   *De esta manera se recupera la data de un servicio
   *
   * @memberof ProductosComponent
   */
  ngOnInit(): void {
    this._productosSvc
      .getProductos()
      .pipe(tap((response: Producto[]) => (this.productos = response)))
      .subscribe();
  }
  /**
   *Usamos éste método para escuchar un evento emiter desde un hijo que nos emite una data o respuesta por el decorador Output
   *
   * @param {Producto} producto
   * @memberof ProductosComponent
   */
  addToCart(producto: Producto): void {
    this._shoppingCartSvc.updateCart(producto);
  }
}
