import porquesiImg from '../img/png/porquesiproyecto.png'
import miwebImg from '../img/png/estawebproyecto.png'
import busappImg from '../img/png/busappproyecto.png'
export const ProyectosUtilidad = [
    {
        id: 1,
        clase: 'porque-si-clase',
        titulo: 'Porque Sí',
        descripcion: 'Es una aplicación web que empecé con la idea de practicar algunas cuestiones puntuales, como usar variables globales en ReactJS. Cuándo ya había solucionado esto decidí ampliarla un poco y hacer un juego de apuestas. Actualmente está en proceso, porque decidí concentrarme en otros proyectos, pero en el estado actual funciona para hacer una pequeña pausa de cinco minutos del trabajo.',
        seleccionada: true,

        imagen: porquesiImg,
        github: 'https://github.com/Calelyo/Porque-si',
        web: 'https://porquesics.web.app/'
    },
    {
        id: 2,
        clase: 'esta-web-clase',
        titulo: 'Esta Web',
        descripcion: 'Decidí agregar esta página porque es una muestra de programación, diseño responsivo y concepto. Es una aplicación de página única que usa diseño con una tendencia minimalista y animaciones para crear una experiencia. La idea es que quien navegue por la web, no sienta que está simplemente buscando información, sino que haya una fluidez que haga sentir al usuario que se encuentra en un entorno amigable y conciso.',
        seleccionada: false,

        imagen: miwebImg,
        github: 'https://github.com/Calelyo/CalelSprumontWeb-Redisenio',
        web: ''
    },
    {
        id: 3,
        titulo: 'Bus App',
        clase: 'bus-app-clase',
        descripcion: 'Con un nombre provisorio, esta aplicación es un trabajo completo de experiencia de usuario e interfaz de usuario que estoy desarrollando en UX/UI Open, un bootcamp brindado por Open Bootcamp. Ya habiendo pasado etapas como la investigación, historias de usuarios, flujos de usuario entre otras (aunque sabemos que el ux es un prosese iterativo, así que estas etapas van a volver a ser transitadas), voy a compartir avances cuando la interfaz este más definida.',
        seleccionada: false,
        
        imagen: busappImg,
        github: '',
        web: ''
    }
]