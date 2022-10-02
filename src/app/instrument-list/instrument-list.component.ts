import { Component, OnInit } from '@angular/core';
import { InstrumentCartService } from '../instrument-cart.service';
import { InstrumentDataService } from '../instrument-data.service';
import { Instrument } from './Instrument';

@Component({
  selector: 'app-instrument-list',
  templateUrl: './instrument-list.component.html',
  styleUrls: ['./instrument-list.component.scss']
})
export class InstrumentListComponent implements OnInit {

  instruments: Instrument[] = [];


              //se crea una variable private con la instancia del servicio, si ya existe no se instancia nuevamente, por lo que funciona como "singleton" entre los componentes
  constructor(private cart: InstrumentCartService, private instrumentsDataService: InstrumentDataService) { }


  //ngOnInit se dispara cuando carga la pantalla
  ngOnInit(): void {
    this.instrumentsDataService.getAll().subscribe(instruments => {
      this.instruments = instruments;
    })
  }


  addToCart(instrument: Instrument) {
    if (instrument.quantity > 0) {
      //se llama a la funcion addToCart de la instancia cart con el instrumento como parametro
      this.cart.addToCart(instrument);
      
      //luego de llamar a la funcion de arriba se le resta al stock la cantidad comprada
      instrument.stock -= instrument.quantity;
      instrument.quantity = 0;  //se pasa a 0 para la proxima compra
    }
    
  }
}
