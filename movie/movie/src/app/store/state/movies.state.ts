import { createAction, props } from "@ngrx/store";
import { Movie } from "src/app/models/movie";

//Action Type
export const ADD_MOVIE = '[ADD MOVIE] Movie';

//Action
export const addMovie = createAction(ADD_MOVIE, props<Movie>());
