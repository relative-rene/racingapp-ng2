import { Component } from '@angular/core';
import { Race } from './race';
import { RaceService } from './race.service';

@Component({
  selector: 'my-races',
  templateUrl: 'app/races.component.html',
  styleUrls:['app/races.component.css']
})
export class RacesComponent {
  heading = "Marathon Schedule"
  cash = 600;
  races: Race[];

  constructor(private raceService: RaceService) { }

  ngOnInit() {
    this.raceService.getRaces().subscribe(data => this.races = data);
  }

  totalCost() {
    let sum = 0;
    if (this.races) {
      for (let race of this.races) {
        if (race.isRacing) sum += race.entryFee;
      }
    }
    return sum;
  }

  castDate(date) {
    return new Date(date);
  }

  cashLeft() {
    return this.cash - this.totalCost();
  }

  enterRace(race) {
    if (this.cashLeft() > run.entryFee) {
      run.isRacing = true;
    } else {
      alert("You don't have enough cash");
    }
  }

  cancelRace(race) {
    run.isRacing = false;
  }
}
