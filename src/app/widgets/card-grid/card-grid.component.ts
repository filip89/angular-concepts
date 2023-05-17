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
    @HINT We have two types of components children: view and content children.
    View children are the ones used directly in the template of the component, while
    content children are the ones we put between the components tags when we use the
    component in another component as a view child (we call that content projection).

    Most commonly, when we do a content projection we use ng-content in a template to
    specify where to place the projected content.
    Here we use a more customizable content projection strategy by passing in a template.
    We take advantage of attribute directive CardItemDirective to be able to get the
    reference to the templateRef of the projected content. By doing so, we can pass
    the data to the projected content by specifying the context in *ngOnTemplateRef.
  */
  @ContentChild(CardItemDirective) itemTemplate!: CardItemDirective;
}
