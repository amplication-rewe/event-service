import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { ReviewUpdateManyWithoutEventsInput } from "./ReviewUpdateManyWithoutEventsInput";

export type EventUpdateInput = {
  commnet?: string | null;
  date?: Date | null;
  location?: LocationWhereUniqueInput | null;
  name?: string | null;
  reviews?: ReviewUpdateManyWithoutEventsInput;
};
