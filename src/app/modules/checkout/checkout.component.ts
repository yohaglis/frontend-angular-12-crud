import { Component, OnInit } from '@angular/core';

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

  stores = [
    {
      "id": 1,
      "name": "Park Row en Beekman St",
      "address": "38 Park Row",
      "city": "Nueva York",
      "openingHours": "10:00 - 14:00 y 17:00 - 20:30"
    },
    {
      "id": 2,
      "name": "Tienda Alcalá",
      "address": "Calle de Alcalá, 21",
      "city": "Madrid",
      "openingHours": "10:00 - 14:00 y 17:00 - 20:30"
    },
    {
      "id": 3,
      "name": "Chambers y West Broadway",
      "address": "125 Chambers Street",
      "city": "Nueva York",
      "openingHours": "10:00 - 14:00 y 17:00 - 20:30"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  onPickupOrDelivery(value: boolean): void{
    console.log(value)
  }

}
