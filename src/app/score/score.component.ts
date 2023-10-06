import { Component, OnInit } from '@angular/core';

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
  
  public set counter(value: number) {
    this._counter = value;
  }
  
  public get value(): number {
    return this._counter;
  }
  
}
