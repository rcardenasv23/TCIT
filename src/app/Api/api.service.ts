import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
const { v4: uuidv4 } = require('uuid');

@Injectable({
  providedIn: 'root',
})
export class ApiService implements InMemoryDbService {
  createDb() {
    let posts = [
      {
        id: uuidv4(),
        name: 'Why K-On is the best anime of the history?',
        description: 'Summary of why k-on is the goat.',
      },
      {
        id: uuidv4(),
        name: 'Why Berserk is the best manga of the history?',
        description: 'Summary of why Berserk is the goat.',
      },
      {
        id: uuidv4(),
        name: 'Why Vagabond is the goat?',
        description: 'Summary of why vagabond is the goat.',
      },
    ];
    return { posts };
  }

  constructor() {}
}
