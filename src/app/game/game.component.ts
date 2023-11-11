import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { GameSymbol } from '../model/game-symbol.type';
import { GameScore } from '../model/game-score.interface';

const GAME_SCORE: GameScore[] = [
	{ symbol: "paper", beats: "rock" },
	{ symbol: "rock", beats: "scissors" },
	{ symbol: "scissors", beats: "paper" }
];

@Component({
	selector: 'app-game',
	templateUrl: './game.component.html',
	styleUrls: ['./game.component.sass']
})
export class GameComponent implements OnInit {

	private _isChoosing!: boolean;
	private _choosedSymbol!: GameSymbol;
	private _oponentSymbol!: GameSymbol | undefined;

	constructor(private gameService: GameService) {
		this._isChoosing = true;
	}

	get isChoosing(): boolean {
		return this._isChoosing;
	}

	get oponentSymbol(): GameSymbol | undefined {
		return this._oponentSymbol;
	}

	get choosedSymbol(): GameSymbol {
		return this._choosedSymbol;
	}

	ngOnInit(): void {
		this.gameService.onChosingAction.subscribe((symbol: GameSymbol) => {
			this._choosedSymbol = symbol;
			this._isChoosing = false;
			this.setOponentSymbol(symbol);
		});
	}

	private setOponentSymbol(oponentSymbol: GameSymbol): void {
		const symbols = (["rock", "paper", "scissors"] as GameSymbol[]);
		
		setTimeout(() => {
			this._oponentSymbol = symbols.find((s) => s != oponentSymbol);
			this.checkGameResult();
		}, 3000);
	}

	private checkGameResult(): void {
		const oponentSymbol = this.getSymbolFromPlayer(this._oponentSymbol);
		const choosedSymbol = this.getSymbolFromPlayer(this._choosedSymbol);

		if (oponentSymbol?.beats === choosedSymbol?.symbol) {
			
		}
	}

	private getSymbolFromPlayer(player: GameSymbol | undefined): GameScore  | undefined {
		return GAME_SCORE.find((score) => score.symbol === player);
	}
}
