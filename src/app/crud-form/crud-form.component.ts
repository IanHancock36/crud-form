import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

export interface DailyTasks {
  gallonWater?: boolean | null | undefined;
  tenPages?: boolean | null | undefined;
  dailyWorkout?: boolean | null | undefined;
  decompressTime?: boolean | null | undefined;
  dailyTask?: string | null | undefined;
}

@Component({
  selector: 'app-crud-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './crud-form.component.html',
  styleUrl: './crud-form.component.css',
})
export class CrudFormComponent {
  submittedForms: DailyTasks[] = [];
  submittedValue: DailyTasks = {
    gallonWater: false || null,
    tenPages: false || null,
    dailyWorkout: false || null,
    decompressTime: false || null,
    dailyTask: '' || null,
  };
  dailyTasksForm = new FormGroup({
    gallonWater: new FormControl(false, Validators.required),
    tenPages: new FormControl(false, Validators.required),
    dailyWorkout: new FormControl(false, Validators.required),
    decompressTime: new FormControl(false, Validators.required),
    dailyTask: new FormControl('', Validators.required),
  });

  onSubmit() {
    this.submittedValue = this.dailyTasksForm.value;
    this.submittedForms.push(this.submittedValue);
    this.dailyTasksForm.reset();
  }
}
