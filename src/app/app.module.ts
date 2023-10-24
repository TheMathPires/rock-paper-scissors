import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScoreComponent } from './score/score.component';
import { ButtonComponent } from './button/button.component';
import { GameComponent } from './game/game.component';
import { RulesComponent } from './rules/rules.component';
import { GameService } from './services/game.service';

@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent,
    ButtonComponent,
    GameComponent,
    RulesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
