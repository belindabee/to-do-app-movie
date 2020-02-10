import React from "react"

class FormInput extends React.Component {
    state = {
        judul : "",
        actor : "",
        sutradara : "",
        tahun : "",
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addNewBook = () => {
        const newMovie = {
            id: 4,
            judul : this.state.judul,
            actor : this.state.actor,
            sutradara : this.state.sutradara,
            tahun : this.state.tahun
        }
        this.props.newBook(newMovie) 
        this.setState({
            judul: "",
            actor: "",
            sutradara: "",
            tahun: "",
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        const { judul, actor, sutradara, tahun } = this.state
        return(
            <div>
                <form>
                    <input type="text" name="judul" placeholder="judul" value={judul}onChange={this.onChange} /> 
                    <input type="text" name="actor" placholder="actor" value={actor} onChange={this.onChange} />
                    <input type="text" name="sutradara" placeholder="sutradara" value={sutradara} onChange={this.onChange} />
                    <input type="text" name="tahun" placeholder="tahun" value={tahun}onChange={this.onChange}  />
                </form>
            </div>
        )
    }
}
export default FormInput