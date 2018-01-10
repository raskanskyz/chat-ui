import { Directive, ElementRef, Input, Renderer, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCheckOrigin]'
})
export class CheckOriginDirective implements OnInit {

  @HostBinding('style.flex-direction') flexDirection = '';
  @HostBinding('style.border-radius') borderRadius = '';
  @HostBinding('style.background-color') backgroundColor = '';
  @HostBinding('style.padding') padding = '';
  @Input() senderId: string;

  constructor() {
  }

  ngOnInit() {
    this.setStyling();
  }

  setStyling() {
    if (localStorage.getItem('_id') == this.senderId) {
      this.flexDirection = 'row-reverse';
      this.borderRadius = '12px';
      this.backgroundColor = 'green';
      this.padding = '5px 10px';
    }

  }
}
