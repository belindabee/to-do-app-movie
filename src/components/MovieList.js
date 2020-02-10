import React from "react"
import "../style/BookList.css"

const MovieList = (props) => {
    let movies = props.movies.map(item =>
        <div className="card-movie" key={item.id}>
            <h1>Judul</h1>
            <p>{item.judul}</p>
            <div className="movie-detail">
            <p>Artis : {item.author}</p>
            <div className="movie-detail__product">
            <p>Sutradara : {item.sutradara}</p>
            <p>Tahun : {item.tahun}</p>
            </div>
            <button onClick={() => props.add(item.id)}>add to favorite</button>
            </div>
        </div>
    )
    return(
        <div>
            <h1 className="product-container">My Movie List</h1>
            {movies}
        </div>
    )
}
export default MovieList