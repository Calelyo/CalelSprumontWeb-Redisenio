import '../estilosComponentes/proyectos.css'
import Image from 'next/image'
import flecha from '../img/png/flecha.png'
import github from '../img/png/contacto/githubblanco.png'
import web from '../img/png/contacto/webico.png'
import { ProyectosUtilidad } from '../utilidad/ProyectosUtilidad.js'
import { use, useState } from 'react'

export default function Proyectos(){

    const [proyectosObj, setProyectosObj] = useState(ProyectosUtilidad)
    const [idProyectoActual, setIdProyectoActual] = useState(proyectosObj[0].id)

    function cambiarProyecto(direccion){
        
        // return {
        //     ...proyecto,
        //     seleccionada: false
        // }

        proyectosObj.forEach((proyecto, index) => {
            // console.log( { ...proyecto,seleccionada: false } );
        })

        // let idNueva = idProyectoActual;
        let idNueva = direccion;
        (direccion === 'd' && idProyectoActual != proyectosObj.length) && (idNueva = idProyectoActual + 1);
        (direccion === 'd' && idProyectoActual === proyectosObj.length) && (idNueva = 1);
        (direccion === 'i' && idProyectoActual != 1) && (idNueva = idProyectoActual - 1);
        (direccion === 'i' && idProyectoActual === 1) && (idNueva = proyectosObj.length);

        setProyectosObj(proyectosTemp => {

            return proyectosTemp.map((proyecto, index) => {
                if(proyecto.seleccionada){
                    proyecto.seleccionada = false
                }
                if(proyecto.id === idNueva){
                    proyecto.seleccionada = true
                    setIdProyectoActual(proyecto.id)
                }
                return proyecto;
            })
        })

     }

     function leftProyecto(id){
        const distancia = 25
        if(id === idProyectoActual){
            return distancia;
        }
     }
    
    return(
        <section className='proyectos-seccion'>
            
            <div className='proyectos-titulo-responsive'>
                Proyectos
            </div>

            <div className='proyectos-mitad-izquierda'>
                    {proyectosObj.map((proyecto) => (
                        <div className={`proyectos-info-actual ${!proyecto.seleccionada && `fuera`}`}>
                            <div className='proyectos-titulo-actual'>
                                {proyecto.titulo}
                            </div>
                            <div className='proyectos-descripcion-actual'>
                                {proyecto.descripcion}
                            </div>
                            <div className='proyectos-links-actual'>
                                {proyecto.web != '' && 
                                <div className='proyectos-web-actual'>
                                    <a href={proyecto.web} target='_blank' rel='noopener noreferrer'>
                                        <Image className='img-actual web-actual-img' src={ web } alt={ proyecto.web } loading='lazy' />
                                    </a>
                                </div>
                                }
                                {proyecto.github != '' && 
                                <div className='proyectos-github-actual'>
                                    <a href={proyecto.github} target='_blank' rel='noopener noreferrer'>
                                        <Image className='img-actual github-actual-img' src={ github } alt={ proyecto.github } loading='lazy' />
                                    </a>
                                </div>
                                }
                            </div>
                        </div>
                    ))}
            </div> 

            <div className='proyectos-mitad-derecha'>
                <div className='contenedor-flechas'>
                    <div className='proyectos-contenedor-proyectos'>

                        {/* AGREGAR idProyectoActual AL AGREGAR PROYECTO (temporal) */}
                        <div className={`proyectos-contenedor-map ${idProyectoActual===2&&`proyecto-dos`} ${idProyectoActual===3&&`proyecto-tres`}`}>

                            {proyectosObj.map((proyecto)=>(
                                // style={{left: proyecto.id!=1?(proyecto.id*250):25}}
                                <div className='proyectos-proyectos-individuales'>
                                    <Image className={`proyecto-image `} src={ proyecto.imagen } alt={ proyecto.titulo } loading='lazy' />
                                </div>
                            ))}

                        </div>

                        <div className='proyectos-tres-puntos'>

                            {proyectosObj.map(( { seleccionada }, indice ) => (
                                <div key={ indice } className={ `proyectos-puntos ${seleccionada && `punto-elegido`}`} onClick={ ()=>cambiarProyecto(indice+1) }>
                                </div>
                            ))}

                        </div>
                    </div>
                    
                    <div className='proyectos-flechas proyectos-flechas-diseño'>
                        <div className='proyectos-flecha-izquierda-conteneder' onClick={ ()=>cambiarProyecto('i') }>
                                <Image className='proyectos-flecha proyectos-flecha-diseño proyectos-flecha-izquierda' src={ flecha } alt='Flecha Izquierda' loading='lazy' />
                        </div>
                        <div className='proyectos-flecha-derecha-conteneder' onClick={ ()=>cambiarProyecto('d') }>
                                <Image className='proyectos-flecha proyectos-flecha-diseño proyectos-flecha-derecha' src={ flecha } alt='Flecha Derecha' loading='lazy' />
                        </div>
                    </div>
                </div>
            </div>   

        </section>
    )
}