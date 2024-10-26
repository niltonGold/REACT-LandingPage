import './styles.css';
import React from 'react';
import { Button, Box } from '@mui/material';
import avisoLegal from '../../../documents/AvisoLegal.pdf';
import politicaDeCookies from '../../../documents/PoliticaDeCalidad.pdf';
import politicaDeCalidad from '../../../documents/PoliticaDeCookies.pdf';


export const Footer = () => {


const handleDocumentClickAvisoLegal = () => {
    window.open(avisoLegal, '_blank');
};

const handleDocumentClickPoliticaDeCookies = () => {
    window.open(politicaDeCookies, '_blank');
};

const handleDocumentClickPoliticaDeCalidad = () => {
    window.open(politicaDeCalidad, '_blank');
};
    

    return (
        <>
            <div className='Footer-container'>
                    
                        <Button sx={{   color: 'inherit',
                                        fontWeight: 'bold',
                                        transition: 'color 0.3s ease',
                                        '&:hover': { 
                                            backgroundColor: 'rgba(241, 226, 40, 0.4)',
                                        },                                       
                                        '@media (min-width: 350px) and (max-width: 480px)': {
                                            fontSize: '15px',
                                            '&:hover': { borderRadius: '12px' },  
                                        },
                                        '@media (min-width: 481px) and (max-width: 767px)': {
                                            fontSize: '18px',
                                            '&:hover': { borderRadius: '14px' },  
                                        },
                                        '@media (min-width: 768px) and (max-width: 1024px)': {
                                            fontSize: '21px',
                                            '&:hover': { borderRadius: '16px' },  
                                        },
                                        '@media (min-width: 1025px) and (max-width: 1280px)': {
                                            fontSize: '24px',
                                            '&:hover': { borderRadius: '18px' },  
                                        },
                                        '@media (min-width: 1281px) and (max-width: 1440px)': {
                                            fontSize: '27px',
                                            '&:hover': { borderRadius: '20px' },  
                                        },
                                        '@media (min-width: 1441px)': {
                                            fontSize: '30px',
                                            '&:hover': { borderRadius: '22px' },  
                                        }       }}
                        >
                            
                                <a className='documentos_legales' onClick={handleDocumentClickAvisoLegal} style={{ cursor: 'pointer' }} >
                                    
                                    AVISO LEGAL
                                    
                                </a>

                        </Button>
                    
                        
                                    <Box sx={{  alignSelf: 'center',                                                                
                                                '@media (min-width: 350px) and (max-width: 480px)': {
                                                    fontSize: '15px',
                                                },
                                                '@media (min-width: 481px) and (max-width: 767px)': {
                                                    fontSize: '18px',
                                                },
                                                '@media (min-width: 768px) and (max-width: 1024px)': {
                                                    fontSize: '21px',
                                                },
                                                '@media (min-width: 1025px) and (max-width: 1280px)': {
                                                    fontSize: '24px',
                                                },
                                                '@media (min-width: 1281px) and (max-width: 1440px)': {
                                                    fontSize: '27px',
                                                },
                                                '@media (min-width: 1441px)': {
                                                    fontSize: '30px',
                                                }       }}
                                    >

                                        |
                                        
                                    </Box>
                                
                
                        <Button sx={{   color: 'inherit',
                                        fontWeight: 'bold',
                                        transition: 'color 0.3s ease',
                                        '&:hover': { 
                                        backgroundColor: 'rgba(241, 226, 40, 0.4)',
                                        },                                       
                                        '@media (min-width: 350px) and (max-width: 480px)': {
                                            fontSize: '15px',
                                            '&:hover': { borderRadius: '12px' },  
                                        },
                                        '@media (min-width: 481px) and (max-width: 767px)': {
                                            fontSize: '18px',
                                            '&:hover': { borderRadius: '14px' },  
                                        },
                                        '@media (min-width: 768px) and (max-width: 1024px)': {
                                            fontSize: '21px',
                                            '&:hover': { borderRadius: '16px' },  
                                        },
                                        '@media (min-width: 1025px) and (max-width: 1280px)': {
                                            fontSize: '24px',
                                            '&:hover': { borderRadius: '18px' },  
                                        },
                                        '@media (min-width: 1281px) and (max-width: 1440px)': {
                                            fontSize: '27px',
                                            '&:hover': { borderRadius: '20px' },  
                                        },
                                        '@media (min-width: 1441px)': {
                                            fontSize: '30px',
                                            '&:hover': { borderRadius: '22px' },  
                                        }       }}
                        >
                            
                                <a className='documentos_legales' onClick={handleDocumentClickPoliticaDeCookies} style={{ cursor: 'pointer' }} >
                                    
                                    POLÍTICA DE COOKIES

                                </a>
                        
                        </Button>
                                

                                    <Box sx={{  alignSelf: 'center',                                                   
                                                '@media (min-width: 350px) and (max-width: 480px)': {
                                                    fontSize: '15px',
                                                },
                                                '@media (min-width: 481px) and (max-width: 767px)': {
                                                    fontSize: '18px',
                                                },
                                                '@media (min-width: 768px) and (max-width: 1024px)': {
                                                    fontSize: '21px',
                                                },
                                                '@media (min-width: 1025px) and (max-width: 1280px)': {
                                                    fontSize: '24px',
                                                },
                                                '@media (min-width: 1281px) and (max-width: 1440px)': {
                                                    fontSize: '27px',
                                                },
                                                '@media (min-width: 1441px)': {
                                                    fontSize: '30px',
                                                }       }}
                        
                                    >
                                        
                                        |
                                        
                                    </Box>


                        <Button sx={{   color: 'inherit',
                                        fontWeight: 'bold',
                                        transition: 'color 0.3s ease',
                                        '&:hover': { 
                                        backgroundColor: 'rgba(241, 226, 40, 0.4)',
                                        },                                       
                                        '@media (min-width: 350px) and (max-width: 480px)': {
                                            fontSize: '15px',
                                            '&:hover': { borderRadius: '12px' },  
                                        },
                                        '@media (min-width: 481px) and (max-width: 767px)': {
                                            fontSize: '18px',
                                            '&:hover': { borderRadius: '14px' },  
                                        },
                                        '@media (min-width: 768px) and (max-width: 1024px)': {
                                            fontSize: '21px',
                                            '&:hover': { borderRadius: '16px' },  
                                        },
                                        '@media (min-width: 1025px) and (max-width: 1280px)': {
                                            fontSize: '24px',
                                            '&:hover': { borderRadius: '18px' },  
                                        },
                                        '@media (min-width: 1281px) and (max-width: 1440px)': {
                                            fontSize: '27px',
                                            '&:hover': { borderRadius: '20px' },  
                                        },
                                        '@media (min-width: 1441px)': {
                                            fontSize: '30px',
                                            '&:hover': { borderRadius: '22px' },  
                                        }       }}
                        >

                                <a className='documentos_legales' onClick={handleDocumentClickPoliticaDeCalidad} style={{ cursor: 'pointer' }} >
                                    
                                    POLÍTICA DE CALIDAD
                                    
                                </a>
                                
                        </Button>

            </div>
        </>
  )
}
