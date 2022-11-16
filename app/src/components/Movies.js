import Movie from "./Movie"

function Movies (props) {
    const {movies} = props;
    console.log(movies)
    return <div className="movies">
        {movies.length ? movies.map(movie => 
            <Movie key={movie.imdbID} {...movie} />
        ): <h3>Таких фильмов не найдено</h3>}
    </div>

}

export default Movies