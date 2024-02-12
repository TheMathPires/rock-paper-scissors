import { Component, HostListener, Input, OnInit } from '@angular/core';
import { GameSymbol } from '../../model/game-symbol.type';
import { GameService } from '../../services/game.service';
import { AudioService } from 'src/app/services/audio.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent {

  private _symbol!: GameSymbol;

  constructor(
    private gameService: GameService, 
    private audioService: AudioService
  ) { }

  @Input()
  public set symbol(value: GameSymbol) {
    this._symbol = value;
  }
    
  public get symbol(): GameSymbol {
    return this._symbol;
  }

  @HostListener('click')
  onClick(): void {
    this.audioService.playSound('./assets/sounds/selection-effect.wav');
    timer(500).subscribe(() => this.gameService.pickedSymbol = this._symbol);
  }
}
