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

	private _gamePhase!: number;
	private _choosedSymbol!: GameSymbol;
	private _opponentSymbol!: GameSymbol | undefined;
	private _opponentWin!: boolean;
	private _result!: 'win' | 'lose';

	constructor(private gameService: GameService) {
		this._gamePhase = 0;
	}

	get gamePhase(): number {
		return this._gamePhase;
	}

	get opponentSymbol(): GameSymbol | undefined {
		return this._opponentSymbol;
	}

	get choosedSymbol(): GameSymbol {
		return this._choosedSymbol;
	}

	get opoonentWin(): boolean {
		return this._opponentWin;
	}

	get result(): 'win' | 'lose' {
		return this._result;
	}

	ngOnInit(): void {
		this.gameService.onChosingAction.subscribe((symbol: GameSymbol) => {
			this._choosedSymbol = symbol;
			this._gamePhase = 1;
			this.setOponentSymbol(symbol);
		});
	}

	restartGame(): void {
		this._gamePhase = 0;
	}

	private setOponentSymbol(oponentSymbol: GameSymbol): void {
		const symbols = (["rock", "paper", "scissors"] as GameSymbol[]);
		
		setTimeout(() => {
			this._opponentSymbol = symbols.find((s) => s != oponentSymbol);
			this.checkGameResult();
		}, 2000);
	}

	private checkGameResult(): void {
		const oponentSymbol = this.getSymbolFromPlayer(this._opponentSymbol);
		const choosedSymbol = this.getSymbolFromPlayer(this._choosedSymbol);

		if (oponentSymbol?.beats === choosedSymbol?.symbol) {
			this._opponentWin = true;
			this._result = 'lose';
		} else {
			this._opponentWin = false;
			this._result = 'win';
		}

		this._gamePhase = 2;
	}

	private getSymbolFromPlayer(player: GameSymbol | undefined): GameScore  | undefined {
		return GAME_SCORE.find((score) => score.symbol === player);
	}
}
