import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../product';
import { CartService } from '../../cart.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product !: Product
  items: any
  totalAmount : number= 0
 
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getItems()
    this.Total();
  }
  getItems(){
    this.items = this.cartService.getItems();
  }
  //delete item
  // deletei(id: any): void {
  //   let index = this.items.findIndex((item: { product_id: any; }) => item.product_id === id);
  //   this.items.splice(index, 1);
  //   this.Total();
  
  // }
  deletei(i: number): void {
    this.items.splice(i, 1);
    this.Total();
  
  }
  qntUpdate($event: any) {
    this.Total();
  }
  
  Total() {
    this.totalAmount = 0
    this.items.forEach((item: { quantity: number; price: number; }) => {
      this.totalAmount += (item.quantity * item.price)
    })
  }

  // checkout(){
  //   this.location.back()
  //   alert(`Thank you for visiting us, your total price it: R ${this.total}`)
  //   localStorage.removeItem('cart')
    
  
  // //adding total
  //   // total(){
  //   //   this.items.map( (elem: any) => {
  //   //     if(elem.quantity) 
  //   //       this.totalAmount += elem.price*elem.quantity
        
  //   //   })
  //   }
    // getTotal(){
    //   let total = 0;
    //   let price = 0;
    //   let quantity= 0;
    //   for (var i = 0; i < this.items.length; i++) {
    //       if (this.items[i].price) {
    //         price += this.items[i].price;
    //         quantity += this.items[i].quantity;
            
    //           total += price*quantity
    //          this.totalAmount = total;
    //       }else if(!this.items[i].price){
    //         total = 0;
    //         this.totalAmount = total;
    //       }
    //   }
    //   return total;
    // }
    
  
    incre(quantity: any, index: number){
      quantity++
      this.items[index].quantity = quantity
      this.Total()
    }
    decr(quantity: any, index: number){
      
    if(quantity > 1)
    quantity--
      this.items[index].quantity = quantity
      this.Total()
     
    }
  
}

