import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

export interface DailyTask {
  gallonWater: boolean | null;
  tenPages: boolean | null;
  dailyWorkout: boolean | null;
  decompressTime: boolean | null;
  dailyTask: string | null;
}

@Component({
  selector: 'app-crud-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './crud-form.component.html',
  styleUrl: './crud-form.component.css',
})
export class CrudFormComponent {
  submittedValue: any
  dailyTasksForm = new FormGroup({
    gallonWater: new FormControl(false),
    tenPages: new FormControl(false),
    dailyWorkout: new FormControl(false),
    decompressTime: new FormControl(false),
    dailyTask: new FormControl(''),
  });

  onSubmit() {
    this.submittedValue = this.dailyTasksForm.value;
  }
}
