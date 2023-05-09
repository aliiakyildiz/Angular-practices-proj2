import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <p>child works! {{childData}}</p>
  `
})
export class ChildComponent {

  @Input() childData: any;
}
