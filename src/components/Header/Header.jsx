
import React from 'react'

export const Header = () => {
  return (
    <header className='flex'>
      <div className='logoContainer'>
        <img src="https://wwe.cinecalidad.gg/wp-content/themes/Cinecalidad/assets/img/logo.svg?v=1aaaaaa.0" alt='Logo Cine Calidad' />
      </div>

      <div className='inputContainer'>
        <input type="search" placeholder='Buscar Película' className='searchInput' />
        <button className='btnBuscar'>Buscar</button>
      </div>
    </header>
  )
}
