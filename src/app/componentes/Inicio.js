'use client'
import '../estilosComponentes/inicio.css'
import Image from 'next/image'
import foto from '../img/png/foto-inicio.png'
import botonCV from '../img/png/boton-cv.png'
import cv from '../pdfs/CalelSprumontCurriculumVitae2022.pdf'
import flechaverde from '../img/png/flechaverde.png'
import styles from '../estilosComponentes/inicio.css'
import { useEffect, useState } from 'react'

export default function Inicio(props){

    const [seccion, setSeccion] = useState(props.seccion)
    const [sobreMiAbierto, setSobreMiAbierto] = useState(false)

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

    function sobreMi(){
        setSobreMiAbierto(!sobreMiAbierto)
    }

    return(
        <section className='inicio-seccion'>
            {/* ${!seccion.inicio && `fuera`} */}
            <div className={`inicio-mitad-izquierda`}>
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
                <div className={`contenedor-foto-sobre-mi ${sobreMiAbierto&&`sobre-mi-abierto`}`}>
                    <div className={`inicio-foto`}>
                        <Image className={`inicio-foto-image ${sobreMiAbierto&&`sobre-mi-abierto`}`} src={ foto } alt='foto Calel Sprumont' loading='lazy'></Image>
                    </div>
                    <div className={`boton-sobre-mi ${sobreMiAbierto&&`sobre-mi-abierto`}`} onClick={()=>sobreMi()}>
                        Sobre Mí
                    </div>
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
                    <a href={ cv } title='curriculum vitae' target='_blank' rel='noopener noreferrer'>
                        <Image className='inicio-boton-cv-image' src={ botonCV } alt='Descargar CV' loading='lazy'></Image>
                    </a>
                </div>
                

                <div className={`contenedor-sobre-mi ${sobreMiAbierto&&`sobre-mi-abierto`}`}>
                    <div className='sobre-mi-texto'>
                        Empecé a estudiar Diseño Visual, el concepto de diseño fue algo que marcó mi vida.
                        Por las vueltas de la vida me desvié de ese camino para incursionar en el mundo de la programación.
                        Casi sin darme cuenta me decanté por el Front End, fue ahí donde ambos caminos convergieron
                        y encontré un punto donde ambas pasiones, el diseño de comunicación y la programación, conviven.
                    </div>
                    <div className='sobre-mi-flecha' onClick={()=>sobreMi()}>
                        <Image className='sobre-mi-flecha-image' src={flechaverde} alt='Flecha cerrar' loading='lazy' />
                    </div>
                </div>

            </div>
            
        </section>
    )
}