import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { ReviewCreateNestedManyWithoutEventsInput } from "./ReviewCreateNestedManyWithoutEventsInput";

export type EventCreateInput = {
  commnet?: string | null;
  date?: Date | null;
  location?: LocationWhereUniqueInput | null;
  name?: string | null;
  reviews?: ReviewCreateNestedManyWithoutEventsInput;
};
