import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable()
export class UserService {

  private user: User = {
      Id: 1,
      Username: "Alexa",
      Password: "12345",
      Email: "alexa@abv.bg",
      Address: "St Petersburg Pensylvania",
      Phone: "0879134444",
      isEmailConfirmed: 1,
      Name: " Ivelin Ivanov Gorchovski",
      IsAdmin: 1,
      RoleId: 1
  }
  constructor() {
  }

  getUser() {
    return this.user;
  }
}