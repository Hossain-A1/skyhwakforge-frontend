import { droneType } from "./drone.type";

export type trainerType = {
  _id: string;
  name: string;
  designation: string;
  bio: string;
  picUrl: string;
  dateOfBirth: string;
  drones: droneType[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};
