import { Component, OnInit } from '@angular/core';
import { GameinfoService } from '../gameinfo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.css']
})
export class GameInfoComponent implements OnInit{

  public gameId: any;
  public game : any;

  constructor( private route: ActivatedRoute, private _gameinfoService: GameinfoService, private router: Router ){

  }

  ngOnInit() {
    let id = parseInt( this.route.snapshot.paramMap.get('id')! );
    this.gameId = id;

    this._gameinfoService.getData(id).subscribe( data => this.game = data );

  }

}
