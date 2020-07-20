import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() total : number;
  @Input() disabled : boolean = false;

  constructor(private router : Router) { }

  ngOnInit(): void {

  }

  cart(){
    if (!this.disabled){
      this.router.navigateByUrl('order-list')
    }
    
  }

}
