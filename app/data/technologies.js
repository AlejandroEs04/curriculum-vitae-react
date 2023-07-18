const tecnologias = [
    {
        name: 'React',
        descripcion: 'Conocimientos en construccion de paginas web, con react, usando tegnologias como: Next.JS y Remix',
        description: 'I know how to use it for building web sites with react, using tecnologies like: Next.JS and Remix',
        imagen: './img/react.svg',
        animation: 'imagenGirar',
    },
    {
        name: 'JavaScript',
        descripcion: 'Uso de JavaScript para crear paginas web dinamicas',
        description: 'I use JavaScript for building dinamic web sites',
        imagen: '/img/java.png',
        animation: 'imagenEscala'
    },
    {
        name: 'PHP',
        descripcion: 'Conocimientos en php con Programacion Orientada a Objetos, conexion y uso a base de datos',
        description: 'I know how to use PHP with POO, conection and use a database',
        imagen: '/img/php.png',
        animation: 'imagenEscala'
    },
    {
        name: 'Python',
        descripcion: 'Python para el manejo eficiente de datos',
        description: 'I know how to use Python for eficient data managment',
        imagen: '/img/python.jpg',
        animation: 'imagenEscala'
    },
    {
        name: 'CSS',
        descripcion: 'CSS para darle estilo, y un buen formato a cualquier pagina web',
        description: 'CSS for giving styles and a well format to any web site',
        imagen: '/img/css.png',
        animation: 'imagenEscala'
    },
]

const proyectos = [
    {
        name: 'DD-Code',
        descripcion: 'En este proyecto desarrolle un sitio para la empresa DD-Code, la empresa se dedica al desarrollo web, la pagina esta basada en PHP, con conexion a base de datos para manejar los servicios y planes. Como base de datos se utilizo MySQL',
        description: 'In this project, I developed a website for DD-Code, the company is dedicate to web development, the web site was developed with PHP and conection to a database for managment the services and plans. As database was used MySQL',
        imagenes : [
            {
                imageName: '/ddcode/Imagen1.jpg',
                id: 0
            },
            {
                imageName: '/ddcode/Imagen2.jpg',
                id: 1
            },
            {
                imageName: '/ddcode/Imagen3.jpg',
                id: 2
            }
        ],
        link : 'https://dd-code.com/',
        id: 0
    },
    {
        name: 'PX Consultores',
        descripcion: 'El desarrollo de la pagina para PX Consultores, una empresa dedicada al diseno y modelado de chassises para camiones pesados, esta pagina cuenta con un pequeno sistema para controlar la cantidad de piezas creadas con un numero unico. Para este codigo se utilizo una base de datos en MySQL y la conexion por PHP.',
        description: "I developed a website for PX Consultores, it's a company dedicate to design and modeling of chassises for heavy trucks, this page has a small system for handling parts created with an unique code. for this code, I used a MySQL database and PHP conection",
        imagenes : [
            {
                imageName: '/pxconsultores/Imagen1.jpg',
                id: 0
            },
            {
                imageName: '/pxconsultores/Imagen2.jpg',
                id: 1
            },
            {
                imageName: '/pxconsultores/Imagen3.jpg',
                id: 2
            }
        ],
        link : 'https://pxmanufactura.com/pxmanufactua-public/',
        id: 1
    }
]

export {
    tecnologias,
    proyectos
}