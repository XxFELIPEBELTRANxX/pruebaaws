import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  @Input() collapsed = false;
  @Input() screeWidth = 0;

  getBodyClass(): string{
    let styleClass = '';
    if(this.collapsed && this.screeWidth > 768){
      styleClass = 'body-trimmed';
    }
    if(this.collapsed && this.screeWidth > 768 && this.screeWidth >0){
      styleClass = 'body-md-screen';
    }
    return styleClass;

  }

}
