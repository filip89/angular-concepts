import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/*
  This is an example how we can use ControlValueAccessor interface to serve as a
  bridge between our custom control component and FormControl.
  That way we can integrate the custom control with reactive forms in the same way
  we integrate the native controls.
*/

@Component({
  selector: 'app-rating-input',
  templateUrl: './rating-input.component.html',
  styleUrls: ['./rating-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: RatingInputComponent,
      multi: true
    }
  ]
})
export class RatingInputComponent implements ControlValueAccessor {
  value = 1;

  onTouch?: () => unknown;
  onChange?: (val: number) => unknown;

  writeValue(val: unknown) {
    if (typeof val !== 'number') return;
    this.value = val < 1 ? 1 : val > 5 ? 5 : val;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  onClick(value: number) {
    this.value = value;
    this.onTouch?.();
    this.onChange?.(value);
  }

  getItemClass(value: number) {
    return { item: true, 'item--covered': value <= this.value };
  }
}
