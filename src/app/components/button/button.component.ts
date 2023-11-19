import { Component, HostListener, Input, OnInit } from '@angular/core';
import { GameSymbol } from '../../model/game-symbol.type';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent implements OnInit {

  private _symbol!: GameSymbol;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }

  @Input()
  public set symbol(value: GameSymbol) {
    this._symbol = value;
  }
    
  public get symbol(): GameSymbol {
    return this._symbol;
  }

  @HostListener('click')
  onClick(): void {
    this.gameService.pickedSymbol = this._symbol;
  }
}
