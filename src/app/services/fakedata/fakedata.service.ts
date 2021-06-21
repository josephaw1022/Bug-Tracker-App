import { Injectable } from '@angular/core';
import { fakeData, IFetchInput } from './fakedata';
@Injectable({
  providedIn: 'root',
})
export class FakedataService {
  constructor() {}

  items = [
    {
      title: 'convert ios and android to react native ',
      claimed: false,
      done: false,
    },
    {
      title: 'add apollo cli to react applyforjob site  ',
      claimed: false,
      done: false,
    },
    {
      title: 'finish http client service in angular app',
      claimed: false,
      done: false,
    },
    {
      title: 'get an actual job',
      claimed: false,
      done: false,
    },
    {
      title: "make pull request of today's work",
      claimed: false,
      done: false,
    },
    {
      title: 'Finish up making this app',
      claimed: false,
      done: false,
    },
    {
      title: 'make second app with fakerjs to upload fake data to drf backend',
      claimed: false,
      done: false,
    },
    {
      title: 'add login and signup functionality ',
      claimed: false,
      done: false,
    },
    { title: 'finish up portfolio app', claimed: false, done: false },
    {
      title: 'simply stick to one to two frameworks for front and backend',
      claimed: true,
      done: false,
    },
    {
      title: 'figure out to make laravel work on m1 macbook laptop ',
      claimed: true,
      done: false,
    },
    {
      title: 'Actually learn how observables work ',
      claimed: true,
      done: false,
    },
    {
      title: 'make web and mobile apps using angular ',
      claimed: true,
      done: false,
    },
    {
      title: 'learn React and Redux',
      claimed: true,
      done: true,
    },
    {
      title: 'learn how to connect to an api with react ',
      claimed: true,
      done: true,
    },
    {
      title: 'find interview date',
      claimed: true,
      done: true,
    },
    {
      title: 'fix the navigation of portfolio',
      claimed: true,
      done: true,
    },
    {
      title: 'purchase a ui kit that works with tailwind',
      claimed: true,
      done: true,
    },
    { title: 'finish this fake data list', claimed: true, done: true },
  ];

  getData(input: IFetchInput): Array<fakeData> {
    const filter = this.items
      .filter(
        (name) => name.done == input.done && name.claimed == input.claimed
      )
      .map((item) => {
        return item;
      });
    return filter;
  }


  


}
