import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Listado = ({listadoState, setListadoState}) => {

    const [edit, setEdit] = useState(0);

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = () => {
        let movies = JSON.parse(localStorage.getItem('movies'));
        setListadoState(movies);
        return movies;
    }

    const deleteMovie = (id) => {
        let movies_storage = getMovies();
        let new_movies = movies_storage.filter(movie => movie.id !== parseInt(id));
        setListadoState(new_movies);
        localStorage.setItem('movies', JSON.stringify(new_movies));
    }

    return (
        <>
            {listadoState !== null ? 
                listadoState.map(movie => {
                    return(
                        <article className="peli-item" key={movie.id}>
                            <h3 className="title">{movie.titulo}</h3>
                            <p className="description">{movie.descripcion}</p>

                            <button className="edit" onClick={ () => {setEdit(movie.id)} }>Editar</button>
                            <button className="delete" onClick={ () => {deleteMovie(movie.id)} }>Borrar</button>
                            {edit === movie.id && (
                                <Editar movie={movie} getMovies={getMovies} setEdit={setEdit} setListadoState={setListadoState}/>
                            )}
                        </article>
                    );
                })
            : <h2>No hay Peliculas!!</h2>
            }
        </>
    )
}
