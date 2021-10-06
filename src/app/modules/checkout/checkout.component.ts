import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { tap } from 'rxjs/operators';
import { Store } from 'src/app/shared/interfaces/stores.interface';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  model = {
    name: '',
    mail:'',
    store: '',
    shippingAddress: '',
    city:''
  }

  stores: Store[] = [];

  constructor(private _dataSvc: DataService) { }

  ngOnInit(): void {
    this.getStores();
  }

  onPickupOrDelivery(value: boolean): void{
    console.log(value)
  }

  onSubmit(): void{
    console.log('Guardar');
  }

  getStores(): void{
    this._dataSvc.getStores()
    .pipe(tap((stores: Store[]) => this.stores = stores)) // Es igual que: tap(res => this.stores = res)
    .subscribe()
  }

}
