import { Component, OnInit, Input, Output } from '@angular/core';
import {DataInteractionService} from '../data-interaction.service';
import {Product} from '../product'
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-food-desc',
  templateUrl: './food-desc.component.html',
  styleUrls: ['./food-desc.component.css']
})
export class FoodDescComponent implements OnInit {

  @Input() product: Product;
  @Output() addToCart = new EventEmitter<Product>();


  constructor(private dataService: DataInteractionService) { }

  ngOnInit(): void {

  }

  
  getProduct(): void{
    
  }

  AddToOrder(product : Product): void{
    this.addToCart.emit(product)
  }

}
