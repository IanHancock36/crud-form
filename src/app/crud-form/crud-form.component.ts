import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

export interface DailyTasks {
  id?: string | null | undefined;
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
    id: uuidv4() || null,
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
    console.log(this.submittedValue.id);
  }
  deleteDailyTask(taskId: any) {
   this.submittedForms = this.submittedForms.filter((task) => task.id !== taskId);
  }
}
