import { Injectable } from "@angular/core";
import { Product } from "./product";
import { MENU } from "./mock-menu";
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: "root",
})
export class DataInteractionService {
  menu = MENU;

  currentCategory: string = "";
  currentShoppingCart: Product[] = [];
  currentTotal: number = 0;
  currentSubTotal:number = 0;


  currentTax: number = .07;
  
  constructor(private cookies : CookieService) {
    // see if we have anything in our cookies
    let cookieCart = cookies.get('cart');

    // if we do...
    if (cookieCart != ''){
      // update the shopping cart from the json
      this.currentShoppingCart = JSON.parse(cookieCart);

      // update the subtotal and the total
      this.getSubTotal();
      this.getTotal();
    }
  }

  clearOrder(){
    this.currentShoppingCart = [];
    this.updateCookies();
  }

  setCategory(category){
    this.currentCategory = category;
    this.updateCookies();
  }

  getCurrentCategory(){
    if (this.cookies.get('category') != ''){
      this.currentCategory = this.cookies.get('category');
    }
    return this.currentCategory;
  }

  getMenuFromCategory(){
    this.getCurrentCategory();
    var menu = [];
    
    this.menu.forEach(item => {
      if (item.category.toUpperCase() == this.currentCategory.toUpperCase()){
        menu.push(item);
      }
    });
    
    return menu;
    
  }

  getSubTotal(): number {
    let subTotal = 0;
    for (let i = 0; i < this.currentShoppingCart.length; i++)
    subTotal += this.currentShoppingCart[i].price;
    this.currentSubTotal = subTotal
    return subTotal; //TODO: format total as a $ amount will return a string instead of number
  }

  getTax(): number{
    let tax: number= 0.07;
    let subTotal : number = this.getSubTotal();
    this.currentTax = subTotal * tax;
    return subTotal * tax;
  }

  getTotal(){
    this.currentTotal = this.getSubTotal() + this.getTax();
    return this.getSubTotal() + this.getTax();
  }

  getCart(): Product[] {
    this.currentShoppingCart;
    return this.currentShoppingCart;
  }

  removeItem(index: number) {
    let tempArray1: Product[];
    let tempArray2: Product[];
    tempArray1 = this.currentShoppingCart.slice(0, index);
    tempArray2 = this.currentShoppingCart.slice(
      index + 1,
      this.currentShoppingCart.length + 1
    );
    this.currentShoppingCart = tempArray1.concat(tempArray2);
    this.updateCookies();
  }

  AddToCart(product : Product): void{ //add currently viewed item to the cart, called in food-desc
    this.currentShoppingCart.push(product);
    this.getTotal();
    this.updateCookies();
  }

  updateCookies(){
    this.cookies.set('cart', JSON.stringify(this.currentShoppingCart));
    this.cookies.set('category', this.currentCategory);
  }

  
}
