import $ from "jquery";
import React, { useState, useRef } from 'react';
let url = "https://kapitalizacionpolitik.maxapex.net/apex/sgk/api/conexiones/wordpress/WEB"


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
                <video
                                src="./img/Inicio/inicio.mp4"
                                autoPlay
                                loop
                                muted
                            >
                                Tu navegador no soporta la etiqueta de video HTML5.
                            </video>
                {/* <div class="column2">
                   <p className="textoPrincipal">El principal recurso de un politico son las personas</p>
                </div> */}
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
                    <div className="columna color1 centrado">
                        <div className="espacioFormu">
                            <form action={url} method="post" onSubmit={(ev) => handleSubmit(ev)} className="formulario">
                                <h2>Formulario</h2>
                                <div className="contenedorFilasFormulario">
                                    <div className="formizquierda">
                                        <label lassName="etiqueta">Cédula:</label>
                                        <br /> <input
                                            name="cedula"
                                            type="text"
                                            value={cedula}
                                            onChange={(e) => setCedula(e.target.value)}
                                            className="entrada"
                                        /><br />
                                        <label lassName="etiqueta">Nombre:</label>
                                        <br /> <input
                                            name="nombre"
                                            type="text"
                                            value={nombre}
                                            onChange={(e) => setNombre(e.target.value)}
                                            className="entrada espacioForm"
                                        /><br />
                                        <label lassName="etiqueta">Celular:</label>
                                        <br />   <input
                                            name="celular"
                                            type="text"
                                            value={celular}
                                            onChange={(e) => setCelular(e.target.value)}
                                            className="entrada espacioForm"
                                        /><br />
                                        <label lassName="etiqueta">Provincia:</label>
                                        <br /><select
                                            name="provincia"
                                            value={provincia}
                                            onChange={(e) => setProvincia(e.target.value)}
                                            className="entrada espacioForm"
                                        >
                                            <option value="">Seleccione</option>
                                            {/* Opciones de provincia */}
                                        </select><br />
                                        <label lassName="etiqueta">Parroquia:</label>
                                        <br /><select
                                            name="parroquia"
                                            value={parroquia}
                                            onChange={(e) => setParroquia(e.target.value)}
                                            className="entrada espacioForm"
                                        >
                                            <option value="">Seleccione</option>
                                            {/* Opciones de parroquia */}
                                        </select><br />
                                        <label lassName="etiqueta">Eje de gestión:</label>
                                        <br />  <select
                                            name="ejeGestion"
                                            value={ejeGestion}
                                            onChange={(e) => setEjeGestion(e.target.value)}
                                            className="entrada espacioForm"
                                        >
                                            <option value="">Seleccione</option>
                                            {/* Opciones de eje de gestión */}
                                        </select><br />
                                    </div>
                                    <div className="formDerecha">
                                        <label lassName="etiqueta">Género:</label>
                                        <br />
                                        <select
                                            name="genero"
                                            value={genero}
                                            onChange={(e) => setGenero(e.target.value)}
                                            className="entrada"
                                        >
                                            <option value="">Seleccione</option>
                                            <option value="masculino">Masculino</option>
                                            <option value="femenino">Femenino</option>
                                        </select><br />
                                        <label lassName="etiqueta">Edad:</label>
                                        <br /> <input
                                            type="number"
                                            value={edad}
                                            onChange={(e) => setEdad(e.target.value)}
                                            className="entrada espacioForm"
                                        /><br />
                                        <label lassName="etiqueta">Email:</label>
                                        <br /><input
                                            name="email"
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="entrada espacioForm"
                                        /><br />
                                        <label lassName="etiqueta">Cantón:</label>
                                        <br /> <select
                                            name="canton"
                                            value={canton}
                                            onChange={(e) => setCanton(e.target.value)}
                                            className="entrada espacioForm"
                                        >
                                            <option value="">Seleccione</option>
                                            {/* Opciones de cantón */}
                                        </select><br />
                                        <label lassName="etiqueta">Barrio:</label>
                                        <br /><input
                                            name="barrio"
                                            type="text"
                                            value={barrio}
                                            onChange={(e) => setBarrio(e.target.value)}
                                            className="entrada espacioForm"
                                        /><br />
                                    </div>
                                </div>
                                <div>
                                    <label lassName="etiqueta">Problemas:</label>
                                    <textarea
                                        name="problemas"
                                        value={problemas}
                                        onChange={(e) => setProblemas(e.target.value)}
                                        className="entrada doce"
                                    /><br /><br />
                                </div>
                                <button type="submit">Enviar</button>
                            </form>
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
                                <span class='mainDos'>
                                    <span class='textDos'>
                                        Conoce más
                                    </span>
                                    <span class='the-arrowDos -rightDos'>
                                        <span class='shaftDos'></span>
                                    </span>
                                </span>
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
                            <p className="tituloColumna">Vinculación Ciudadana<br />R+CI=k Voceros <br />Naturales.</p>
                            <p>La vinculación ciudadana activa, la representatividad y el capital político son elementos esenciales para la participación política efectiva, la voz de voceros naturales que representen genuinamente a la comunidad es relevante en el contexto político</p>
                            <a class='animated-arrow' href='./#'>
                                <span class='the-arrow -left'>
                                    <span class='shaft'></span>
                                </span>
                                <span class='main'>
                                    <span class='text'>
                                        Aprende más
                                    </span>
                                    <span class='the-arrow -right'>
                                        <span class='shaft'></span>
                                    </span>
                                </span>
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
                                src="./img/Bloques/bukele.mp4"
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
                            <div className="overlay">
                                <p className="textBlog">Descripción 2</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InicioComponenete;
