import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { gameinfoInterface } from './gameinfo';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class GameinfoService {

  private _url: string = "https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/game?id=251";

  constructor( private http: HttpClient, private route: ActivatedRoute  ) {

  }

  getParameterFromUrl(): any {
    return this.route.snapshot.paramMap.get('id');
  }

  getData(id:any): Observable<any>{
    const url = `https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/game?id=${id}`;
    return this.http.get(url);

  }


  getGame(): Observable<gameinfoInterface[]>{
    return this.http.get<gameinfoInterface[]>(this._url);
  }




}
