import { Location } from "../location/Location";
import { Review } from "../review/Review";

export type Event = {
  commnet: string | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  location?: Location | null;
  name: string | null;
  reviews?: Array<Review>;
  updatedAt: Date;
};
