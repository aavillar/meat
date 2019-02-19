import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  constructor() { }
@Output() rated = new EventEmitter<number>();

  rates: number[] = [1, 2, 3, 4, 5];
  rate = 0;
  previusRating: number;

  ngOnInit() {
  }

  setRate(r) {
    this.rate = r;
    this.previusRating = undefined;
    this.rated.emit(this.rate);
  }

  setTemporaryRating(r) {
    if (this.previusRating === undefined) {
      this.previusRating = this.rate;
    }
    this.rate = r;
  }

  clearRating() {
    if (this.previusRating !== undefined) {
      this.rate = this.previusRating;
      this.previusRating = undefined;
    }
  }
}
