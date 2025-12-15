import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { ServiceService } from '../../app/services/service.service';
import { NgForOf } from '../../../node_modules/@angular/common';

@Component({
  selector: 'app-parent',
  imports: [ParentComponent, ChildComponent, NgForOf],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  getData: any;
  childmsg: any;

  childTable: any;

  constructor(private _service: ServiceService) {}

  ngOnInit() {
    this._service.getAllUsers().subscribe((res) => {
      this.getData = res;
    });
    console.log();
    
  }

  getMsg(event: any) {
    this.childmsg = event;
  }

  getTableFromChild(ev: any) {
    this.childTable = ev;
  }


}
