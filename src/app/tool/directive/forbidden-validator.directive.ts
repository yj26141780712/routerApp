import { Directive, Input } from '@angular/core';
import { AbstractControl, ValidatorFn, NG_VALIDATORS, Validator } from '@angular/forms';

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const forbidden = nameRe.test(control.value);
    return !forbidden ? {'forbiddenName': {value: control.value}}:null ;
  };
}

@Directive({
  selector: '[appForbiddenName]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
})
export class ForbiddenValidatorDirective implements Validator {
  @Input('appForbiddenName') forbiddenName: string;
  validate(control: AbstractControl): {[key: string]: any} {
    console.log(control.value);
    return this.forbiddenName ? {'forbiddenName': {value: control.value}} : null;
  }
}

