import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appCardItem]'
})
export class CardItemDirective {
  //the whole purpose of this directive is so that we can access templateRef when we project the content
  constructor(public templateRef: TemplateRef<unknown>) {}
}
