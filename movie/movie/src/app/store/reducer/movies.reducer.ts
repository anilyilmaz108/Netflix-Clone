import { createReducer, on } from "@ngrx/store";
import { Movie } from "src/app/models/movie";
import { addMovie } from "../state/movies.state";

//State Type
export interface IState {
    data: Movie[];
}
 
//Initial State
export const initialMovieState: IState = {
    data: Array<Movie>()
}

//Reducer
export const movieReducer = createReducer(initialMovieState,
    on(addMovie, (state, movie) => {
        const newState: IState = {
            data: [...state.data, movie]
        }
        return newState;
    }),
);