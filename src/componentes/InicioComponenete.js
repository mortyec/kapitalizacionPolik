import $ from "jquery";
import React, { useState, useRef } from 'react';
let url = "https://kapitalizacionpolitik.maxapex.net/apex/sgk/api/conexiones/wordpress/WEB"


const provincias = ["Pichincha", "Guayas"]
const ciudadpichincha = ["Cayambe", "Quito"]
const ciudadguayaquil = ["Duran", "Guayaquil"]
const parroquiacayambe = ['AYORA', 'CAYAMBE', 'JUAN MONTALVO', 'ASCÁZUBI', 'CANGAHUA ', 'OLMEDO (PESILLO)', 'OTÓN']
const parroquiaquito = ['QUITO', 'BELISARIO QUEVEDO', 'CARCELÉN', 'CENTRO HISTÓRICO', 'COCHAPAMBA', 'COMITÉ DEL PUEBLO', 'COTOCOLLAO', 'CHILIBULO', 'CHILLOGALLO', 'CHIMBACALLE']
const parroquiaduran = ['LA MANÁ', 'EL CARMEN', 'LA MANÁ', 'EL TRIUNFO', 'GUASAGANDA (CAB.EN GUASAGANDA CENTRO)', 'PUCAYACU']
const parroquiaguayaquil = ['BOLÍVAR, CABECERA CANTONAL', 'GARCÍA MORENO', 'LOS ANDES', 'MONTE OLIVO', 'SAN VICENTE DE PUSIR', 'SAN RAFAEL']


/*const provincias = {
    PICHINCHA: {
        CAYAMBE: ['AYORA',
            'CAYAMBE',
            'JUAN MONTALVO',
            'ASCÁZUBI',
            'CANGAHUA ',
            'OLMEDO (PESILLO)',
            'OTÓN'],
        QUITO: ['QUITO',
            'BELISARIO QUEVEDO',
            'CARCELÉN',
            'CENTRO HISTÓRICO',
            'COCHAPAMBA',
            'COMITÉ DEL PUEBLO',
            'COTOCOLLAO',
            'CHILIBULO',
            'CHILLOGALLO',
            'CHIMBACALLE']
    },

    GUAYAS: {
        DURAN: ['LA MANÁ',
            'EL CARMEN',
            'LA MANÁ',
            'EL TRIUNFO',
            'GUASAGANDA (CAB.EN GUASAGANDA CENTRO)',
            'PUCAYACU'],
        GUAYAQUIL: ['BOLÍVAR, CABECERA CANTONAL',
            'GARCÍA MORENO',
            'LOS ANDES',
            'MONTE OLIVO',
            'SAN VICENTE DE PUSIR',
            'SAN RAFAEL']

    }
}
*/

/*let rellenoProvincia = function () {
    let a = ``
    for (let i = 0; i <= 1; i++) {
        a += (`<option value=${Object.keys(provincias)[i]}>${Object.keys(provincias)[i]}</option>`);
    }
    const elemento = <div dangerouslySetInnerHTML={{ __html: a }} />
    console.log(a)
    return (elemento)
}*/

let rellenoProvincia = provincias.map((p) =>
    <option value={p}>{p}</option>
);

let rcanton
let rparroquia

function rellenoParroquia(a) {
    switch (a) {
        case 'Cayambe':

            rparroquia = parroquiacayambe.map((p) =>
                <option value={p}>{p}</option>
            );

            break;

        case 'Quito':

            rparroquia = parroquiaquito.map((p) =>
                <option value={p}>{p}</option>
            );

            break;

        case 'Duran':

            rparroquia = parroquiaduran.map((p) =>
                <option value={p}>{p}</option>
            );

            break;

        case 'Guayaquil':

            rparroquia = parroquiaguayaquil.map((p) =>
                <option value={p}>{p}</option>
            );

            break;
        default:
            break;
    }

}



function rellenoCanton(a) {
    switch (a) {
        case 'Pichincha':

            rcanton = ciudadpichincha.map((p) =>
                <option value={p}>{p}</option>
            );

            console.log(rcanton)
            break;

        case 'Guayas':

            rcanton = ciudadguayaquil.map((p) =>
                <option value={p}>{p}</option>
            );

            console.log(rcanton)
            break;

        default:
            break;
    }

}


let prov = null;


