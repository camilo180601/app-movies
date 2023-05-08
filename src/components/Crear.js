import React, { useState } from 'react'
import { saveStorage } from '../helpers/saveStorage';

export const Crear = ({setListadoState}) => {

    const tituloComponente = "Añadir pelicula";

    const [movieState, setMovieState] = useState({
        titulo: '',
        descripcion: ''
    });

    const {titulo, descripcion} = movieState

    const captureData = (e) => {
        e.preventDefault();

        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        let movie = {
            id: new Date().getTime(),
            titulo: titulo,
            descripcion: descripcion
        };

        //Guardar estado
        setMovieState(movie);
        setListadoState(elements => {
            return [...elements, movie]
        });

        saveStorage("movies", movie);
        
    }

    
    return (
        <div className="add">
            <h3 className="title">{tituloComponente}</h3>
            <strong>
                {(movieState.titulo && movieState.descripcion) && "Has creado la pelicula: "+titulo}
            </strong>
            <form onSubmit={captureData}>
                <input type="text" id="titulo" name='titulo' placeholder="Titulo" />
                <textarea id="descripcion" name='descripcion' placeholder="Descripción"></textarea>
                <input type="submit" id="save" value="Guardar" />
            </form>
        </div>
    )
}
