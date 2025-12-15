import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PipeComponent } from './pipes/pipe/pipe.component';
import { UsersComponent } from '../components/users/users.component';
import { ParentComponent } from "../components/parent/parent.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";

@Component({
  selector: 'app-root',
  imports: [UsersComponent, ParentComponent, ReactiveFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular';
}
