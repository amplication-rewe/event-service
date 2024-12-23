import { Event } from "../event/Event";

export type Review = {
  comment: string | null;
  createdAt: Date;
  event?: Event | null;
  id: string;
  rating: number | null;
  updatedAt: Date;
};
