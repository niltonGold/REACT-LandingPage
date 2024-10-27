import './styles.css';
import React, { useState } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const Card = ( props ) => {

const [isTouched, setIsTouched] = useState(false);

const sendMessage = () => {
  const phoneNumber = '34650347741';
  const mensajeOriginal = props.mensajeWhasap;
  const mensajeModificado = mensajeOriginal.length > 2
    ? mensajeOriginal.slice(1, -1) 
    : mensajeOriginal; 
 const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(mensajeModificado)}`;

  // if (window.matchMedia("(pointer: coarse)").matches) {
    
  //   window.open(whatsappUrl, '_blank');
  // } else {
   
  //   alert("Abriendo WhatsApp Web...");
    window.open(whatsappUrl, '_blank');
  // }
};

    const handleTouchStart = () => setIsTouched(true);
  const handleTouchEnd = () => setIsTouched(false);
  return (
    <>
      <div className='Card-Principal-Container'>
          
          
              <div className='card-titulo'>{ props.cardTitulo }</div>

              <div className='card-sub-container' style={{ backgroundImage: `url(${props.imgBarckGround})` }}>
                  
                  <div className='card-subtitulo'>{ props.subtitulo }</div>

                  <div className='card-sub-sub-container-concepto-pie-de-card'>
                    
            
                        <div className='card-concepto-whasap-container'>
                            
                                <div className='card-concepto'>{ props.concepto }</div>
                                
                                <div
              className={`card-whasap-container ${isTouched ? 'elevated' : ''}`}
              onClick={sendMessage}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
                                        
                                        <WhatsAppIcon sx={{ color: '#ffffff', 
                                                          '@media (min-width: 350px) and (max-width: 480px)': {
                                                              fontSize: '40px',
                                                          },
                                                          '@media (min-width: 481px) and (max-width: 767px)': {
                                                              fontSize: '40px',
                                                          },
                                                          '@media (min-width: 768px) and (max-width: 1024px)': {
                                                              fontSize: '50px',
                                                          },
                                                          '@media (min-width: 1025px) and (max-width: 1280px)': {
                                                              fontSize: '50px',
                                                          },
                                                          '@media (min-width: 1281px) and (max-width: 1440px)': {
                                                              fontSize: '55px',
                                                          },
                                                          '@media (min-width: 1441px)': {
                                                              fontSize: '60px',
                                                          }  }} />
                                                          
                                        <div className='card-whasap-mensaje'>
                                            <div>WhatsApp</div>
                                            <div>{props.mensajeWhasap}</div> 
                                        </div>
                                        
                                </div>
                            
                        </div>

                        <div className='card-pie-de-card'>
                              { props.mensajePieDeCard }
                        </div> 
                        
            
                  </div>

              </div>
          
        
      </div>
    </>
  )
}
