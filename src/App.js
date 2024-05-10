import React,{createContext, useState,useEffect} from 'react';
import Movies from './Movies';


export const MoviesContext = createContext();
function App() {
  const [shows,setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=hero');
        const data = await response.json();
        setShows(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <MoviesContext.Provider value={{ shows }}>
      <>
        <Movies />
      </>
     </MoviesContext.Provider>
  );
}

export default App;
