import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'vaccinatedValidator'})
export class VaccinatedValidatorPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'Si' : 'No';
  }
}
