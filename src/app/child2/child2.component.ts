import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor(private _interaction: InteractionService) { }

  ngOnInit(): void {
    this._interaction.parentMessage.subscribe(mess => console.log("Child2 = "+mess))
  }

}
