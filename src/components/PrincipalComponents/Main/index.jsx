import { Card } from '../../mainComponets/card';
import './styles.css';
import React from 'react';
import cardImgen1 from '../../../imagenes/card_1_Inicio_imagenes/card_1_fondo.png';
import cardImgen2 from '../../../imagenes/card_1_Inicio_imagenes/card_1_fondo.png';
import cardImgen3 from '../../../imagenes/card_1_Inicio_imagenes/card_1_fondo.png';
import cardImgen4 from '../../../imagenes/card_1_Inicio_imagenes/card_1_fondo.png';
import cardImgen5 from '../../../imagenes/card_1_Inicio_imagenes/card_1_fondo.png';
import Card_9_formContac from '../../mainComponets/card_9_formContac';




export const Main = () => {


    // CARD 1 DATOS "PRESENTACION"
    const Card1BackGroundImg = cardImgen1;
    const Card1Titulo = 'DESCUBRE LA ENERGÍA SOLAR FLOTANTE';
    const Card1SubTitulo = 'FOTOVOLTAICA FLOTANTE: INNOVACIÓN Y SOSTENIBILIDAD PARA TUS EMBALSES';
    const Card1Concepto = '¿Tienes un embalse y quieres reducir hasta un 30% de tu factura eléctrica mientras limpias el agua?';
    const Card1MensajeWhasap = '"Más información"';
    const Card1PieDeCard = 'Aprovecha cada metro cuadrado de tu embalse con la estructura flotante SFS: energía limpia y purificación en uno solo';


    // CARD 2 DATOS "PORQUE"
    const Card2BackGroundImg = cardImgen2;
    const Card2Titulo = '¿POR QUÉ ELGIR PANELES SOLARES FLOTANTES?';
    const Card2SubTitulo = '¿ALTOS COSTES DE ENERGÍA, FALTA DE ESPACIO, ALGAS O ALTA EVAPORACIÓN?';
    const Card2Concepto = 'Los paneles solares flotantes aumentan la eficiencia, aprovechan áreas sin uso y reducen costos y problemas de evaporación y algas.';
    const Card2MensajeWhasap = '"¿Por qué paneles solares?"';
    const Card2PieDeCard = 'Los paneles solares flotantes: una solución efectiva y económica para la purificación del agua';


    // CARD 3 DATOS "QUIENES SOMOS"
    const Card3BackGroundImg = cardImgen3;
    const Card3Titulo = '¿QUIÉNES SOMOS?';
    const Card3SubTitulo = 'EXPERTOS EN ENERGÍA SOLAR FLOTANTE Y SOSTENIBILIDAD';
    const Card3Concepto = 'Ofrecemos energía solar flotante sostenible y eficiente. Con el sistema SFS, reducimos costos y optimizamos recursos hídricos.';
    const Card3MensajeWhasap = '"Más sobre ustedes" ';
    const Card3PieDeCard = 'Comprometidos con un futuro más limpio y eficiente.';


    // CARD 4 DATOS "¿QUE ES SFS?"
    const Card4BackGroundImg = cardImgen4;
    const Card4Titulo = 'SMART FLOATING STRUCTURE (SFS): INNOVACIÓN EN ACCIÓN';
    const Card4SubTitulo = 'LA SOLUCIÓN INTELIGENTE PARA ENERGÍA SOLAR Y CUIDADO DEL AGUA';
    const Card4Concepto = 'El sistema SFS flota paneles solares de forma económica, reduciendo evaporación y algas. Registrado como modelo de utilidad (ES 1305059 U).';
    const Card4MensajeWhasap = '"Más sobre SFS" ';
    const Card4PieDeCard = 'SFS: energía, sostenibilidad y cuidado del agua en un solo sistema.';


    // CARD 5 DATOS "EXPERIENCIA"
    const Card5BackGroundImg = cardImgen5;
    const Card5Titulo = 'EXPERIENCIA Y CONFIANZA';
    const Card5SubTitulo = '2000 PROYECTOS Y CERTIFICACIONES ISO GARANTIZAN RESULTADOS';
    const Card5Concepto = 'Con 20 años de experiencia, más de 2000 proyectos y certificaciones ISO en energía y tratamiento de agua.';
    const Card5MensajeWhasap = '"Experiencia comprobada"';
    const Card5PieDeCard = 'Dos décadas de innovación en energía y agua, a tu servicio.';
    return (

        <>
            <div className='Main-container'>
                

                    {/* CARD 1 DATOS */}
                    <div id='Inicio'>
                        <Card
                            imgBarckGround={Card1BackGroundImg}
                            cardTitulo={Card1Titulo}
                            subtitulo={Card1SubTitulo}
                            concepto={Card1Concepto}
                            mensajeWhasap={Card1MensajeWhasap}
                            mensajePieDeCard={Card1PieDeCard}
                        />
                    </div>

                
                    {/* CARD 2 DATOS */}
                    <div id='Por_que'>
                        <Card
                            imgBarckGround={Card2BackGroundImg}
                            cardTitulo={Card2Titulo}
                            subtitulo={Card2SubTitulo}
                            concepto={Card2Concepto}
                            mensajeWhasap={Card2MensajeWhasap}
                            mensajePieDeCard={Card2PieDeCard}
                        />
                    </div>
                

                    {/* CARD 3 DATOS */}
                    <div id='QuienesSomos'>
                        <Card
                            imgBarckGround={Card3BackGroundImg}
                            cardTitulo={Card3Titulo}
                            subtitulo={Card3SubTitulo}
                            concepto={Card3Concepto}
                            mensajeWhasap={Card3MensajeWhasap}
                            mensajePieDeCard={Card3PieDeCard}
                        />
                    </div>

                
                    {/* CARD 4 DATOS */}
                    <div id='SFS'>
                    <Card
                        imgBarckGround={Card4BackGroundImg}
                        cardTitulo={Card4Titulo}
                        subtitulo={Card4SubTitulo}
                        concepto={Card4Concepto}
                        mensajeWhasap={Card4MensajeWhasap}
                        mensajePieDeCard={Card4PieDeCard}
                    />
                    </div>
                
                    {/* CARD 5 DATOS */}
                    <div id='Experiencia'>
                        <Card
                            imgBarckGround={Card5BackGroundImg}
                            cardTitulo={Card5Titulo}
                            subtitulo={Card5SubTitulo}
                            concepto={Card5Concepto}
                            mensajeWhasap={Card5MensajeWhasap}
                            mensajePieDeCard={Card5PieDeCard}
                        />
                    </div>
                

                    {/* CARD 6 FOMULARIO */}
                    <div id='Diagnostico'>
                        <Card_9_formContac />
                    </div>
                

            </div>
        </>
  )
}
