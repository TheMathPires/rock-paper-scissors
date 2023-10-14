import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-rules',
	templateUrl: './rules.component.html',
	styleUrls: ['./rules.component.sass']
})
export class RulesComponent {

	private _isOpen!: boolean;

	constructor() {
		this._isOpen = false;
	}

	get isOpen(): boolean {
		return this._isOpen;
	}

	openDialog(): void {
		this._isOpen = true;
	}
	
}
