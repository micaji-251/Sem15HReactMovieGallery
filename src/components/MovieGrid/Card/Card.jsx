import React from 'react'
import './Card.css'

export const Card = ({pelis}) => {
    console.log(pelis);
    const {img,titulo,genero,descripcion} = pelis;

    return (
        <>
            <div className='posterContainer'>
                <img src={img} alt={titulo} />
                <div className="posterDescription">
                    <p className="movieTitle">{titulo}</p>
                    <p className="movieDes"><span className='movieTitle'>Genero: </span>{genero}</p>
                    <p className="movieDes"><span className='movieTitle'>Descripción: </span>{descripcion}</p>
                </div>
            </div>
        </>
  )
}


