import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GamesService } from '../games.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  inputValue: string = '';
  public games : any[] = [];
  @Output() valueSent = new EventEmitter<string>();

  constructor( private _gamesService: GamesService, private router: Router ){  }

  ngOnInit() {

    this._gamesService.getGames().subscribe(data => this.games = data);
    
  }

  getMoreInfo(game:any){
    this.router.navigate(['/game-info', game.id]);
  }

  sendValue() {
    this.valueSent.emit('true');
  }

  updateInputValue() {
    this._gamesService.setInputValue(this.inputValue);
  }

  readInputValue() {
    const inputValue = this._gamesService.getInputValue();
  }

}
