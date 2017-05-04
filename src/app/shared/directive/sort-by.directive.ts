import { Directive, Host, HostListener, Input, ElementRef, Renderer } from '@angular/core';
import { SortDirective } from './sort.directive';

@Directive({
  selector: '[appSortBy]'
})
export class SortByDirective {
  @Input() appSortBy: string;

  sortAscIcon = 'fa-sort-asc';
  sortDescIcon = 'fa-sort-desc';

  sort: SortDirective;

  constructor(@Host() sort: SortDirective, private el: ElementRef, private renderer: Renderer) {
    this.sort = sort;
  }

  @HostListener('click')
  onClick() {
    if (this.sort.predicate && this.sort.predicate !== '_score') {
      this.sort.sort(this.appSortBy);
      this.applyClass();
    }
  }

  private applyClass () {
    let childSpan = this.el.nativeElement.children[1];
    let add = this.sortAscIcon;
    if (!this.sort.ascending) {
      add = this.sortDescIcon;
    }
    this.renderer.setElementClass(childSpan, add, true);
  };
}
