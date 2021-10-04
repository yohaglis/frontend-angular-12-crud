import {Component} from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component(
  {
    selector: 'app-cart',
    template:`
    <ng-container *ngIf="{ total: total$ | async, quantity: quantity$ | async } as dataCart">
      <ng-container *ngIf="dataCart.total">
        <mat-icon  matBadge="{{dataCart.quantity}}" matBadgeColor="warn">shopping_cart</mat-icon>
        {{dataCart.total | currency}}
      </ng-container>
    </ng-container> `
  }
)
export class cartComponent{

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
