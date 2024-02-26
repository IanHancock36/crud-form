import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrudFormComponent } from './crud-form/crud-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CrudFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'newproj';
}
