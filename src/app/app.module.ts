import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameService } from './services/game.service';
import { ButtonComponent } from './components/button/button.component';
import { GameComponent } from './components/game/game.component';
import { RulesComponent } from './components/rules/rules.component';
import { ScoreComponent } from './components/score/score.component';
import { AudioService } from './services/audio.service';

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
    GameService,
    AudioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
