import React from 'react'
import './Card.css'

export const Card = ({peli}) => {

    const {img,titulo,genero,descripcion} = peli;

    return (
        <>
            <div className='posterContainer'>
                <img src={img} alt={titulo} />
                <div className="posterDescription">
                    <p className="movieTitle movieBold">{titulo}</p>
                    <p className="movieDes"><span className='movieBold'>Genero: </span>{genero}</p>
                    <p className="movieDes"><span className='movieBold'>Descripción: </span>{descripcion}</p>
                </div>
            </div>
        </>
  )
}


