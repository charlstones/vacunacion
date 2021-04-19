import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class VaccinatedPeopleService {
  constructor(private http: HttpClient) { }

  apiRoot = `${environment.apiUrl}/vaccinated-people`;

  getVaccinatedPeople() {
    const endPoint = `${this.apiRoot}`;
    return this.http.get(endPoint);
  }

  save(vaccinatedPeople: Array<any>) {
    const endPoint = `${this.apiRoot}`;
    return this.http.post(endPoint, vaccinatedPeople);
  }

}
