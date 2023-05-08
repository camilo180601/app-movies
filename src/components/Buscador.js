import React, { useState } from 'react'

export const Buscador = ({listadoState, setListadoState}) => {

    const [busqueda, setBusqueda] = useState('');
    const [notFind, setNotFind] = useState(false);
    
    const searchMovie = (e) => {

        setBusqueda(e.target.value);

        let find_movies = listadoState.filter(movie => {
            return movie.titulo.toLowerCase().includes(busqueda.toLowerCase());
        })

        if(busqueda.length <= 1 || find_movies <= 0){
            find_movies = JSON.parse(localStorage.getItem('movies'));
            setNotFind(true);
        }else{
            setNotFind(false);
        }

        setListadoState(find_movies);
        
    }

    return (
        <div className="search">
            <h3 className="title">Buscador</h3>
            {( notFind === true && busqueda.length <= 1 ) && (
                <span className='not-find'>No se ha encontrado ninguna coincidencia</span>
            )}
            <form>
                <input type="text" id="search_field" name='busqueda' autoComplete='off' onChange={searchMovie}/>
                <button id="search">Buscar</button>
            </form>
        </div>
    )
}
