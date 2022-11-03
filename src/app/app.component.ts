import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { InteractionService } from './interaction.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild(ChildComponent) childRef!: ChildComponent;
  ngAfterViewInit(): void {
    this.nameElementRef.nativeElement.focus();
    this.childRef.department = "Computer Science from parent component";
    this.childRef.childMethod();
  }
  
  name!: string;

  userName!: string;

  emailAddress!: string;

  private _customerName!:string;

  userLogin = true;

  @ViewChild('nameRef') nameElementRef!: ElementRef;

  get customerName(): string{
    return this._customerName;
  }
 constructor(private _interactionService: InteractionService){}
  set customerName(value: string){
    this._customerName = value
    if(value=='Jenish'){
      alert("Hello "+value)
    }
  }

  checkUser(user: string){
    if(user == 'Jenish')
      alert("Welcome "+user)
  }

  greetFromParent(name: string){
    alert("I am from parent component! "+name);
  }

  greetChild(){
    this._interactionService.sendMessage("Hi from Parent component");
  }

  appreChild(){
    this._interactionService.sendMessage("Appreaciate from Parent component");
  }

}
