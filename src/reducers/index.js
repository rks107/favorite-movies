import {combineReducers} from 'redux';

import {
    ADD_MOVIES, 
    ADD_TO_FAVORITES, 
    REMOVE_FROM_FAVORITES, 
    SET_SHOW_FAVORITES
} from '../actions';

const initialMoviesState = {
    list: [],
    favorites: [],
    showFavorites: false
}
export function movies (state = initialMoviesState, action) {
    switch(action.type) {
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }
        case ADD_TO_FAVORITES:
            return {
                ...state,
                favorites:[action.movie, ...state.favorites]
            }
        case REMOVE_FROM_FAVORITES:
            const filteredArray = state.favorites.filter(
                movie => movie.Title !== action.movie.Title
            );
            return {
                ...state,
                favorites: filteredArray
            }
        case SET_SHOW_FAVORITES:
            return {
                ...state,
                showFavorites: action.val
            }
        default:
            return state;
    }
}
const initialSearchState = {
   result: {}
}

export function search(state = initialSearchState, action)
{
    return state;
}

export default combineReducers({
    movies,
    search
});

// const initialRootReducer = {
//     movies: initialMoviesState,
//     search: initialSearchState
// }

// export default function rootReducer(state = initialRootReducer, action)
// {
//     return {
//         movies: movies(state.movies, action),
//         search: search(state.search, action)
//     }
// }


    // if(action.type === ADD_MOVIES) {
    //     return {
    //         ...state,
    //         list: action.movies
    //     }
    // }

    // return state;