import React from "react";
import MovieList from "./components/MovieList"
import MovieFavorite from "./components/MovieFavorite"
import FormInput from "./components/FormInput"

class App extends React.Component {
    state = {
    movies : [
      {
        id : 1,
        judul: "avengers : infinity wars",
        actor: "Robert Downey jr",
        sutradara: "Anthony Russo",
        tahun: 2018
      },
      {
        id: 2,
        judul : "Aquaman",
        actor : "Jason Mamoa",
        sutradara: "James Wan",
        tahun: 2018
      },
      {
        id: 3,
        judul: "fantastic Beast",
        actor: "Eddie Redmayne",
        sutradara: "David Yates",
        tahun: 2018
      }
    ],
    favorites: []
  }

  addNewMovie = data => {
    this.setState({
      movie: [data, ...this.state.movie]
    })
  }

  removeFromFavorite = id => {
    this.setState({
      favorites: this.state.favorites.filter(item =>
        item.id !== id)
    })
  }


  addToFavorite = id => {
    const data = this.state.movies.find(item =>
      item.id === id);
      this.setState({
        favorites: [...this.state.favorites, data]
      })

      alert('Berhasil menambahkan ke favorite')
  }

  render() {
    return(
      <div className="App">
        <FormInput newMovie={this.addNew} />
        <MovieList movies={this.state.movies} add={this.addToFavorite} />
        <MovieFavorite favorites={this.state.favorites} remove={this.removeFromFavorite} />
      </div>
    )
  }
}
export default App;