import { EventCreateNestedManyWithoutLocationsInput } from "./EventCreateNestedManyWithoutLocationsInput";

export type LocationCreateInput = {
  address?: string | null;
  capacity?: number | null;
  events?: EventCreateNestedManyWithoutLocationsInput;
  name?: string | null;
};
