import { Directive } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const forbidden = nameRe.test(control.value);
    console.log(control.value);
    console.log(nameRe);
    console.log(forbidden);
    return !forbidden ? {'forbiddenName': {value: control.value}}:null ;
  };
}

@Directive({
  selector: '[appForbiddenValidator]'
})
export class ForbiddenValidatorDirective {

  constructor() { }

}
