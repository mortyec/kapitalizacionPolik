import React, { useState } from 'react';

function InicioComponenete() {
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
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Formulario enviado');
    };
    return (
        <>
            <div class="container">
                <div class="column1">
                    <p className="iniciotitulo">La próxima frontera en la eficiencia del riesgo</p>
                    <p className="inicioDescripcion">A medida que los riesgos globales aumentan en frecuencia e impacto y persiste la incertidumbre económica, las funciones de riesgo dentro de la industria de servicios financieros deben continuar desarrollando talento para garantizar la resiliencia organizacional.</p>
                    <a class='animated-arrow' href='./#'>
                        <span class='the-arrow -left'>
                            <span class='shaft'></span>
                        </span>
                        <span class='main'>
                            <span class='text'>
                                Aumentar la eficiencia y la eficacia
                            </span>
                            <span class='the-arrow -right'>
                                <span class='shaft'></span>
                            </span>
                        </span>
                    </a>
                </div>
                <div class="column2">
                </div>
            </div>
            <div class="contenedor2">
                <div class="parteMenos">
                    <div class="descripcionInicio">PERSPECTIVAS DE TENDENCIA</div>
                </div>
                <div class="parte">
                    <div class="numero">1</div>
                    <div class="linea"></div>
                    <div class="descripcion">Construyendo la oficina del futuro</div>
                </div>
                <div class="parte">
                    <div class="numero">2</div>
                    <div class="linea"></div>
                    <div class="descripcion">El problema de TI de la empresa 'No es mi problema'</div>
                </div>
                <div class="parte">
                    <div class="numero">3</div>
                    <div class="linea"></div>
                    <div class="descripcion">¿Qué es la IA generativa?</div>
                </div>
                <div class="parte">
                    <div class="numero">4</div>
                    <div class="linea"></div>
                    <div class="descripcion">Acciones que los mejores CEOs están tomando en 2023</div>
                </div>
            </div>
            <div className="bloque-container">
                <div className="fila">
                    <div className="columna">
                        <img src="./img/Bloques/imagen2.jpg" alt="Imagen 1" />
                    </div>
                    <div className="columna color1">
                        <div className="espacioFormu">
                            <form onSubmit={handleSubmit} className="formulario">
                                <h2>Formulario</h2>
                                <div>
                                    <label lassName="etiqueta">Cédula:</label>
                                    <input
                                        type="text"
                                        value={cedula}
                                        onChange={(e) => setCedula(e.target.value)}
                                        className="entrada uno"
                                    />
                                    <label lassName="etiqueta">Género:</label>
                                    <select
                                        value={genero}
                                        onChange={(e) => setGenero(e.target.value)}
                                        className="entrada dos"
                                    >
                                        <option value="">Seleccione</option>
                                        <option value="masculino">Masculino</option>
                                        <option value="femenino">Femenino</option>
                                    </select>

                                </div>
                                <div>
                                    <label lassName="etiqueta">Nombre:</label>
                                    <input
                                        type="text"
                                        value={nombre}
                                        onChange={(e) => setNombre(e.target.value)}
                                        className="entrada tres"
                                    />
                                    <label lassName="etiqueta">Edad:</label>
                                    <input
                                        type="number"
                                        value={edad}
                                        onChange={(e) => setEdad(e.target.value)}
                                        className="entrada cuatro"
                                    />
                                </div>
                                <div>
                                    <label lassName="etiqueta">Celular:</label>
                                    <input
                                        type="text"
                                        value={celular}
                                        onChange={(e) => setCelular(e.target.value)}
                                        className="entrada cinco"
                                    />
                                    <label lassName="etiqueta">Email:</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="entrada seis"
                                    />
                                </div>
                                <div>
                                    <label lassName="etiqueta">Provincia:</label>
                                    <select
                                        value={provincia}
                                        onChange={(e) => setProvincia(e.target.value)}
                                        className="entrada siete"
                                    >
                                        <option value="">Seleccione</option>
                                        {/* Opciones de provincia */}
                                    </select>
                                    <label lassName="etiqueta">Cantón:</label>
                                    <select
                                        value={canton}
                                        onChange={(e) => setCanton(e.target.value)}
                                        className="entrada ocho"
                                    >
                                        <option value="">Seleccione</option>
                                        {/* Opciones de cantón */}
                                    </select>
                                </div>
                                <div>
                                    <label lassName="etiqueta">Parroquia:</label>
                                    <select
                                        value={parroquia}
                                        onChange={(e) => setParroquia(e.target.value)}
                                        className="entrada nueve"
                                    >
                                        <option value="">Seleccione</option>
                                        {/* Opciones de parroquia */}
                                    </select>
                                    <label lassName="etiqueta">Barrio:</label>
                                    <input
                                        type="text"
                                        value={barrio}
                                        onChange={(e) => setBarrio(e.target.value)}
                                        className="entrada diez"
                                    />
                                </div>
                                <div>
                                    <label lassName="etiqueta">Eje de gestión:</label>
                                    <select
                                        value={ejeGestion}
                                        onChange={(e) => setEjeGestion(e.target.value)}
                                        className="entrada once"
                                    >
                                        <option value="">Seleccione</option>
                                        {/* Opciones de eje de gestión */}
                                    </select>
                                </div>
                                <div>
                                    <label lassName="etiqueta">Problemas:</label>
                                    <textarea
                                        value={problemas}
                                        onChange={(e) => setProblemas(e.target.value)}
                                        className="entrada doce"
                                    />
                                </div>
                                <button type="submit">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="fila">
                    <div className="columna color2">
                        <div className="espacio">
                            <p className="tituloColumna">CEOs en ascenso: Lecciones del Foro de Liderazgo de McKinsey</p>
                            <p>Prepararse para el rol de CEO puede ser un desafío y una recompensa. Estas ocho lecciones extraídas de más de 300 participantes del Foro de liderazgo de McKinsey y los directores ejecutivos que los asesoran beneficiarán a cualquier alto ejecutivo o aspirante a director ejecutivo.</p>
                            <a class='animated-arrowDos' href='./#'>
                                <span class='the-arrowDos -leftDos'>
                                    <span class='shaftDos'></span>
                                </span>
                                <span class='mainDos'>
                                    <span class='textDos'>
                                        Explore más información del McKinsey Quarterly
                                    </span>
                                    <span class='the-arrowDos -rightDos'>
                                        <span class='shaftDos'></span>
                                    </span>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="columna">
                        <img src="./img/Bloques/imagen3.jpg" alt="Imagen 2" />
                    </div>
                </div>
                <div className="fila">
                    <div className="columna">
                        <img src="./img/Bloques/imagen4.jpg" alt="Imagen 3" />
                    </div>
                    <div className="columna color3">
                        <div className="espacio">
                            <p className="tituloColumna">Mejores vidas y medios de subsistencia</p>
                            <p>El sector social, el cuidado de la salud y las organizaciones del sector público del mundo son fundamentales para el bienestar de las personas y las comunidades. Durante más de 70 años, McKinsey ha trabajado junto a estas organizaciones, permitiendo que aquellos que hacen tanto bien en el mundo operen al más alto nivel.</p>
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
                    <p className='blogTitulo'>NUEVO EN EL BLOG DE KPITALIZACIÓN POLITIK</p>
                </div>
                <div className="blogconten-container">
                    <div className="columnBlog">
                        <div className="image-container">
                            <img
                                className="imageBlog"
                                src="./img/Bloques/imagen5.jpg" // URL de la imagen de fondo
                                alt="Imagen 1"
                            />
                            <div className="overlay">
                                <p className="textBlog">Descripción 1</p>
                            </div>
                        </div>
                    </div>
                    <div className="columnBlog">
                        <div className="image-container">
                            <img
                                className="imageBlog"
                                src="./img/Bloques/imagen6.jpg" // URL de la imagen de fondo
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
