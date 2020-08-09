import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCart from './MovieCart';
import {addMovies,setShowFavorites} from '../actions';

class App extends React.Component {

  componentDidMount(){

    const {store} = this.props;
    store.subscribe(() => {
      console.log('UPDATED');
      this.forceUpdate();
    });
    // make api call
    // dispatch action
    store.dispatch(addMovies(data));

    console.log('STATE:', this.props.store.getState());
  }

  isMovieFavorite = (movie) => {
    const {favorites} = this.props.store.getState();
    const index = favorites.indexOf(movie);

    if(index !== -1)
    {
      // found the movie
      return true;
    }
    return false;
  }


  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavorites(val));
  }

  render(){
    
  //  const movies = this.props.store.getState();  []
  const {list, favorites, showFavorites} = this.props.store.getState(); // {list:[], favorites:[],showFavorites}
   console.log('RENDER',this.props.store.getState());
   const displayMovies = showFavorites ? favorites:list;

   return (
    <div className="App">
        <Navbar />
        <div className="main">
           <div className="tabs">
              <div className={`tab ${showFavorites ? '' : 'active-tabs'}`} onClick={() => this.onChangeTab(false)}>Movies</div>
              <div className={`tab ${showFavorites ? 'active-tabs' : ''}`} onClick={() => this.onChangeTab(true)}>Favorites</div>
           </div>

          <div className="list">
             {displayMovies.map((movie, index) => (
               <MovieCart 
                  movie={movie} 
                  key={`movies-${index}`} 
                  dispatch = {this.props.store.dispatch}
                  isFavorite = {this.isMovieFavorite(movie)}
                />
             ))}
          </div>
          {displayMovies.length === 0 ? <div className="no-movies">No Movies To Display !!!</div> : null}
        </div>
    </div>
   );
  }
  
}

export default App;
