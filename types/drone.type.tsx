import { orderType } from "./orderType";
import { trainerType } from "./trainerType";


export type droneType= {
  _id:string;
  title: string;
  description: string;
  about:string;
  category: string;
  images: string[];
  price: number;
  stock:number;
  rating:number;
  trainers: trainerType[];
  orders: orderType[];
  createdAt:string;
  updatedAt:string;
  __v:number
  count:number
} 