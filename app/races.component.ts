import { Component } from '@angular/core';

@Component({
  selector: 'my-races',
  template: `
    <h2>Cash left to enter races {{cashLeft() | currency:'USD':true}}</h2>
    <ul>
      <li *ngFor="let race of races">
        <h2>{{race.name}} {{race.entryFee | currency:'USD':true}}</h2>
        <p>{{race.date | date:'MMM d, y, h:MM a'}}</p>
        <p>{{race.about}}</p>
        <button *ngIf="!race.isRacing">Enter Race</button>
        <h3 *ngIf="race.isRacing">Already Racing</h3>
      </li>
    </ul>
    <h2>Total cost: {{totalCost() | currency:'USD':true}}</h2>
  `
})
export class RacesComponent {
  heading = "Marathon Schedule"
  cash = 10000;
  races = [{
    "id": 1,
    "name": "Daytona Thunderdome",
    "date": new Date('2512-01-04T14:00:00'),
    "about": "Pace yourself in the Theme park capital of the World.",
    "entryFee": 3200,
    "isRacing": false
  }, {
    "id": 2,
    "name": "San Francisco Ruins",
    "date": new Date('2512-07-03T20:00:00'),
    "about": "With great hills comes great scenic routes.",
    "entryFee": 4700,
    "isRacing": true
  }, {
    "id": 3,
    "name": "New York City Skyline",
    "date": new Date('2512-07-12T21:00:00'),
    "about": "If you can make it hear, you can run the concrete jungle.",
    "entryFee": 4300,
    "isRacing": true
  }];

  totalCost() {
    let sum = 0;
    for (let race of this.races) {
      if (race.isRacing) sum += race.entryFee;
    }
    return sum;
  }

  cashLeft() {
    return this.cash - this.totalCost();
  }

}
`
})
