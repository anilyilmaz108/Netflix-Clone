import { createReducer, on } from "@ngrx/store";
import { languageChanged } from "./language.action";
import { initialLanguage } from "./language.state";


const _languageReducer = createReducer(
    initialLanguage,
    on(languageChanged, (state,action) => {
        return {
            ...state,
            language: action.action == 'en' ? state.language = 'en-US' : state.language = 'tr-TR'
        }
    })
    )


    export function languageReducer(state:any, action:any)
    {
        return _languageReducer(state, action);
    }