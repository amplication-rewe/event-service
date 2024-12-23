import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ReviewWhereInput = {
  comment?: StringNullableFilter;
  event?: EventWhereUniqueInput;
  id?: StringFilter;
  rating?: IntNullableFilter;
};
