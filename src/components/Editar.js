import React from 'react'

export const Editar = ({movie, getMovies, setEdit, setListadoState}) => {

    const titulo_componente = "Editar pelicula";

    const captureEdit = (e, id) => {
        e.preventDefault();

        let target = e.target;
        const movies_storage = getMovies();
        const index = movies_storage.findIndex(movie => movie.id === id);

        let movie_update = {
            id, 
            titulo: target.titulo.value,
            descripcion: target.descripcion.value
        };

        movies_storage[index] = movie_update;
        localStorage.setItem('movies', JSON.stringify(movies_storage));
        setListadoState(movies_storage);
        setEdit(0);
    }

  return (
    <div>
        <h3>{titulo_componente}: {movie.titulo}</h3>
        <form onSubmit={e => captureEdit(e, movie.id)}>
            <input name='titulo' defaultValue={movie.titulo}/>
            <br></br>
            <hr></hr>
            <br></br>
            <textarea name='descripcion' defaultValue={movie.descripcion}/>
            <br></br>
            <hr></hr>
            <br></br>
            <input type='submit' value="Actualizar"/>
        </form>
    </div>
  )
}
