import { Directive, HostBinding, Input } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Directive({
  selector: '[appSetStyling]'
})
export class SetStylingDirective implements OnInit {


  @HostBinding('style.border-radius') borderRadius = '';
  @HostBinding('style.background-color') backgroundColor = '';
  @HostBinding('style.padding') padding = '';
  @Input() senderId: string;

  constructor() { }

  ngOnInit(): void {
    this.borderRadius = '12px';
    this.backgroundColor = localStorage.getItem('_id') == this.senderId ? 'green' : 'gray';
    this.padding = '5px 10px';
  }

}
