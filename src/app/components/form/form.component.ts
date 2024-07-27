import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Input() title: String = '';
  @Input() text1: String = '';
  @Input() text2: String = '';
  


  


}
