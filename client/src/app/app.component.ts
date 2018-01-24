import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  gold;
  log;
  constructor(private _httpService: HttpService){
  }
  ngOnInit(){
    let observable = this._httpService.getNinja()
    observable.subscribe(data => {
      this.gold = data["gold"];
      this.log = [];
    })
  }
  farm(){
    let gain = Math.floor(Math.random() * (5 - 2 + 1)) + 2;
    let obs = this._httpService.updateNinja({gold: this.gold + gain})
    obs.subscribe(data => {
      this.gold = data["gold"];
      this.log.push(`Gained ${gain} gold from farm`)
    })
  }
  cave(){
    let gain = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
    let obs = this._httpService.updateNinja({gold: this.gold + gain})
    obs.subscribe(data => {
      this.gold = data["gold"];
      this.log.push(`Gained ${gain} gold from cave`)
    })
  }
  house(){
    let gain = Math.floor(Math.random() * (15 - 7 + 1)) + 7;
    let obs = this._httpService.updateNinja({gold: this.gold + gain})
    obs.subscribe(data => {
      this.gold = data["gold"];
      this.log.push(`Gained ${gain} gold from house`)
    })
  }
  casino(){
    let gain = Math.floor(Math.random() * (100 - -100 + 1)) + -100;
    let obs = this._httpService.updateNinja({gold: this.gold + gain})
    obs.subscribe(data => {
      this.gold = data["gold"];
      if(gain < 0){
        this.log.push(`Lost ${gain - (gain * 2)} gold from casino`)
      }
      else{
        this.log.push(`Gained ${gain} gold from casino`)
      }
    })
  }
  reset(){
    let obs = this._httpService.deleteNinja();
    obs.subscribe(data => {
      this.ngOnInit()
    })
  }
}
