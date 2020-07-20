import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { DataInteractionService } from '../data-interaction.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  products : Product[];
  total : number;
  categoryName : string;

  constructor(private data : DataInteractionService) { }

  ngOnInit(): void {
    this.total = this.data.getSubTotal();
    this.products = this.data.getMenuFromCategory();
    this.categoryName = this.data.getCurrentCategory();
  }

  add(product){
    this.data.AddToCart(product)
    this.total = this.data.getSubTotal();
  }

  cardClick(index){
    let elem = document.getElementById('collapse' + index);



    var list : any = document.getElementsByClassName('collapse-card');
    for (let item of list){
      if (item != elem){
        item.style.display = 'none';
      }
      
    }

    if (elem.style.display == 'inline'){
      elem.style.display = 'none';
    } else {
      elem.style.display = 'inline';
    }
    

  }

}
