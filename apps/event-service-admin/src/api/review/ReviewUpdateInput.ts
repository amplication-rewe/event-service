import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type ReviewUpdateInput = {
  comment?: string | null;
  event?: EventWhereUniqueInput | null;
  rating?: number | null;
};
