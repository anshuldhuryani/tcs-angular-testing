import { Component, Input, OnInit, Output, EventEmitter }
  from '@angular/core';
import { FormBuilder, FormGroup, Validators } from
  "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  @Input()
  email: string;

  @Output()
  submitted = new EventEmitter();

  ngOnInit(): void {
  }

  ngOnChanges(change) {
    if (change.email) {
      this.loginForm.controls['email'].setValue(change.email.currentValue);
    }
  }

  onSubmit({ email, password }) {
    this.submitted.emit({ email, password });
  }

}
