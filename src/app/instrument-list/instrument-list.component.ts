import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instrument-list',
  templateUrl: './instrument-list.component.html',
  styleUrls: ['./instrument-list.component.scss']
})
export class InstrumentListComponent implements OnInit {

  guitar = {
    img_src: "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/076/608/products/unnamed-17-a10749eb60f09b884816233374720144-640-0.jpg",
    name: "Fender Stratocaster",
    type: "Guitarra",
    price: 500,
    stock: 99,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
