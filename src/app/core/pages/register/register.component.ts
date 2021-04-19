import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { VaccinatedPeopleService } from 'src/app/shared/http/vaccinated-people.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private vaccinatedPeopleService: VaccinatedPeopleService) {}
  vaccineCandidates = this.formBuilder.array([]);
  vaccine = {
    firstName: ['', [Validators.required]],
    lastName: ['', Validators.required],
    secondLastName: ['', Validators.required],
    curp: ['', [Validators.required, Validators.minLength(18)]],
    age: ['', Validators.pattern('^[0-9]*$')],
    state: ['', Validators.required],
    city: ['', Validators.required],
    postalCode: ['', [Validators.maxLength(5), Validators.minLength(5), Validators.pattern('^[0-9]*$')]],
    email: ['', [Validators.email]]
  };
  vaccineGroup = this.formBuilder.group({
    vaccineCandidates: this.vaccineCandidates
  });
  ngOnInit() {
    this.vaccineCandidates.push(this.formBuilder.group(this.vaccine));
  }

  add() {
    this.vaccineCandidates.push(this.formBuilder.group(this.vaccine));
  }

  remove() {
    this.vaccineCandidates.removeAt(this.vaccineCandidates.length - 1);
  }

  save() {
    console.log(this.vaccineCandidates.value);
    this.vaccinatedPeopleService.save(this.vaccineCandidates.value).subscribe(response => {
    alert('Se registraron pacientes satisfactoriamente.')
    });
  }
}
