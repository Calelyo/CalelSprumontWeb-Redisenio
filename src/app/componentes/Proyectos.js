import '../estilosComponentes/proyectos.css'
import Image from 'next/image'
import flecha from '../img/png/flecha.png'
import { ProyectosUtilidad } from '../utilidad/ProyectosUtilidad.js'

export default function Proyectos(){
    
    return(
        <section className='proyectos-seccion'>
            
            <div className='proyectos-titulo-responsive'>
                Proyectos
            </div>

            <div className='proyectos-mitad-izquierda'>
                <div className='proyectos-info-actual'>
                    <div className='proyectos-titulo-actual'>
                        {ProyectosUtilidad[1].titulo}
                    </div>
                    <div className='proyectos-descripcion-actual'>
                    Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </div>
            </div>

            </div> 

            <div className='proyectos-mitad-derecha'>
                <div className='contenedor-flechas'>
                    <div className='proyectos-contenedor-proyectos'>

                        {/* ACA EMPIEZA EL MAP */}
                        <div className='proyectos-proyectos-individuales'>
                                    {/* ACA VA LA IMAGEN DEL PROYECTO */}
                        </div>

                        <div className='proyectos-tres-puntos'>
                            <div className='proyectos-puntos proyectos-punto-uno'>
                                
                            </div>
                            <div className='proyectos-puntos proyectos-punto-dos'>
                                
                            </div>
                            <div className='proyectos-puntos proyectos-punto-tres'>
                                
                            </div>
                            
                            {/* <div className='proyectos-puntos proyectos-punto-cuatro'>
                                
                            </div> */}
                        </div>
                    </div>
                    
                    <div className='proyectos-flechas proyectos-flechas-diseño'>
                        <div className='proyectos-flecha-izquierda-conteneder' onClick={ ()=>moverIzquierda('d') }>
                                <Image className='proyectos-flecha proyectos-flecha-diseño proyectos-flecha-izquierda' src={ flecha } alt='Flecha Izquierda' loading='lazy' />
                        </div>
                        <div className='proyectos-flecha-derecha-conteneder' onClick={ ()=>moverDerecha('d') }>
                                <Image className='proyectos-flecha proyectos-flecha-diseño proyectos-flecha-derecha' src={ flecha } alt='Flecha Derecha' loading='lazy' />
                        </div>
                    </div>
                </div>
            </div>   

        </section>
    )
}