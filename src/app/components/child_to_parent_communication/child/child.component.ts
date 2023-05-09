import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  template: `
    <p>child works!</p>
  `
})
export class ChildComponent implements OnInit{
ngOnInit(): void {
  this.dataEvent.emit({message:'Merhaba',asd:'sadas'})
}
@Output() dataEvent: EventEmitter<any>= new EventEmitter();
}
