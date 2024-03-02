import React from 'react'
import './MovieGrid.css'
import { Card } from './Card';

export const MovieGrid = ({pelis}) => {
  console.log(pelis);
  return (
    <>
        <main>
            <div className="grid">
              {pelis.map((peli)=>(
                <Card key={peli.id} peli={peli}/>
              ))
              }
              
            </div>
        </main>
    </>
  )
}
