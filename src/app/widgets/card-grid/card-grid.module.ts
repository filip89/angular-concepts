import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardGridComponent } from './card-grid.component';
import { CardItemDirective } from './directives/card-item.directive';

@NgModule({
  declarations: [CardGridComponent, CardItemDirective],
  imports: [CommonModule],
  exports: [CardGridComponent, CardItemDirective]
})
export class CardGridModule {}
