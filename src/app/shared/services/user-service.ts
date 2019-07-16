import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { StoyanovGamesResponse } from '../models/stoyanov-games-response';
import { Order } from '../models/order';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  private options = {
    headers: new HttpHeaders().set("Content-Type", "application/json")
  };

  private user: User ;/*= {
      Id: 1,
      Username: "Alexa",
      Password: "12345",
      Email: "alexa@abv.bg",
      Address: "St Petersburg Pensylvania",
      Phone: "0879134444",
      isEmailConfirmed: true,
      Name: " Ivelin Ivanov Gorchovski",
      IsAdmin: true
  }*/
  constructor(private backEndService: HttpClient) {
  }

  getUser() {
    return this.user;
  }

  generateUserFromForm(form: FormGroup): User {
    let formData = form.getRawValue();
    let user = new User();

    user.username = formData.username;
    user.password = formData.password;
    user.email = formData.email;
    user.address = formData.address;
    user.phone = formData.phone;
    user.isEmailConfirmed = false;
    user.name = formData.names;
    user.isAdmin = false;
    return user;
  }

  getUsers() {
    const url = environment._BACKEND + "/users/get";
    return this.backEndService.get<StoyanovGamesResponse<User[]>>(url, this.options);
  }

  updateUser(user): Observable<any> {
    let url = environment._BACKEND + "/users/update";
    console.log(user);
    return this.backEndService.post<any>(url, user, this.options);
  }

}