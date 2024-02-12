import { Injectable } from "@angular/core";

@Injectable()
export class AudioService {
    private _audio: HTMLAudioElement;

    constructor() {
        this._audio = new Audio();
    }

    playSound(audioFilePath: string): void {
        this._audio.src = audioFilePath;
        this._audio.load();
        this._audio.play();
    }
}