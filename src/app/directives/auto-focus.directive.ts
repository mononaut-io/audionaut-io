import { Directive, Input, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[focus]'
})
export class AutoFocusDirective implements AfterViewInit {
  @Input() focus!: boolean;

  constructor(private element: ElementRef) { }

  ngAfterViewInit() {
    if (this.focus) {
      setTimeout(() => this.element.nativeElement.focus(), 0);
    }
  }

}
