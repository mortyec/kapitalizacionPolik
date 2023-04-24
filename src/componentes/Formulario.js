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


function Formulario() {
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
        <div className="espacioFormu">
                            <form action={url} method="post" onSubmit={(ev) => handleSubmit(ev)} className="formulario">
                                <h2>Cuéntame tu necesidad 6</h2>
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
                                        <br /> <select
                                            name="provincia"
                                            value={provincia}
                                            onChange={(e) => cambioProvincia(e.target.value)}
                                            className="entrada espacioForm"
                                        >
                                            {/*  <option value="Seleccione">Seleccione</option> */}
                                            <option value="22">Guayas</option>
                                            {/* Opciones de provincia */}
                                            {/* {rellenoProvincia} */}

                                        </select><br />
                                        <label lassName="etiqueta">Parroquia:</label>
                                        <br /><select
                                            name="parroquia"
                                            type="text"
                                            value={parroquia}
                                            onChange={(e) => setParroquia(e.target.value)}
                                            className="entrada espacioForm"
                                        >
                                            {/* <option value="">Seleccione</option> */}
                                            <option value="1369">Garcia Moreno</option>
                                            {/*    {rparroquia} */}
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
                                            <option value="2">SOCIAL</option>
                                            <option value="3">PRODUCTIVO</option>
                                            <option value="4">SALUD</option>
                                            <option value="5">EDUCACION</option>
                                            <option value="1">SEGURIDAD</option>
                                        </select><br />
                                    </div>
                                    <div className="formDerecha">
                                        <label lassName="etiqueta">Género:</label>
                                        <br />

                                        <select
                                            name="genero"
                                            type="char"
                                            value={genero}
                                            onChange={(e) => setGenero(e.target.value)}
                                            className="entrada"
                                        >
                                            <option value="">Seleccione</option>
                                            <option value="M">Masculino</option>
                                            <option value="F">Femenino</option>
                                            <option value="O">Otro</option>
                                        </select>

                                        <br />
                                        <label lassName="etiqueta">Edad:</label>
                                        <br /> <input
                                            name="edad"
                                            type="text"
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
                                            type="text"
                                            value={canton}
                                            onChange={(e) => cambioCanton(e.target.value)}
                                            className="entrada espacioForm"
                                        >
                                            {/* <option value="">Seleccione</option> */}
                                            <option value="44">Guayaquil</option>
                                            {/* Opciones de cantón */}
                                            {/*   {rcanton} */}
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
                                        type="text"
                                        value={problemas}
                                        onChange={(e) => setProblemas(e.target.value)}
                                        className="entrada doce"
                                    /><br /><br />
                                </div>
                                <button type="submit">Enviar</button>
                            </form>
                        </div>
        </>
      );
}

export default Formulario;
