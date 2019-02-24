import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-dilivery-costs',
  templateUrl: './dilivery-costs.component.html'
})
export class DiliveryCostsComponent implements OnInit {

  constructor() { }

  @Input() delivery: number;
  @Input() itemsValue: number;

  ngOnInit() {
  }

  total(): number {
    return this.delivery + this.itemsValue;
  }

}
