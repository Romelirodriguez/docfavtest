import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameInfoComponent } from './game-info/game-info.component';

const routes: Routes = [
  { path: 'game-info/:id', component: GameInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
