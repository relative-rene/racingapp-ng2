import { Race } from './race';

export const RACES: Race[] = [{
    "id": 1,
    "name": "Miami Marathon",
    "date": new Date('2017-01-04T14:00:00'),
    "about": "Benvenidos a Miami, the Theme park capital of the World.",
    "entryFee": 170,
    "isRacing": false,
    "image": "/images/miamiMarathon.jpg",
    "imageDescription": "Miami Marathon route"
  }, {
    "id": 2,
    "name": "San Francisco Marathon",
    "date": new Date('2017-08-03T20:00:00'),
    "about": "With great hills comes great scenic routes.",
    "entryFee": 115,
    "isRacing": true,
    "image": "/images/sfMarathon.jpg",
    "imageDescription": "SF Marathon route"
  }, {
    "id": 3,
    "name": "New York City Marathon",
    "date": new Date('2018-11-12T21:00:00'),
    "about": "If you can make it here, you can run the concrete jungle.",
    "entryFee": 266,
    "isRacing": true,
    "image": "/images/nyMarathon.jpg",
    "imageDescription": "NY Marathon route"
  }, {
    "id":4,
    "name": "Boston Marathon",
    "date": new Date('2017-06-12T21:00:00'),
    "about": "The culminating event in distance running.",
    "entryFee": 180,
    "isRacing": false
    "image": "/images/bostonMarathon.jpg",
    "imageDescription": "Boston Marathon route"
  }];
