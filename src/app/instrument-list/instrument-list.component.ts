import { Component, OnInit } from '@angular/core';
import { InstrumentCartService } from '../instrument-cart.service';
import { Instrument } from './Instrument';

@Component({
  selector: 'app-instrument-list',
  templateUrl: './instrument-list.component.html',
  styleUrls: ['./instrument-list.component.scss']
})
export class InstrumentListComponent implements OnInit {

  instruments: Instrument[] = [
    {
      img_src: "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/076/608/products/unnamed-17-a10749eb60f09b884816233374720144-640-0.jpg",
      name: "Fender Stratocaster",
      type: "Guitarra",
      price: 500,
      stock: 7,
      onSale: true,
      quantity: 0,
    },
    {
      img_src: "https://guitar.com/wp-content/uploads/2021/08/first-les-paul@1400x1050-696x522.jpg",
      name: "Les Paul",
      type: "Guitarra",
      price: 300,
      stock: 0,
      onSale: false,
      quantity: 0,
    },
    {
      img_src: "https://images.ctfassets.net/m8onsx4mm13s/4mZVDk6cnHFv0baWJAdttE/b6e1faa2dfea7ca4da91626c2ee2defe/__static.gibson.com_product-images_Epiphone_EPIKWM803_Vintage_Sunburst_P_DR100-VS1.jpg",
      name: "Epiphone DR-100",
      type: "Guitarra",
      price: 500,
      stock: 14,
      onSale: true,
      quantity: 0,
    },
    {
      img_src: "https://cdn.shopify.com/s/files/1/1387/1235/products/IMG_5659_2_1024x1024.jpg?v=1571401661",
      name: "Fender Precision Bass",
      type: "Bajo",
      price: 500,
      stock: 0,
      onSale: false,
      quantity: 0,
    },
  ];


              //se crea una variable private con la instancia del servicio, si ya existe no se instancia nuevamente, por lo que funciona como "singleton" entre los componentes
  constructor(private cart: InstrumentCartService) { }

  ngOnInit(): void {
  }


  addToCart(instrument: Instrument) {
    if (instrument.stock > 0) {
      //se llama a la funcion addToCart de la instancia cart con el instrumento como parametro
      this.cart.addToCart(instrument);
      
      //luego de llamar a la funcion de arriba se le resta al stock la cantidad comprada
      instrument.stock -= instrument.quantity;
      instrument.quantity = 0;  //se pasa a 0 para la proxima compra
    }
    
  }
}
