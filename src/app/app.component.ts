import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show:boolean = true;
  title = 'Test FrontEnd';
  receivedValue: string = '';

  showAllGames() {
    this.show = false;
  }
  hideAllGames(){
    this.show = false;
  }

  getValue(value: string) {
    this.receivedValue = value;
    if( value != undefined ){
      this.show = false;
    }
  }

}
