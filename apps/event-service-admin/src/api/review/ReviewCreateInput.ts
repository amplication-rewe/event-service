import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type ReviewCreateInput = {
  comment?: string | null;
  event?: EventWhereUniqueInput | null;
  rating?: number | null;
};
