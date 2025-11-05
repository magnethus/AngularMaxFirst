import { Component,input,inject,ElementRef, ViewEncapsulation, ContentChild } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  label = input.required<string>();
  private el = inject(ElementRef)
  @ContentChild('input') control?: ElementRef<HTMLFormElement | HTMLInputElement >


  onClick() {
    console.log('Clicked!');
    console.log(this.el);
    console.log(this.control);
  }

}
 