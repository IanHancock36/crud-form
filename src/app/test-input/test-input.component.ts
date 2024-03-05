import { Component } from '@angular/core';

@Component({
  selector: 'app-test-input',
  standalone: true,
  imports: [],
  templateUrl: './test-input.component.html',
  styleUrl: './test-input.component.css'
})
export class TestInputComponent {
characterName: string = ""

handleChange(event : any){
  this.characterName = event?.target.value
  console.log(this.characterName)
}
}
