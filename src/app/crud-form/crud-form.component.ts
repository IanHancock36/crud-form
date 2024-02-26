import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
    gallonWater: new FormControl(false, Validators.required),
    tenPages: new FormControl(false, Validators.required),
    dailyWorkout: new FormControl(false, Validators.required),
    decompressTime: new FormControl(false, Validators.required),
    dailyTask: new FormControl('', Validators.required),
  });

  onSubmit() {
    this.submittedValue = this.dailyTasksForm.value;
  }
}
