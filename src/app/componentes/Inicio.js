import '../estilosComponentes/inicio.css'
import Image from 'next/image'
import foto from '../img/png/foto-inicio.png'
import botonCV from '../img/png/boton-cv.png'
import styles from '../estilosComponentes/inicio.css'

export default function Inicio(props){
    
    return(
        <section className='inicio-seccion'>

            <div className='inicio-mitad-izquierda'>
                <div className='inicio-titulo'>
                    <div className={`inicio-titulo-nombre  ${props.asd}`}>
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
                <div className='inicio-foto'>
                    <Image className='inicio-foto-image' src={ foto } alt='foto Calel Sprumont' loading='lazy'></Image>
                </div>
                <div className='boton-sobre-mi'>
                    Sobre Mí
                </div>
            </div>

            <div className='inicio-mitad-derecha'>
                <div className='inicio-menu'>
                    <div className='inicio-menu-conocimientos boton-menu'>
                        Conocimientos
                    </div>
                    <div className='inicio-menu-proyectos boton-menu'>
                        Proyectos
                    </div>
                    <div className='inicio-menu-contacto boton-menu'>
                        Contacto
                    </div>
                </div>
                <div className='inicio-boton-cv'>
                    <Image className='inicio-boton-cv-image' src={ botonCV } alt='Descargar CV' loading='lazy'></Image>
                </div>
            </div>
            
        </section>
    )
}