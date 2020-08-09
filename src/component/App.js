import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCart from './MovieCart';
import {addMovies} from '../actions';

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

  render(){
    
  //  const movies = this.props.store.getState();  []
  const {list} = this.props.store.getState(); // {list:[], favorites:[]}
   console.log('RENDER',this.props.store.getState());
   return (
    <div className="App">
        <Navbar />
        <div className="main">
           <div className="tabs">
              <div className="tab">Movies</div>
              <div className="tab">Favorites</div>
           </div>

          <div className="list">
             {list.map((movie, index) => (
               <MovieCart movie={movie} key={`movies-${index}`}/>
             ))}
          </div>
        </div>
    </div>
   );
  }
  
}

export default App;
