'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

import Inicio from './componentes/Inicio.js'
import Conocimientos from './componentes/Conocimientos.js'
import Proyectos from './componentes/Proyectos.js'
import Contacto from './componentes/Contacto.js'
import hamburguesa from './img/png/hamburguesa.png'
import { useState } from 'react'

// const inter = Inter({ subsets: ['latin'] })
const none = 'none'
const flex = 'flex'

export default function Home() {

  const [datos, setDatos] = useState('inicio');
  // const [seccion, setSeccion] = useState({inicio: true, conocimientos: false, proyectos: false, contacto: false})
  // const [menuAbierto, setMenuAbierto] = useState(false)

  // TEMPORAL
  const [seccion, setSeccion] = useState({inicio: true, conocimientos: false, proyectos: false, contacto: false})
  const [menuAbierto, setMenuAbierto] = useState(false)
  // TEMPORAL

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
    <main className='main'> {/* className={styles.main} */}

      <div className={`menu-global ${seccion.inicio && `fuera`} ${(!menuAbierto||seccion.inicio) && `fuera-responsive`}`}>  
      {/* ${!menuAbierto && `fueraResponsive`} */}
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

      <div className='secciones'>
        <div className={`componente-inicio`} style={{display: seccion.inicio?flex:none}}>
        {/* ${!seccion.inicio && `fuera`} */}
          <Inicio onManejarClick={manejarClick} seccion={seccion}/>
        </div>
        <div className={`componente-conocimientos`} style={{display: seccion.conocimientos?flex:none}}>
        {/* display: seccion.conocimientos?flex:none */}
          <Conocimientos />
        </div>
        <div className={`componente-proyectos`} style={{display: seccion.proyectos?flex:none}}>
          <Proyectos />
        </div>
        <div className={`componente-contacto`} style={{display: seccion.contacto?flex:none}}>
          <Contacto />
        </div>
      </div>

      
    <div className={`contenedor-menu-hamburguesa ${(seccion.inicio||menuAbierto) && `fuera`} ${colorHambuerguesa()}`} onClick={()=>abrirMenu()}>
      <Image className='menu-hamburguesa' src={ hamburguesa } alt='Menu' loading='lazy'/>
    </div>

      
      {/* <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>

      <div className={styles.grid}>
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Docs <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Templates <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Deploy <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  )
}
