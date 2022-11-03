import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {

  constructor() { }

  @Input() userStatus!: boolean;

  @Input('userName') name!: string;

  private _email!: string;

  get email(): string{
    return this._email;
  }

  @Input()
  set email(value: string){
    this._email = value;
  }

  department = 'Mathematics';


  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['name'].currentValue==="Jenish"){
      console.log("Hi from child component");
      
      alert("Matched name from child component");
    }
  }

  childMethod(){
    alert("I am came from child");
  }

  @Output() greetEvent = new EventEmitter;

  getFromParent(){
    this.greetEvent.emit("From child Component");
  }
}
