import {combineReducers} from 'redux';

import {
    ADD_MOVIES, 
    ADD_TO_FAVORITES, 
    REMOVE_FROM_FAVORITES, 
    SET_SHOW_FAVORITES,
    ADD_SEARCH_RESULT,
    ADD_MOVIE_TO_LIST
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
        case ADD_MOVIE_TO_LIST:
            return{
                ...state,
                list: [action.movie, ...state.list]
            }
        default:
            return state;
    }
}
const initialSearchState = {
   result: {},
   showSearchResults : false,
}

export function search(state = initialSearchState, action)
{
    // ADD_SEARCH_RESULT
    switch(action.type) {
        case ADD_SEARCH_RESULT:
            return {
                ...state,
                result:action.movie,
                showSearchResults : true
            }
        case ADD_MOVIE_TO_LIST:
            return{
                ...state,
                showSearchResults : false
            }
        default:
            return state;
    }
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