import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForOf } from '../../../node_modules/@angular/common';

@Component({
  selector: 'app-child',
  imports: [NgForOf],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input() sendChild: any;

  @Output() childMessage = new EventEmitter<string>();
  @Output() childTable = new EventEmitter<any>();

  // @Output() filterData = new EventEmitter<any>();
  childFiltering = 'Filtering child';

  ngOnInit() {
    this.childMessage.emit('Mamiaa');
    this.childTable.emit(this.sendChild);
  }
}
