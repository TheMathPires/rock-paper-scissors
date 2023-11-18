import { Injectable } from "@angular/core";
import { GameSymbol } from "../model/game-symbol.type";
import { Observable, Subject } from "rxjs";

@Injectable()
export class GameService {

    private _pickedSymbol!: GameSymbol;
    private _onChoosingAction!: Subject<GameSymbol>;
    private _gameScore!: number;

    constructor() {
        this._onChoosingAction = new Subject<GameSymbol>();
        this._gameScore = 0;
    }

    set pickedSymbol(value: GameSymbol) {
        this._pickedSymbol = value;
        this._onChoosingAction.next(value);
    }

    get pickedSymbol(): GameSymbol {
        return this._pickedSymbol;
    }

    get onChosingAction(): Observable<GameSymbol> {
        return this._onChoosingAction.asObservable();
    }

    set gameScore(value: number) {
        this._gameScore = value;
    }

    get gameScore(): number {
        return this._gameScore;
    }
}