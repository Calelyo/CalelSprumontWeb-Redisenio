// 'use client'
import Image from 'next/image'
import '../estilosComponentes/conocimientos.css'
import { useState } from 'react';
import flecha from '../img/png/flecha.png'
import { isJsxOpeningLikeElement, transform } from 'typescript';

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

    const [posicion, setPosicion] = useState(109);
    const numIconos = 3; // número total de iconos
    const anchoIcono = 100; // ancho de cada icono en píxeles
    // const [tamañosIconos, setTamañosIconos] = useState({margenAncho: 32, paddingAncho: 22, margenAlto: 60, paddingAlto: 5})
    const [tamañosIconos, setTamañosIconos] = useState(tamañosIconosResponsive())
    // const anchoContenedor = (anchoIcono + (tamañosIconos.margenAncho*3) + (tamañosIconos.paddingAncho*2)) * numIconos;
    const anchoContenedor = anchoContenedorConocimientos();

    const [iconosDiseño, setIconosDiseño] = useState(conocimientosDiseñoImgRutas);
    const [iconosProgramacion, setIconosProgramacion] = useState(conocimientosProgramacionImgRutas);
    
    function anchoContenedorConocimientos(){
        if(screen.width <= 960){
            return screen.width
        }
        else{
            return (anchoIcono + (tamañosIconos.margenAncho*3) + (tamañosIconos.paddingAncho*2)) * numIconos
        }
    }
    function tamañosIconosResponsive(){
        if(window.screen.width <= 960){
            return {margenAncho: 8, paddingAncho: 26, margenAlto: 22, paddingAlto: 2}
        }
        else{
            return {margenAncho: 32, paddingAncho: 22, margenAlto: 60, paddingAlto: 5}
        }
    }

    function cambiarSeleccion(sel){
        sel === 'd' && setSeccionElegida({ diseño: true, programacion: false })
        sel === 'p' && setSeccionElegida({ diseño: false, programacion: true })

        console.log(window.screen.width)
    }

    function moverDerecha(seccion){
        if(seccion === 'd'){
            const nuevosIconos = [...iconosDiseño.slice(1), iconosDiseño[0]];
            console.log(nuevosIconos)
            setIconosDiseño(nuevosIconos)
        }
        if(seccion === 'p'){
            const nuevosIconos = [...iconosProgramacion.slice(1), iconosProgramacion[0]];
            setIconosProgramacion(nuevosIconos)
        }
        console.log('Mover Izquierda')
    }
    function moverIzquierda(seccion){
        if(seccion === 'd'){
            const nuevosIconos = [iconosDiseño[iconosDiseño.length - 1], ...iconosDiseño.slice(0, -1)];
            // const nuevosIconos = [iconosDiseño.slice(-1)[0], ...iconosDiseño.slice(0, -1)];
            console.log(nuevosIconos)
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

            <div className='conocimientos-titulo-responsive'>
                Conocimientos
            </div>

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
                                {iconosDiseño.map(({ ruta, nombre }, indice) => (                                                      // {transform: `translateX(-${posicion}px)`}
                                    <div key={ nombre } className={`conocimientos-iconos-diseño conocimientos-iconos conocimientos-iconos-${nombre} ${indice===2&&`en-medio`}`} style={{margin: `${tamañosIconos.margenAlto}px ${tamañosIconos.margenAncho}px`, padding: `${tamañosIconos.paddingAlto}px ${tamañosIconos.paddingAncho}px`}}>
                                        <Image className='conocimientos-icono-image' key={ nombre } src={ ruta } alt={ nombre } loading='lazy'/>
                                    </div>
                                ))}
                        </div>

                        <div className='conocimientos-flechas conocimientos-flechas-diseño'>
                            <div className='conocimientos-flecha-izquierda-conteneder' onClick={ ()=>moverIzquierda('d') }>
                                <Image className='conocimientos-flecha conocimientos-flecha-diseño conocimientos-flecha-izquierda' src={ flecha } alt='Flecha Izquierda' loading='lazy' />
                            </div>
                            <div className='conocimientos-flecha-derecha-conteneder' onClick={ ()=>moverDerecha('d') }>
                                <Image className='conocimientos-flecha conocimientos-flecha-diseño conocimientos-flecha-derecha' src={ flecha } alt='Flecha Derecha' loading='lazy' />
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
                                {iconosProgramacion.map(({ ruta, nombre }, indice) => (
                                    <div key={ nombre } className={`conocimientos-iconos-programacion conocimientos-iconos conocimientos-iconos-${nombre} ${indice===3&&`en-medio`}`} style={{transform: `translateX(${posicion}px)`, margin: `${tamañosIconos.margenAlto}px ${tamañosIconos.margenAncho}px`, padding: `${tamañosIconos.paddingAlto}px ${tamañosIconos.paddingAncho}px`}}>
                                        <Image className='conocimientos-icono-image' key={ nombre } src={ ruta } alt={ nombre } title={ nombre }loading='lazy' />
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