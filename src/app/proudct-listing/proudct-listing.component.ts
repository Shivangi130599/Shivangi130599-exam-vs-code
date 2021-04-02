import { Component, OnInit } from '@angular/core';

 @Component({
   selector: 'app-proudct-listing',
   templateUrl: './proudct-listing.component.html',
   styleUrls: ['./proudct-listing.component.scss']
 })
 export class ProudctListingComponent implements OnInit {

   constructor() { }

   ngOnInit(): void {
   }

  // count: number = 0;
   products: Product[];

  show(){
    this.products = [
      new Product(111,"iPhone 11", "Apple iPhone 11", 49900, 'https://m.media-amazon.com/images/I/71i2XhHU3pL._AC_UY327_FMwebp_QL65_.jpg'),
      new Product(222,"S1 Ultra", "Samsung S1 Ultra", 149900, 'https://m.media-amazon.com/images/I/91BGpV19r0L._AC_UY327_FMwebp_QL65_.jpg'),
      new Product(333,"Macbook Air", "Apple Macbook Air", 99900, 'https://m.media-amazon.com/images/I/81vKT2GiQKL._AC_UY327_FMwebp_QL65_.jpg'),
      new Product(444,"Hp Envy", "Hp Envy", 49900, 'https://m.media-amazon.com/images/I/61KTUddnpSL._AC_UY327_FMwebp_QL65_.jpg'),
      new Product(555,"iPad Pro", "Apple iPad Pro", 119900, 'https://m.media-amazon.com/images/I/811aBwuSuIL._AC_UY327_FMwebp_QL65_.jpg')
     ] 
   }

   addToCart(id: number, name: string, description: string, price: number){
     console.log(id);
     console.log(name);
     console.log(description);
     console.log(price);
   }

 addToCart2(id: number){
    var i = 0;
     for(let product of this.products){
       if(product.id == id){
           product.inCart=true;
        }
    }
  }
 }

 export class Product{
  // id: number;
  // name: string;
  // description: string;
   // price: number;
   // imgUrl: string;

  constructor(public id: number,
               public name: string,
              public description: string,
               public price: number,
               public imgUrl: string,
               public inCart:Boolean=false) {

                // this.id = id;
                // this.name = name;
                // this.description = description;
                // this. price = price;               
                 // this.imgUrl = imgUrl;
               
              }            

 }


