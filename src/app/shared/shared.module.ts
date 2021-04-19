
import { NgModule } from '@angular/core';

import { VaccinatedPeopleService } from './http/vaccinated-people.service';
import { UserService } from './http/user.service';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { VaccinatedValidatorPipe } from './pipes/vaccinated-validator.pipe';
import { MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatDividerModule } from '@angular/material';

@NgModule({
  declarations: [
    VaccinatedValidatorPipe
  ],
  imports: [
    MatTableModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule,
  ],
  exports: [MatTableModule, VaccinatedValidatorPipe,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule,],
  providers: [VaccinatedPeopleService, UserService],
})
export class SharedModule { }
