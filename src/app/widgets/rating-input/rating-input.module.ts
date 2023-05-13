import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingInputComponent } from './rating-input.component';

@NgModule({
  declarations: [RatingInputComponent],
  imports: [CommonModule],
  exports: [RatingInputComponent]
})
export class RatingInputModule {}
