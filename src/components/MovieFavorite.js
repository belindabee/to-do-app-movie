import React from"react"


const MovieFavorite = (props) => {
    let list = props.favorites.map(item =>
        <div className="favorite-card" key={item.id}>
            <h4>{item.judul}</h4>
            <p>Artis : {item.actor}</p>
            <div className="favorite-detail">
                <p>Sutradara : {item.sutradara}</p>
                <p>Tahun : {item.tahun}</p>
                <button onClick={() => props.remove(item.id)}>remove from favorite</button>
            </div>
        </div>
        )
    return(
        <div>
            <h2>My Favorite Movie</h2>
            {list}
        </div>
    )
}
export default MovieFavorite;
