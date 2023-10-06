import { Component, Input, OnInit } from '@angular/core';
import { GameSymbol } from '../model/game-symbol.type';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent implements OnInit {

  private _symbol!: GameSymbol;

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  public set symbol(value: GameSymbol) {
    this._symbol = value;
  }
    
  public get symbol(): GameSymbol {
    return this._symbol;
  }
}
