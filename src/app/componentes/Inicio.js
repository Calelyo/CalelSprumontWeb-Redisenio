'use client'
import '../estilosComponentes/inicio.css'
import Image from 'next/image'
import foto from '../img/png/foto-inicio.png'
import botonCV from '../img/png/boton-cv.png'
import styles from '../estilosComponentes/inicio.css'
import { useEffect, useState } from 'react'

export default function Inicio(props){

    const [seccion, setSeccion] = useState(props.seccion)

    useEffect(() => {
        setSeccion(props.seccion);
      }, [props.seccion]);
    
    function enviarConocimientos(){
        props.onManejarClick({inicio: false, conocimientos: true, proyectos: false, contacto: false})
        setSeccion({inicio: false, conocimientos: true, proyectos: false, contacto: false})
    }
    function enviarProyectos(){
        props.onManejarClick({inicio: false, conocimientos: false, proyectos: true, contacto: false})
        setSeccion({inicio: false, conocimientos: false, proyectos: true, contacto: false})
    }
    function enviarContacto(){
        props.onManejarClick({inicio: false, conocimientos: false, proyectos: false, contacto: true})
        setSeccion({inicio: false, conocimientos: false, proyectos: false, contacto: true})
    }

    return(
        <section className='inicio-seccion'>

            <div className={`inicio-mitad-izquierda ${!seccion.inicio && `fuera`}`}>
                <div className='inicio-titulo'>
                    <div className={`inicio-titulo-nombre`}>
                        Calel Sprumont
                    </div>
                    <div className='oferta'>
                        <div className='inicio-titulo-desarrollo'>
                            Desarrollo Front-End
                        </div>
                        <div className='inicio-titulo-diseño'>
                            Diseño UX/UI
                        </div>
                    </div>
                </div>
                <div className={`inicio-foto`}>
                    <Image className='inicio-foto-image' src={ foto } alt='foto Calel Sprumont' loading='lazy'></Image>
                </div>
                <div className='boton-sobre-mi'>
                    Sobre Mí
                </div>
            </div>

            <div className='inicio-mitad-derecha'>
                <div className={`inicio-menu ${!seccion.inicio && `fuera`}`}>
                    <div className='inicio-menu-conocimientos boton-menu' onClick={() => enviarConocimientos()}>
                        Conocimientos
                    </div>
                    <div className='inicio-menu-proyectos boton-menu' onClick={() => enviarProyectos()}>
                        Proyectos
                    </div>
                    <div className='inicio-menu-contacto boton-menu' onClick={() => enviarContacto()}>
                        Contacto
                    </div>
                </div>
                <div className={`inicio-boton-cv ${!seccion.inicio && `fuera`}`}>
                    <Image className='inicio-boton-cv-image' src={ botonCV } alt='Descargar CV' loading='lazy'></Image>
                </div>
            </div>
            
        </section>
    )
}