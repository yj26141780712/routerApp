import { Injectable } from '@angular/core';

@Injectable()
export class InMemoryDataService {

  constructor() { }

  createDb() {
    const links = [
      { id: 1, path: "/button", name: 'button' },
      { id: 2, path: "/navigation", name: 'navigation' },
      { id: 3, path: "/tabs", name: 'tabs' },
    ];
    return { links };
  }
}