function InicioComponenete() {
    const boxMarketingRef = useRef(null);
    const handleVideoClick = () => {
        boxMarketingRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const [cedula, setCedula] = useState('');
    const [genero, setGenero] = useState('');
    const [edad, setEdad] = useState('');
    const [nombre, setNombre] = useState('');
    const [celular, setCelular] = useState('');
    const [email, setEmail] = useState('');
    const [provincia, setProvincia] = useState('');
    const [canton, setCanton] = useState('');
    const [parroquia, setParroquia] = useState('');
    const [barrio, setBarrio] = useState('');
    const [ejeGestion, setEjeGestion] = useState('');
    const [problemas, setProblemas] = useState('');



    function cambioProvincia(e) {
        setProvincia(e)
        rellenoCanton(e)
    }
    function cambioCanton(e) {
        setCanton(e)
        rellenoParroquia(e)
    }

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        //event.preventDefault();
        //console.log('Formulario enviado');
        let form = $(e.target);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            //data: arraryfinal,
            success(data) {
                console.log('Datos enviados.', '');
            },
            error(data) {
                console.log('Datos enviados.', '');
            }
        })
        console.log(form.attr("action"))
        console.log(form.serialize())


    };
    return (
        <>
            <div class="container">
                <div class="column1">
                    <img src="./img/Inicio/Bukele.jpg" />
                </div>
                {/* <video
                    src="./img/Inicio/inicio.mp4"
                    autoPlay
                    loop
                    muted
                >
                    Tu navegador no soporta la etiqueta de video HTML5.
                </video> */}
                <div class="column2">
                    <img src="./img/Inicio/textoInicio.jpg" />
                </div>
            </div>
            <div class="contenedor2">

                {/* <div class="parteMenos">
                    <div class="descripcionInicio">PERSPECTIVAS DE TENDENCIA</div>
                </div>
                <div class="parte">
                    <div class="numero">1</div>
                    <div class="linea"></div>
                    <div class="descripcion"></div>
                </div>
                <div class="parte">
                    <div class="numero">2</div>
                    <div class="linea"></div>
                    <div class="descripcion"></div>
                </div>
                <div class="parte">
                    <div class="numero">3</div>
                    <div class="linea"></div>
                    <div class="descripcion"></div>
                </div>
                <div class="parte">
                    <div class="numero">4</div>
                    <div class="linea"></div>
                    <div class="descripcion"></div>
                </div> */}
            </div>
            <div className="bloque-container">
                <div className="fila">
                    <div className="columna">
                        <img src="./img/Bloques/imagen3.jpg" alt="Imagen 1" />
                    </div>
                    <div className="columna formFondo">
                    <div className="botonContenedor">
                        <a href="./Formulario"><button className="botonEnviar">Contáctanos</button></a>
                    </div>
                    </div>
                </div>
                <div className="fila">
                    <div className="columna color2">
                        <div className="espacio">
                            <p className="tituloColumna">Metodología 4 Ps+(3x2)=32</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum suspendisse ultrices gravida dictum fusce ut. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Tincidunt arcu non sodales neque sodales ut etiam sit amet. Felis imperdiet proin fermentum leo. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Sed ullamcorper morbi tincidunt ornare massa. Id neque aliquam vestibulum morbi blandit cursus.</p>
                            <a class='animated-arrowDos' href='./#'>
                                <span class='the-arrowDos -leftDos'>
                                    <span class='shaftDos'></span>
                                </span>
                                {/*  <span class='mainDos'>
                                    <span class='textDos'>
                                        Conoce más
                                    </span>
                                    <span class='the-arrowDos -rightDos'>
                                        <span class='shaftDos'></span>
                                    </span>
                                </span> */}
                            </a>
                        </div>
                    </div>
                    <div className="columna">
                        <img src="./img/Bloques/imagen2.jpg" alt="Imagen 2" />
                    </div>
                </div>
                <div className="fila">
                    <div className="columna">
                        <img src="./img/Bloques/imagen4.jpg" alt="Imagen 3" />
                    </div>
                    <div className="columna color3">
                        <div className="espacio">
                            <p className="tituloColumna">Vinculación Ciudadana<br />R+CI=K<br />Voceros Naturales.</p>
                            <p>La vinculación ciudadana activa, la representatividad y el capital político son elementos esenciales para la participación política efectiva, la voz de voceros naturales que representen genuinamente a la comunidad es relevante en el contexto político</p>
                            <a class='animated-arrow' href='./#'>
                                <span class='the-arrow -left'>
                                    <span class='shaft'></span>
                                </span>
                                {/*  <span class='main'>
                                    <span class='text'>
                                        Aprende más
                                    </span>
                                    <span class='the-arrow -right'>
                                        <span class='shaft'></span>
                                    </span>
                                </span> */}
                            </a>
                        </div>
                    </div>
                </div>
                <div className='blogTituloContenedor'>
                    <p className='blogTitulo'>Big data. Balance ScoreCard. Kpi's</p>
                </div>
                <div className="blogconten-container">
                    <div className="columnBlog">
                        <div className="video-container">
                            <video
                                src="./img/Bloques/videoCorrea.mp4"
                                autoPlay
                                loop
                                muted
                            >
                                Tu navegador no soporta la etiqueta de video HTML5.
                            </video>
                            <div className="overlay">
                                <p className="textBlog">Descripción 1</p>
                            </div>
                        </div>
                    </div>
                    <div className="columnBlog">
                        <div className="image-container">
                            <img
                                className="imageBlog"
                                src="./img/Bloques/imagen6.jpg"
                                alt="Imagen 2"
                            />
                            {/* <div className="overlay">
                                <p className="textBlog">Descripción 2</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InicioComponenete;
