import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-crud-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './crud-form.component.html',
  styleUrl: './crud-form.component.css',
})
export class CrudFormComponent {
  dailyTasks = new FormGroup({
    gallonWater: new FormControl(false),
    tenPages: new FormControl(false),
    dailyWorkout: new FormControl(false),
    decompressTime: new FormControl(false),
    dailyTask: new FormControl(''),
  });
}
