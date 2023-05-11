// 'use client'
import Image from 'next/image'
import '../estilosComponentes/conocimientos.css'
import { useEffect, useState } from 'react';
import flecha from '../img/png/flecha.png'

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
    
    const esCliente = typeof window === 'object';
    
    const [tamañosIconos, setTamañosIconos] = useState(()=>{
        const movil = esCliente && window.innerWidth <= 999;
        
        const iconosMovil = {margenAncho: 8, paddingAncho: 26, margenAlto: 22, paddingAlto: 2};
        const iconosMonitor = {margenAncho: 32, paddingAncho: 22, margenAlto: 60, paddingAlto: 5};
        
        return movil ? iconosMovil : iconosMonitor
        
    })
    const [anchoContenedor, setAnchoContenedor] = useState(()=>{
        const movil = esCliente && window.innerWidth <= 999;
        
        const contenedorMovil = esCliente && screen.width;
        const contenedorMonitor = (anchoIcono + (tamañosIconos.margenAncho*3) + (tamañosIconos.paddingAncho*2)) * numIconos;
        
        return movil ? contenedorMovil : contenedorMonitor
        
    });

    const [iconosDiseño, setIconosDiseño] = useState(conocimientosDiseñoImgRutas);
    const [iconosProgramacion, setIconosProgramacion] = useState(conocimientosProgramacionImgRutas);

    const [tamañoPantalla, setTamañoPantalla] = useState({ width: esCliente&&window.innerWidth, height: esCliente&&window.innerHeight });

    function anchoContenedorConocimientos(){
        if(tamañoPantalla.width <= 999){
            setAnchoContenedor(screen.width)
        }
        else{
            setAnchoContenedor((anchoIcono + (tamañosIconos.margenAncho*3) + (tamañosIconos.paddingAncho*2)) * numIconos)
        }
    }
    function tamañosIconosResponsive(){
        if(tamañoPantalla.width <= 999){
            setTamañosIconos({margenAncho: 8, paddingAncho: 26, margenAlto: 22, paddingAlto: 2})
        }
        else{
            setTamañosIconos({margenAncho: 32, paddingAncho: 22, margenAlto: 60, paddingAlto: 5})
        }
    }

    useEffect(() => {
        const handleResize = () => {
            setTamañoPantalla({ width: window.innerWidth, height: window.innerHeight });
            console.log('handleResize')
        };
        
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      });

      useEffect(()=>{
        anchoContenedorConocimientos();
        tamañosIconosResponsive();
        console.log('tamañoPantalla')
    }, [tamañoPantalla])

    function cambiarSeleccion(sel){
        sel === 'd' && setSeccionElegida({ diseño: true, programacion: false })
        sel === 'p' && setSeccionElegida({ diseño: false, programacion: true })
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
            setIconosDiseño(nuevosIconos)
        }
        if(seccion === 'p'){
            const nuevosIconos = [iconosProgramacion[iconosProgramacion.length - 1], ...iconosProgramacion.slice(0, -1)];
            setIconosProgramacion(nuevosIconos)
        }
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
                    Estudiando Diseño Visual entendí que, ciertamente, el diseño es comunicación. Desde que entendí esto, 
                    me acompaña en mi vida en todo momento. Día a día, ya sea en las calles o en las pantallas, no puedo 
                    evitar pensar y analizar el por qué de esas decisiones, ya sea en un diseño visual, en una interfaz, 
                    en un ecosistema o en un diseño de experiencia, cada decisión tiene una razón de ser y buscarla se ha convertido 
                    en parte de mi identidad.
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
                        Siempre tuve interés en la programación, pero no fue hasta que hice el curso de Argentina Programa que 
                        no me dispuse a tomármelo en serio. Imaginaba que al entrar en este mundo mi curiosidad se iba a despertar, 
                        pero la intensidad con la que lo hizo me tomó por sorpresa. El interés no deja de crecer y la idea de sentarme 
                        y programar es una motivación importante para mi crecimiento personal. Pensar en dedicarme a algo que puede ser 
                        tanto trabajo como pasatiempo hace que la etimología de la palabra trabajo pierda totalmente su sentido.
                    </div>

                    <div className='contenedor-flechas'>
                        <div className='conocimientos-contenedor-iconos'>
                                {iconosProgramacion.map(({ ruta, nombre }, indice) => (
                                    <div key={ indice } className={`conocimientos-iconos-programacion conocimientos-iconos conocimientos-iconos-${nombre} ${indice===3&&`en-medio`}`} style={{transform: `translateX(${posicion}px)`, margin: `${tamañosIconos.margenAlto}px ${tamañosIconos.margenAncho}px`, padding: `${tamañosIconos.paddingAlto}px ${tamañosIconos.paddingAncho}px`}}>
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