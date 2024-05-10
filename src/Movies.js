import React,{useContext} from 'react';
import { MoviesContext } from './App';


function Movies(){
  const {shows} = useContext(MoviesContext);
  console.log(shows);
    return(
      <h1>Movies</h1>
    )
}

export default Movies



