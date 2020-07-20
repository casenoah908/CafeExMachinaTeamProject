import { Component, OnInit } from '@angular/core';
import { DataInteractionService } from '../data-interaction.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  phase : number = 0;

  ellipse : string = '';

  timeLeft : number = 5;
  interval;

  total : number;

  constructor(private data : DataInteractionService) { }

  ngOnInit(): void {
    this.total = this.data.getTotal();
    this.interval = setInterval(() => {
      if (this.timeLeft > 0){
        this.timeLeft--;

        if (this.ellipse != '...'){
          this.ellipse += '.'
        } else {
          this.ellipse = ''
        }

      } else {
        if (this.phase < 3){
          this.phase++;
        } else {
          this.interval = clearInterval()
        }
        this.timeLeft = 5;
        this.ellipse = ''
      }
    }, 1000);
  }

}
