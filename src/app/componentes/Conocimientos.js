// 'use client'
import Image from 'next/image'
import '../estilosComponentes/conocimientos.css'
import { useState } from 'react';
import flecha from '../img/png/flecha.png'
import { transform } from 'typescript';

const conocimientosDiseñoImg = require.context('../img/png/conocimientos/diseño', true);
const conocimientosProgramacionImg = require.context('../img/png/conocimientos/programacion', true);
const conocimientosDiseñoImgKeys = conocimientosDiseñoImg.keys();
const conocimientosProgramacionImgKeys = conocimientosProgramacionImg.keys();


const conocimientosDiseñoImgRutas = conocimientosDiseñoImgKeys.map(key => {
    const imgRuta = conocimientosDiseñoImg(key);
    const nombreClase = key.substr(2).replace('.png', '');
    return { ruta: imgRuta, nombre: nombreClase }
})
const conocimientosProgramacionImgRutas = conocimientosProgramacionImgKeys.map(key => {
    const imgRuta = conocimientosProgramacionImg(key);
    const nombreClase = key.substr(2).replace('.png', '');
    return { ruta: imgRuta, nombre: nombreClase }
})

export default function Conocimientos(){

    const [seccionElegida, setSeccionElegida] = useState({ diseño: true, programacion: false })

    const [posicion, setPosicion] = useState(0);
    const numIconos = 3; // número total de iconos
    const anchoIcono = 110+(24*2)+(60*2); // ancho de cada icono en píxeles
    const anchoContenedor = numIconos * anchoIcono;
    const [iconosDiseño, setIconosDiseño] = useState(conocimientosDiseñoImgRutas);
    const [iconosProgramacion, setIconosProgramacion] = useState(conocimientosProgramacionImgRutas);
    

    function cambiarSeleccion(sel){
        sel === 'd' && setSeccionElegida({ diseño: true, programacion: false })
        sel === 'p' && setSeccionElegida({ diseño: false, programacion: true })
    }

    function moverIzquierda(seccion){
        if(seccion === 'd'){
            const nuevosIconos = [...iconosDiseño.slice(1), iconosDiseño[0]];
            setIconosDiseño(nuevosIconos)
        }
        if(seccion === 'p'){
            const nuevosIconos = [...iconosProgramacion.slice(1), iconosProgramacion[0]];
            setIconosProgramacion(nuevosIconos)
        }
        console.log('Mover Izquierda')
    }
    function moverDerecha(seccion){
        if(seccion === 'd'){
            const nuevosIconos = [iconosDiseño[iconosDiseño.length - 1], ...iconosDiseño.slice(0, -1)];
            setIconosDiseño(nuevosIconos)
        }
        if(seccion === 'p'){
            const nuevosIconos = [iconosProgramacion[iconosProgramacion.length - 1], ...iconosProgramacion.slice(0, -1)];
            setIconosProgramacion(nuevosIconos)
        }
        console.log('Mover Derecha')
    }

    return(
        <section className='conocimientos-seccion'>
            <div className='conocimientos-mitad-izquierda'>
                <div className='conocimientos-seleccion'>
                    <div className={`conocimientos-seleccion-diseño ${seccionElegida.diseño && `conocimientos-seccion-elegida`}`} onClick={ ()=>cambiarSeleccion('d') }>
                        Diseño
                    </div>
                    <div className={`conocimientos-seleccion-programacion ${seccionElegida.programacion && `conocimientos-seccion-elegida`}`} onClick={ ()=>cambiarSeleccion('p') }>
                        Programación
                    </div>
                </div>
            </div>

            <div className='conocimientos-mitad-derecha'>
                <div className={`conocimientos-contenedor-info conocimientos-diseño-mitad-derecha ${!seccionElegida.diseño && `conocimientos-fuera`}`} style={{width: anchoContenedor}}>

                    <div className='conocimientos-texto-diseño'>
                        Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
                    </div>

                    <div className='contenedor-flechas'>
                        <div className='conocimientos-contenedor-iconos'>
                                {iconosDiseño.map(({ ruta, nombre }) => (
                                    <div key={ nombre } className={`conocimientos-iconos conocimientos-iconos-${nombre}`} style={{transform: `translateX(-${posicion}px)`}}>
                                        <Image className='conocimientos-icono-image' key={ nombre } src={ ruta } alt={ nombre } loading='lazy'/>
                                    </div>
                                ))}
                        </div>

                        <div className='conocimientos-flechas conocimientos-flechas-diseño'>
                            <div className='conocimientos-flecha-izquierda-conteneder' onClick={ ()=>moverIzquierda('d') }>
                                <Image className='conocimientos-flecha conocimientos-flecha-programacion conocimientos-flecha-izquierda' src={ flecha } alt='Flecha Izquierda' loading='lazy' />
                            </div>
                            <div className='conocimientos-flecha-derecha-conteneder' onClick={ ()=>moverDerecha('d') }>
                                <Image className='conocimientos-flecha conocimientos-flecha-programacion conocimientos-flecha-derecha' src={ flecha } alt='Flecha Derecha' loading='lazy' />
                            </div>
                        </div>
                    </div>

                </div>

                <div className={`conocimientos-contenedor-info conocimientos-programacion-mitad-derecha ${!seccionElegida.programacion && `conocimientos-fuera`}`} style={{width: anchoContenedor}}>

                    <div className='conocimientos-texto-programacion'>
                        Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
                    </div>

                    <div className='contenedor-flechas'>
                        <div className='conocimientos-contenedor-iconos'>
                                {iconosProgramacion.map(({ ruta, nombre }) => (
                                    <div key={ nombre } className={`conocimientos-iconos conocimientos-iconos-${nombre}`} style={{transform: `translateX(+${posicion}px)`}}>
                                        <Image className='conocimientos-icono-image' key={ nombre } src={ ruta } alt={ nombre } loading='lazy' />
                                    </div>
                                ))}
                        </div>

                        <div className='conocimientos-flechas conocimientos-flechas-programacion'>
                            <div className='conocimientos-flecha-izquierda-conteneder' onClick={ ()=>moverIzquierda('p') }>
                                <Image className='conocimientos-flecha conocimientos-flecha-programacion conocimientos-flecha-izquierda' src={ flecha } alt='Flecha Izquierda' loading='lazy' />
                            </div>
                            <div className='conocimientos-flecha-derecha-conteneder ' onClick={ ()=>moverDerecha('p') }>
                                <Image className='conocimientos-flecha conocimientos-flecha-programacion conocimientos-flecha-derecha' src={ flecha } alt='Flecha Derecha' loading='lazy' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}