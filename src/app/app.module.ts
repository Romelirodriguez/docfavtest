import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { GamesService } from './games.service';
import { GameInfoComponent } from './game-info/game-info.component';
import { GameinfoService } from './gameinfo.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    GameInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GamesService, GameinfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
