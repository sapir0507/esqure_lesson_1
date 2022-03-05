import { Component } from '@angular/core';
import {Shopping_Item_Interface} from './app.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 
  /* features (vars, functions, classes, interfaces) that can be accessed in the app.component.html */ 
  title:string;
  clicked: string;
  data: Shopping_Item_Interface[];
  shoppingCart: Shopping_Item_Interface[] = [];
  
  constructor() {

    this.title = 'esqure_lesson_1';
    this.clicked = '';
    this.data = [{
      id: 0,
      name: "Teaser Cat Catcher Wand (Cat Toy)",
      desciption: "this is a toy your can will enjoy",
      inStock: true,
      price: 5,
      img: "https://www.u-buy.jp/productimg/?image=aHR0cHM6Ly9pNS53YWxtYXJ0aW1hZ2VzLmNvbS9hc3IvNzQ0ODA4ZDItMjhlMS00NGUxLTgzNWEtYTFjY2FkMGUzMWMwXzEuM2NlZDQwMWVmMjNiNzAwMzlkNThkY2M4Nzk2MTI1YzIuanBlZw.jpg"
    },
    {
      id: 2,
      name: "",
      desciption: "",
      inStock: false,
      price: 0,
      img: ""
    }];
    this.shoppingCart = []

  }
  get_items = () => {  
    return this.data;
  }
  get_title = () =>{
    this.title = "Cat Shop";
    return this.title;
  }
  addToCart(item: Shopping_Item_Interface): void{
    this.shoppingCart.push(item)
  }
  removeFromCart(item: Shopping_Item_Interface): void{
    const index = this.getIndex(item.id)
    this.shoppingCart.splice(index, 1)
  }
  existInCart(id: number): boolean{
    const index = this.getIndex(id)
    return index > -1
  }
  getIndex(id: number): number{
    const index = this.shoppingCart.findIndex(i => i.id === id)
    return index
  }
 
  

}
