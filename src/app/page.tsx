'use client'
import Image from 'next/image'

import Inicio from './componentes/Inicio.js'
import Conocimientos from './componentes/Conocimientos.js'
import Proyectos from './componentes/Proyectos.js'
import Contacto from './componentes/Contacto.js'
import hamburguesa from './img/png/hamburguesa.png'
import { useState } from 'react'

export default function Home() {

  const [datos, setDatos] = useState('inicio');
  const [seccion, setSeccion] = useState({inicio: true, conocimientos: false, proyectos: false, contacto: false})
  const [menuAbierto, setMenuAbierto] = useState(false)
  
  function cambiarSeccion(elegida: any){
    elegida === 'conocimientos' && setSeccion({inicio: false, conocimientos: true, proyectos: false, contacto: false})
    elegida === 'proyectos' && setSeccion({inicio: false, conocimientos: false, proyectos: true, contacto: false})
    elegida === 'contacto' && setSeccion({inicio: false, conocimientos: false, proyectos: false, contacto: true})
    elegida === 'inicio' && setSeccion({inicio: true, conocimientos: false, proyectos: false, contacto: false})
    
    setMenuAbierto(false)
  }

  function manejarClick(datos: any) {
    setDatos(datos);
    setSeccion(datos);
  }

  function abrirMenu(){
    setMenuAbierto(true)
    console.log('Arbido')
  }

  function colorHambuerguesa(){
    if(seccion.conocimientos){
      return 'color-hambuerguesa-conocimientos';
    }
    if(seccion.proyectos){
      return 'color-hambuerguesa-proyectos';
    }
    if(seccion.contacto){
      return 'color-hambuerguesa-contacto';
    }
    else{
      return ''
    }
  }

  return (
    <main className='main'>

      <div className={`menu-global ${seccion.inicio && `fuera`} ${(!menuAbierto||seccion.inicio) && `fuera-responsive`}`}>  
        <div className='contenedor-menu-global-responsive'>
          <div className='menu-global-inicio' onClick={()=>cambiarSeccion('inicio')}>
            Inicio
          </div>
          <div className={`menu-global-navegacion`}>
            <div className={`menu-global-seccion menu-global-conocimientos ${seccion.conocimientos&&`palabra-elegida`}`}>
                <div className={`seccion-elegida conocimientos-elegido ${seccion.conocimientos?`fondo-elegido`:``}`}></div>
                <div className='seccion-palabra conocimientos-palabra' onClick={()=>cambiarSeccion('conocimientos')}>
                  Conocimientos
                </div>
            </div>

            <div className={`menu-global-seccion menu-global-proyectos ${seccion.proyectos&&`palabra-elegida`}`}>
              <div className={`seccion-elegida proyectos-elegido ${seccion.proyectos?`fondo-elegido`:``}`}></div>
              <div className='seccion-palabra proyectos-palabra' onClick={()=>cambiarSeccion('proyectos')}>
                  Proyectos
              </div>
            </div>

            <div className={`menu-global-seccion menu-global-contacto ${seccion.contacto&&`palabra-elegida`}`}>
              <div className={`seccion-elegida contacto-elegido ${seccion.contacto?`fondo-elegido`:``}`}></div>
              <div className='seccion-palabra contacto-palabra' onClick={()=>cambiarSeccion('contacto')}>
                  Contacto
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='secciones'>
        <div className={`componente-inicio ${!seccion.inicio&&`inicio-fuera`}`}>
          <Inicio onManejarClick={manejarClick} seccion={seccion}/>
        </div>
        <div className={`componente-conocimientos ${!seccion.conocimientos&&`conocimientos-fuera`}`}>
          <Conocimientos />
        </div>
        <div className={`componente-proyectos ${!seccion.proyectos&&`proyectos-fuera`}`}>
          <Proyectos />
        </div>
        <div className={`componente-contacto ${!seccion.contacto&&`contacto-fuera`}`}>
          <Contacto />
        </div>
      </div>

      
      <div className={`contenedor-menu-hamburguesa ${(seccion.inicio||menuAbierto) && `fuera`} ${colorHambuerguesa()}`} onClick={()=>abrirMenu()}>
        <Image className='menu-hamburguesa' src={ hamburguesa } alt='Menu' loading='lazy'/>
      </div>
    
    </main>
  )
}
