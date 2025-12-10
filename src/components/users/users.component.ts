import { Component } from '@angular/core';
import { ServiceService } from '../../app/services/service.service';

import { NgModel } from '@angular/forms';
import { NgForOf } from '../../../node_modules/@angular/common/';

@Component({
  selector: 'app-users',
  imports: [NgForOf],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  constructor(private _authService: ServiceService) {}

  userData: any;
  photoData = [1, 2, 4, 5, 6, 7, 8];

  ngOnInit() {
    this._authService.getAllUsers().subscribe((res) => {
      console.log(res);
      this.userData = res;
    });

    this._authService.getPhotos().subscribe((res) => {
      console.log(res);
    });
  }
}
