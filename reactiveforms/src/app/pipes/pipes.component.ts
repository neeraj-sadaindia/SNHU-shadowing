import { Component, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  bday = new Date(2000,3,24)
  f1 = 'shortDate'
  f2 = 'fullDate'
  toggle =true
  get format(){
    return this.toggle ? this.f1 : this.f2
  }
  toggleformat(){
    this.toggle = !this.toggle
  }
}

