import { droneType } from "./drone.type";
import { userType } from "./user.type";


export type orderType = {
  _id:string;
  user: userType;
  drones: droneType;
  createdAt:string;
  updatedAt:string;
  __v:number
}