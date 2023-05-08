import '../estilosComponentes/contacto.css'
import Image from 'next/image'
import gitgub from '../img/png/contacto/githubblanco.png'
import mail from '../img/png/contacto/mailblanco.png'
import linkedin from '../img/png/contacto/linkedinblanco.png'

export default function Contacto(){
    return(
        <section className='contacto-seccion'>

            <div className='contacto-titulo-responsive'>
                Contacto
            </div>

            <div className='contacto-parte-negra'>
                <div className='contacto-contenedor-iconos'>
                    <div className='contacto-iconos-individuales contacto-contenedor-github'>
                        <a href='https://github.com/Calelyo/' target='_blank' rel="noopener noreferrer">
                            <Image className='contacto-icono-image github-icono' src={ gitgub } alt='Logo Github' loading='lazy' width={120}/>
                        </a>
                    </div>
                    <div className='contacto-iconos-individuales contacto-contenedor-gmail'>
                        <a href='mailto:calelyo@gmail.com' target='_blank' rel="noopener noreferrer">
                            <Image className='contacto-icono-image gmail-icono' src={ mail } alt='Logo Gmail' loading='lazy' width={120} />
                        </a>
                        <div className='contacto-gmail-texto'>
                            calelyo@gmail.com
                        </div>
                    </div>
                    <div className='contacto-iconos-individuales contacto-contenedor-linkedin'>
                        <a href='https://www.linkedin.com/in/calelsprumont/' target='_blank' rel="noopener noreferrer">
                            <Image className='contacto-icono-image linkedin-icono' src={ linkedin } alt='Logo LinkedIn' loading='lazy' width={120} />
                        </a>
                    </div>
                </div>
            </div>
            
        </section>
    )
}