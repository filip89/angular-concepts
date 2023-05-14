import { Component, ContentChild, Input } from '@angular/core';
import { CardItemDirective } from './directives/card-item.directive';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.scss']
})
export class CardGridComponent {
  @Input() items!: unknown[];

  /*
    Here we use a more customizable content projection strategy by passing a template.
    We take advantage of attribute directive CardItemDirective to be able to get the
    reference to the templateRef of the projected content. By doing so, we can pass
    the data to the projected content by specifying it in context in *ngOnTemplateRef
  */
  @ContentChild(CardItemDirective) itemTemplate!: CardItemDirective;
}
