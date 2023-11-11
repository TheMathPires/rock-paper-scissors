import { Injectable } from "@angular/core";
import { GameSymbol } from "../model/game-symbol.type";
import { Observable, Subject } from "rxjs";

@Injectable()
export class GameService {

    private _pickedSymbol!: GameSymbol;
    private _onChoosingAction!: Subject<GameSymbol>;

    constructor() {
        this._onChoosingAction = new Subject<GameSymbol>();
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
}