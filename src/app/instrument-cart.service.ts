import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Instrument } from './instrument-list/Instrument';

@Injectable({
  providedIn: 'root'
})
export class InstrumentCartService {

  //se declara la variable que queremos observar en private
  private _cartList: Instrument[] = [];
  //se crea un BehaviorSubject (objeto observable), basicamente se va a notificar cada vez que cambie
  cartList: BehaviorSubject<Instrument[]> = new BehaviorSubject(this._cartList);


  constructor() { }


  addToCart(instrument: Instrument) {
    //se busca en el arreglo un objeto con el mismo name, si existe, se retorna a la variable item
    let item: Instrument = this._cartList.find((v1) => v1.name == instrument.name)!;

    //si el item no existe en el array,
    if(!item) {
      //se agrega al arreglo una copia del objeto, no su instancia
      this._cartList.push({...instrument});
    } else {
      //cada vez que se llame esta funcion al comprar, le suma al quantity del item lo que solicito el usuario
      item.quantity += instrument.quantity;
    }

    //le decimos al BehaviorSubject que notifique un cambio en la variable privada _cartList, ya que con la funcion addToCart cambia ||equivale a eventEmitter||
    this.cartList.next(this._cartList);
  }
}
