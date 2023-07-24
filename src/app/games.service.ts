import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { gamesInterface } from './games';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private inputValue: string = '';

  private _url: string = "https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games" + this.inputValue;

  constructor( private http: HttpClient ) { }

  getGames(): Observable<gamesInterface[]>{
    return this.http.get<gamesInterface[]>(this._url);
  }

  setInputValue(value: string) {
    this.inputValue = value;
  }

  getInputValue() {
    return this.inputValue;
  }


}
