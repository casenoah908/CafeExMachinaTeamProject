import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataInteractionService } from '../data-interaction.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  total : number;
  time : Date;

  showBreakfast : boolean = true;
  showPanini : boolean = true;
  showDrinks : boolean = true;

  constructor(private dataService : DataInteractionService, private router: Router) { }

  categorySelector(category){
    this.dataService.setCategory(category);
    this.router.navigateByUrl('category')
  }

  ngOnInit(): void {
    this.total = this.dataService.getSubTotal();
    this.time = new Date();
    this.determineTimes();
  }

  determineTimes(){
    if (this.time.getHours() >= 7 && this.time.getHours() <= 11){
      this.showBreakfast = true;
    } else {
      this.showBreakfast = false;
    }

    if (this.time.getHours() >= 11 && this.time.getHours() <= 22){
      this.showPanini = true;
    } else {
      this.showPanini = false;
    }

    if (this.time.getHours() >= 7 && this.time.getHours() <= 22){
      this.showDrinks = true;
    } else {
      this.showDrinks = false;
    }
  }

  setDebugTime(){
    let time = (document.getElementById('time') as HTMLInputElement).value;
    let times = time.split(':')
    this.time.setHours(+times[0]);
    this.time.setMinutes(+times[1])
    this.determineTimes();
  }

}
