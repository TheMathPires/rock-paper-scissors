import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.sass']
})
export class ScoreComponent implements OnInit {

  private _counter!: number;

  constructor() {
    this._counter = 0;
  }

  ngOnInit(): void {
  }
  
  @Input()
  public set counter(value: number) {
    this._counter = value;
  }
  
  public get counter(): number {
    return this._counter;
  }
  
}
