import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Katayuno with Angular';
  public card: any; 

  constructor() { 
    this.card = new Card(0)
 
  }
  ngOnInit() {
    
  }
  
}

export class Deck{
  retrieveCard(){
    return new Card(0)
  }
}

export class Card{
  private damagePoints: number;
  private manaPoints: number;

  constructor(value: any){
    this.damagePoints = value
    this.manaPoints = value
  }
  damage(){
    return this.damagePoints
  }

  manaCost(){
    return this.manaPoints
  }


}




