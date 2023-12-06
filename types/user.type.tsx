import { orderType } from "./orderType";

export type userType = {
  _id:string;
  name: string;
  email: string;
  password: string;
  picUrl: string;
  address?: string;
  phoneNumber?: string;
  role: 'user' | 'admin';
  orders: orderType[];
  createdAt:string;
  updatedAt:string;
  __v:number
}