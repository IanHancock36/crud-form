import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { v4 as uuid4 } from 'uuid';
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

  dailyTasksForm = new FormGroup({
    gallonWater: new FormControl(false, Validators.required),
    tenPages: new FormControl(false, Validators.required),
    dailyWorkout: new FormControl(false, Validators.required),
    decompressTime: new FormControl(false, Validators.required),
    dailyTask: new FormControl('', Validators.required),
  });

  onSubmit() {
    const submittedValue: DailyTasks = {
      id: uuid4(),
      ...this.dailyTasksForm.value,
    };
    this.submittedForms.push(submittedValue);
    this.dailyTasksForm.reset();
  }

  deleteDailyTask(taskId: string | null | undefined) {
    if (taskId) {
      this.submittedForms = this.submittedForms.filter((task) => task.id !== taskId);
    }
  }

  editDailyTask(taskId: string | null | undefined, newTaskText: string | null | undefined) {
    const taskIndex = this.submittedForms.findIndex((task) => task.id === taskId);
    if (taskIndex !== -1 && newTaskText) {
      this.submittedForms[taskIndex].dailyTask = newTaskText;
    }
  }

  repostEditedTask(updatedTask: DailyTasks) {
    // You can perform any additional logic here
    console.log('Task reposted:', updatedTask);
  }
}