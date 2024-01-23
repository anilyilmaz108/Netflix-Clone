import { createAction, props } from "@ngrx/store";

export const languageChanged = createAction("customlanguage", props<{ value : string, action : string}>())