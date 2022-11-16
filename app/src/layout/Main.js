import React from 'react'
import Movies from '../components/Movies'
import Search from '../components/Search/search'

class Main extends React.Component {
    state = {
        movies: [],
    }
componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=4082564b&s=matrix')
    .then(resp => resp.json())
    .then(data => this.setState({movies:data.Search}))
}

searchMovies = (str, type = 'all') => {
    fetch(`http://www.omdbapi.com/?apikey=4082564b&s=${str}${type !=='all' ? `&type=${type}`: ''}`)
    .then(resp => resp.json())
    .then(data => this.setState({movies:data.Search}))
}
    render(){
        const {movies} = this.state;
          return <main className = 'main'>
            <Search searchMovies = {this.searchMovies}/>
            {
                movies.length ?  (<Movies movies = {this.state.movies} />) : <h3>Загрузка...</h3>
            }
                   
                </main>
    }
    }
  
export default Main