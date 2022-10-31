import { Directive, Renderer2, ElementRef, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appGoWild]'
})
export class DirDirective implements OnInit ,OnChanges{
  @Input('appGoWild') bgColor;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement,'background-color',this.bgColor);

  }
  ngOnChanges() {
    this.renderer.setStyle(this.el.nativeElement,'background-color',this.bgColor);
    console.log(this.bgColor)

  }
}