import { Component, OnInit } from '@angular/core';
import { DataInteractionService } from '../data-interaction.service';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list-page',
  templateUrl: './order-list-page.component.html',
  styleUrls: ['./order-list-page.component.css']
})
export class OrderListPageComponent implements OnInit {
  items: Product[];
  subTotal: number;
  tax: number;
  total:number;
  
  
  constructor(private router : Router, private DataInteractionService: DataInteractionService) { }
  
  ngOnInit(): void {
    this.items = this.DataInteractionService.getCart();
    this.subTotal = this.DataInteractionService.getSubTotal();
    this.tax = this.DataInteractionService.getTax();
    
    this.total = this.DataInteractionService.getTotal();
  }

  remove(index: number){
    this.DataInteractionService.removeItem(index);
    this.ngOnInit();
  }

  payment(){
    this.router.navigateByUrl('payment')
  }
//This is just a test to se how my page handles removing things
  // add(){
  //   for(let i = 0;i < this.DataInteractionService.menu.length; i++)
  //   this.DataInteractionService.AddToCart(this.DataInteractionService.menu[i]);
  //   this.ngOnInit();
  // }

}
