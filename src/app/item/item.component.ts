import {Shopping_Item_Interface} from './../app.interface';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: Shopping_Item_Interface | null = null;
  @Input() existInCart: boolean = false;
  @Output() addToCart: EventEmitter<Shopping_Item_Interface> = new EventEmitter<Shopping_Item_Interface>();
  @Output() removeFromCart: EventEmitter<Shopping_Item_Interface> = new EventEmitter<Shopping_Item_Interface>();
  clicked: string = "";
  constructor() { 

  }

  ngOnInit(): void {
  }
  onAddToCart = () => {
    this.addToCart.emit(this.item as Shopping_Item_Interface)
  }
  onRemove = () => {
    this.removeFromCart.emit(this.item as Shopping_Item_Interface)
  }

}
