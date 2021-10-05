import './App.css';
import { useState } from 'react';
import Movie from  './component/Movie';

const URL='http://www.omdbapi.com/?apikey=a681eecb&'

const App = () => {
  const[movies, setMovies]= useState([]);
  const[title, setTitle] = useState('');
  const[details, setDetails] = useState('')

  const handleSearch = e =>{
    e.preventDefault()
    if(title!==''){
      getMovies();
    }
    else alert('please enter some thing');
  }

  const getMovies = async() =>{
    const response = await fetch(URL+'s=' +title);
    const data = await response.json();
    setMovies(data.Search)
  }

  const getDetails = async(id) => {
    const response = await fetch(URL+ 'i=' +id);
    const data = await response.json();
    setDetails(data)
  }
  return (
    <>
    <form className="form" onSubmit={handleSearch}>
      <input type= "text" className="input inputSearch" placeholder="search movie..." value={title} onChange={(e) => setTitle(e.target.value)}/>
      <button type="submit" className="input">search<i classname="fa fa-serch"></i></button>
    </form>
    { details && <div className="OnClickDetail">
      <h2>Movie Name:- {details.Title}</h2>
      <p>Movie Runtime:- {details.Runtime}</p>
      <p>Movie Rating:- {details.Rated}</p>
      <p>Plot Details:- {details.Plot}</p>
    </div> }
    <div>
      <ul className="ul">
        <p><h2> See your Search Result Here:</h2></p>
        {movies.map(movie => <Movie movie={movie} key={movie.imdbID} details={getDetails}/>) }
      </ul>
    </div>
    </>

  );
}

export default App;