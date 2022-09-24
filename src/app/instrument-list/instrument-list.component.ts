import { Component, OnInit } from '@angular/core';
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
      stock: true,
      onSale: true,
    },
    {
      img_src: "https://guitar.com/wp-content/uploads/2021/08/first-les-paul@1400x1050-696x522.jpg",
      name: "Les Paul",
      type: "Guitarra",
      price: 300,
      stock: false,
      onSale: false,
    },
    {
      img_src: "https://images.ctfassets.net/m8onsx4mm13s/4mZVDk6cnHFv0baWJAdttE/b6e1faa2dfea7ca4da91626c2ee2defe/__static.gibson.com_product-images_Epiphone_EPIKWM803_Vintage_Sunburst_P_DR100-VS1.jpg",
      name: "Epiphone DR-100",
      type: "Guitarra",
      price: 500,
      stock: true,
      onSale: true,
    },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
