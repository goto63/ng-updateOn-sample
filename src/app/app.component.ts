import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <form novalidate [formGroup]="myForm">
      change:<br/>
      <input formControlName="change"/>
      <pre class="error">{{ myForm.get('change').errors | json }}</pre>
      <hr/>
      blur:<br/>
      <input formControlName="blur"/>
      <pre class="error">{{ myForm.get('blur').errors | json }}</pre>
      <hr/>
      submit:<br/>
      <input formControlName="submit"/>
      <pre class="error">{{ myForm.get('submit').errors | json }}</pre>
      <hr/>
      <button>submit</button>
    </form>
    values:
    <pre>{{ myForm.value | json }}</pre>
  `,
  styles: [`
    .error {
      color: red
    }
  `]
})
export class AppComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = fb.group({
      change: ['', {validators: [Validators.required, Validators.minLength(5)], updateOn: 'change'}],
      blur: ['', {validators: [Validators.required, Validators.minLength(5)], updateOn: 'blur'}],
      submit: ['', {validators: [Validators.required, Validators.minLength(5)], updateOn: 'submit'}]
    });
  }
}
