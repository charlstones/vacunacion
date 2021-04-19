import { Component, OnInit } from '@angular/core';
import { VaccinatedPeopleService } from 'src/app/shared/http/vaccinated-people.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private vaccinatedPeopleService: VaccinatedPeopleService) {}
  vaccinatedUsers = null;
  displayedColumns = ['firstName', 'lastName' , 'age', 'curp', 'email', 'vaccinated']
  ngOnInit() {
    this.vaccinatedPeopleService.getVaccinatedPeople().subscribe(response => {
      this.vaccinatedUsers = response;
    });
  }
}
