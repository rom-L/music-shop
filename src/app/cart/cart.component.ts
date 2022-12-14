import { Component, OnInit } from '@angular/core';
import { InstrumentCartService } from '../instrument-cart.service';
import { Instrument } from '../instrument-list/Instrument';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList: Instrument[] = [];

  constructor(private cart: InstrumentCartService) {
    //cada vez que el observable cambia, el cartList de CartComponent(esta clase) toma su valor
    cart.cartList.subscribe(observable => {
      this.cartList = observable;
    });
  }

  ngOnInit(): void {
  }


  getTotalPrice(): number{
    let totalPrice = 0;

    if (this.cartList.length > 0) {
      for (const instrument of this.cartList) {
        totalPrice += (instrument.price * instrument.quantity);
      }
    }

    return totalPrice;
  }
}
