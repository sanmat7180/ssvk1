export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image:string;
    quantity:number;
    category?:[];
  }