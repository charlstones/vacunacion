import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-record',
  templateUrl: './register-record.component.html',
  styleUrls: ['./register-record.component.scss']
})
export class RegisterRecordComponent implements OnInit {
  constructor() {}
  @Input() form: FormGroup;
  ngOnInit() {
    console.log(this.form);
  }
}
