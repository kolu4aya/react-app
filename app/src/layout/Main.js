import React from 'react'
import Movies from '../components/Movies'
import Search from '../components/Search/search'

// const API_KEY = process.env.REACT_APP_API_KEY;
// console.log(process.env)
class Main extends React.Component {
    state = {
        movies: [],
    }
// componentDidMount() {
//     console.log(process.env)
//     fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
//     .then(resp => resp.json())
//     .then(data => this.setState({movies:data.Search}))
// }

// searchMovies = (str, type = 'all') => {
//     fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !=='all' ? `&type=${type}`: ''}`)
//     .then(resp => resp.json())
//     .then(data => this.setState({movies:data.Search}))
// }
componentDidMount() {
    console.log(process.env)
    fetch(`http://www.omdbapi.com/?apikey=4082564b&s=matrix`)
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