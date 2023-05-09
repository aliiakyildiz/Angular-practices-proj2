import { Component } from '@angular/core';

@Component({
  selector: 'app-parent2',
  template: `
    <p>parent works!</p>
    <app-child2 (dataEvent)="childEvent($event)"></app-child2>
  `
})
export class ParentComponent {

  childEvent(obj:any){
    console.log(obj);
  }
}
