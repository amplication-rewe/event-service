import { EventUpdateManyWithoutLocationsInput } from "./EventUpdateManyWithoutLocationsInput";

export type LocationUpdateInput = {
  address?: string | null;
  capacity?: number | null;
  events?: EventUpdateManyWithoutLocationsInput;
  name?: string | null;
};
