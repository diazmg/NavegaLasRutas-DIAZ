import SamGxyA15 from '../equipos/samsung-a15-blueblack-front.png';
import SamGxyA06 from '../equipos/samsung-a06-black-front.png';
import SamGxyS25 from '../equipos/samsung-galaxy-s25-ultra-titaniumblack.webp';
import Iph14 from '../equipos/iphone-14-starlight.webp';
import MotoRazr50 from '../equipos/motorola-razr-50-ultra.webp';
import MotoEdge50 from '../equipos/moto-edge-50-5g-koalagray-front.png';
import ZteA75 from '../equipos/zte-blade-a75-5g.webp';
import NubiaNeo2 from '../equipos/nubia-neo-2-gamer.webp';
import XiamiNote13 from '../equipos/xiaomi-redmi-note-13.webp';

const products = [
    {
        "id": 1,
        "brand": "Samsung",
        "name": "Galaxy A15 128GB 4G",
        "model": "SM-A155M",
        "color": "Azul Oscuro",
        "mobileNetwork": "4G",
        "capacity": 128,
        "price": 299999,
        "stock": 120,
        "description": "El Samsung Galaxy A15 es tu compañero perfecto para el día a día. Con su pantalla nítida y una batería de larga duración, te mantendrá conectado y productivo sin interrupciones. Disfruta de una experiencia fluida navegando en tus redes sociales y capturando tus mejores momentos con su versátil cámara.",
        "image": SamGxyA15
    },
    {
        "id": 2,
        "brand": "Samsung",
        "name": "Galaxy A06 128GB 4G",
        "model": "SM-A065M-128",
        "color": "Negro",
        "mobileNetwork": "4G",
        "capacity": 128,
        "price": 229999,
        "stock": 146,
        "description": "Descubre la simplicidad y eficiencia con el Galaxy A06. Un smartphone diseñado para quienes buscan funcionalidad y rendimiento a un precio accesible. Su amplia capacidad de almacenamiento de 128GB te da espacio suficiente para todas tus fotos, videos y aplicaciones favoritas.",
        "image": SamGxyA06
    },
    {
        "id": 3,
        "brand": "Samsung",
        "name": "Galaxy S25 Ultra 5G",
        "model": "SM-S938B",
        "color": "Titanium Black",
        "mobileNetwork": "5G",
        "capacity": 256,
        "price": 3499999,
        "stock": 7,
        "description": "Experimenta la innovación en su máxima expresión con el Galaxy S25 Ultra. Equipado con el revolucionario procesador de última generación y una cámara profesional, este dispositivo redefine lo que es posible en la fotografía móvil. Su diseño de titanio le otorga una durabilidad y elegancia inigualables.",
        "image": SamGxyS25
    },
    {
        "id": 4,
        "brand": "Apple",
        "name": "iPhone 14 128GB 5G",
        "model": "A2882",
        "color": "Starlight",
        "mobileNetwork": "5G",
        "capacity": 128,
        "price": 2199999,
        "stock": 11,
        "description": "El iPhone 14 te ofrece el poder y la fluidez de iOS en un diseño icónico. Con su increíble sistema de doble cámara, captura fotos y videos asombrosos incluso con poca luz. La conectividad 5G ultra rápida y el potente chip A15 Bionic garantizan una experiencia impecable en todo momento.",
        "image": Iph14
    },
    {
        "id": 5,
        "brand": "Motorola",
        "name": "Moto Razr 50 Ultra 512GB 5G",
        "model": "XT2451-3",
        "color": "Midnight Blue",
        "mobileNetwork": "5G",
        "capacity": 512,
        "price": 1429999,
        "stock": 13,
        "description": "Redefine tu estilo con el Motorola Razr 50 Ultra. Su diseño plegable no solo es una declaración de moda, sino que también ofrece una pantalla externa interactiva para que no te pierdas nada. Almacenamiento masivo de 512GB para que lleves todo contigo sin preocupaciones.",
        "image": MotoRazr50
    },
    {
        "id": 6,
        "brand": "Motorola",
        "name": "Moto Edge 50 5G",
        "model": "XT2407-2",
        "color": "Koala Grey",
        "mobileNetwork": "5G",
        "capacity": 256,
        "price": 699999,
        "stock": 24,
        "description": "El Moto Edge 50 combina diseño y funcionalidad. Su impresionante pantalla de borde a borde te sumerge en tus contenidos favoritos, mientras que su procesador de alto rendimiento asegura una multitarea fluida. Conéctate a la velocidad 5G y experimenta un nuevo nivel de velocidad.",
        "image": MotoEdge50
    },
    {
        "id": 7,
        "brand": "ZTE",
        "name": "Blade A75 256GB 5G",
        "model": "Z2357N-F",
        "color": "Diamond Black",
        "mobileNetwork": "5G",
        "capacity": 256,
        "price": 299999,
        "stock": 41,
        "description": "El ZTE Blade A75 es la opción inteligente para quienes buscan rendimiento y un gran almacenamiento a un precio inigualable. Con su capacidad de 256GB y conectividad 5G, tendrás todo el espacio y la velocidad que necesitas para tus apps, fotos y videos.",
        "image": ZteA75
    },
    {
        "id": 8,
        "brand": "ZTE",
        "name": "Nubia Neo 2 Gamer 256GB 5G",
        "model": "Z2352N",
        "color": "Negro",
        "mobileNetwork": "5G",
        "capacity": 256,
        "price": 349999,
        "stock": 19,
        "description": "Lleva tus partidas al siguiente nivel con el Nubia Neo 2 Gamer. Diseñado para los entusiastas de los videojuegos, este teléfono cuenta con un potente procesador, un sistema de enfriamiento avanzado y botones laterales para una experiencia de juego inmersiva y sin lag.",
        "image": NubiaNeo2
    },
    {
        "id": 9,
        "brand": "Xiaomi",
        "name": "Redmi Note 13 4G",
        "model": "N7L",
        "color": "Negro",
        "mobileNetwork": "4G",
        "capacity": 128,
        "price": 499999,
        "stock": 77,
        "description": "El Xiaomi Redmi Note 13 es conocido por su excelente relación calidad-precio. Su cámara principal de alta resolución captura detalles sorprendentes, mientras que su pantalla con alta tasa de refresco garantiza una navegación súper suave. Ideal para el uso diario y para disfrutar de tu contenido favorito.",
        "image": XiamiNote13
    },
];

export default products;
