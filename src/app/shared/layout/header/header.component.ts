import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  template:  `<mat-toolbar color="primary">
  <span> Vimak tienda online</span>
  Quantity:<span>{{quantity$ | async | json}}</span>
  Total:<span>{{total$ | async | json}}</span>
  Cart:<span>{{cart$ | async | json}}</span>
</mat-toolbar>`,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  /**
   *Variables de tipo observables con las que podremos acceder a las acciones disponibles en el service.
   *
   * @memberof HeaderComponent
   */
  quantity$ = this._shoppingCartSvc.quantityAction$;
  total$ = this._shoppingCartSvc.totalAction$;
  cart$ = this._shoppingCartSvc.cartAction$;

  constructor(private _shoppingCartSvc: ShoppingCartService) { }

  ngOnInit(): void {
  }

}
