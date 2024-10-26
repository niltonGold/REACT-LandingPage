import React from 'react';
import './styles.css';
import { Link, Box } from '@mui/material';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const FooterFlotante = ( { isVisible } ) => {
    



const sendMessage = () => {
  const phoneNumber = '+34650347741';
  const message = 'Ahorra';
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};

    
const onDiagnostico = () => {
    window.location.href = '#Diagnostico';
};  
    


    
  return (
    <div className={`FloatingFooter ${isVisible ? '' : 'hidden'}`}>
      



            <Box    onClick={onDiagnostico} 
                    sx={{   display: 'flex',
                            flexDirection: 'row',
                            cursor: 'pointer', 
                            alignItems: 'center',
                            backgroundColor: '#17662F',
                            color: 'white',
                            fontWeight: 'bold',
                            marginLeft: '15px',
                            justifyContent: 'center',
                            '&:hover': { backgroundColor: '#e64a19' },
                            '@media (min-width: 350px) and (max-width: 480px)': {
                                width:'9rem',
                                fontSize: '15px',
                                '&:hover': {
                                    borderRadius: '12px',
                                    transform: 'scale(1.05)'
                                }, 
                                borderRadius: '12px',
                                gap: '0.1rem',
                                padding: '5px',        
                                boxShadow: '8px 10px 4px rgba(0, 0, 0, 0.6)',
                                transition: 'background-color 0.3s, transform 0.2s',      
                            },
                            '@media (min-width: 481px) and (max-width: 767px)': {
                                width:'11rem',
                                fontSize: '18px',
                                '&:hover': {
                                    borderRadius: '14px',
                                    transform: 'scale(1.05)'
                                },
                                borderRadius: '14px',
                                gap: '0.5rem',
                                padding: '10px',
                                boxShadow: '8px 10px 4px rgba(0, 0, 0, 0.6)',
                                transition: 'background-color 0.3s, transform 0.2s', 
                            },
                            '@media (min-width: 768px) and (max-width: 1024px)': {
                                width:'14rem',
                                fontSize: '21px',
                                '&:hover': {
                                    borderRadius: '16px',
                                    transform: 'scale(1.05)'
                                },
                                borderRadius: '16px',
                                gap: '0rem',
                                padding: '10px',
                                boxShadow: '8px 10px 4px rgba(0, 0, 0, 0.6)',
                                transition: 'background-color 0.3s, transform 0.2s', 
                            },
                            '@media (min-width: 1025px) and (max-width: 1280px)': {
                                width:'21rem',
                                fontSize: '24px',
                                '&:hover': {
                                    borderRadius: '18px',
                                    transform: 'scale(1.05)'
                                },
                                borderRadius: '18px',
                                gap: '1rem',
                                padding: '10px',
                                boxShadow: '8px 10px 4px rgba(0, 0, 0, 0.6)',
                                transition: 'background-color 0.3s, transform 0.2s', 
                            },
                            '@media (min-width: 1281px) and (max-width: 1440px)': {
                                width:'26rem',
                                fontSize: '27px',
                                '&:hover': { 
                                    borderRadius: '20px',
                                    transform: 'scale(1.05)'
                                },
                                borderRadius: '20px',
                                gap: '1rem',
                                padding: '10px',
                                boxShadow: '8px 10px 4px rgba(0, 0, 0, 0.6)',
                                transition: 'background-color 0.3s, transform 0.2s', 
                            },
                            '@media (min-width: 1441px)': {
                                width:'27rem',
                                fontSize: '30px',
                                '&:hover': {
                                    borderRadius: '22px',
                                    transform: 'scale(1.05)'
                                },  
                                borderRadius: '22px',
                                gap: '1rem',
                                padding: '10px',
                                boxShadow: '8px 10px 4px rgba(0, 0, 0, 0.6)',
                                transition: 'background-color 0.3s, transform 0.2s', 
                            }
                                
                            }} 
            >
          
                
                                <Box sx={{ '@media (min-width: 350px) and (max-width: 480px)': {
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
                                            }    
                                        }} 
                                >                 
                                    
                                                "DIAGNÓSTICO GRATIS"
                                
                                </Box>
                    
                                <AdsClickIcon sx={{ '@media (min-width: 350px) and (max-width: 480px)': {
                                                            fontSize: '35px',
                                                    },
                                                    '@media (min-width: 481px) and (max-width: 767px)': {
                                                            fontSize: '40px',
                                                    },
                                                    '@media (min-width: 768px) and (max-width: 1024px)': {
                                                            fontSize: '40px',
                                                    },
                                                    '@media (min-width: 1025px) and (max-width: 1280px)': {
                                                            fontSize: '45px',
                                                    },
                                                    '@media (min-width: 1281px) and (max-width: 1440px)': {
                                                            fontSize: '50px',
                                                    },
                                                    '@media (min-width: 1441px)': {
                                                            fontSize: '55px',
                                                    }    
                                                }} />
                   
              
            </Box>


          



            <Box    onClick={sendMessage}   
                    sx={{   display: 'flex',
                            flexDirection: 'row',
                            cursor: 'pointer', 
                            alignItems: 'center',
                            backgroundColor: '#17662F',
                            color: 'white',
                            fontWeight: 'bold',
                            marginRight: '15px',
                            justifyContent: 'center',
                            '&:hover': { backgroundColor: '#e64a19' },
                            '@media (min-width: 350px) and (max-width: 480px)': {
                                width:'7.5rem',
                                fontSize: '15px',
                                '&:hover': {
                                    borderRadius: '12px',
                                    transform: 'scale(1.05)'
                                }, 
                                borderRadius: '12px',
                                gap: '0.3rem',
                                padding: '8px',        
                                boxShadow: '8px 10px 4px rgba(0, 0, 0, 0.6)',
                                transition: 'background-color 0.3s, transform 0.2s',      
                            },
                            '@media (min-width: 481px) and (max-width: 767px)': {
                                width:'11rem',
                                fontSize: '18px',
                                '&:hover': {
                                    borderRadius: '14px',
                                    transform: 'scale(1.05)'
                                },
                                borderRadius: '14px',
                                gap: '1rem',
                                padding: '10px',
                                boxShadow: '8px 10px 4px rgba(0, 0, 0, 0.6)',
                                transition: 'background-color 0.3s, transform 0.2s', 
                            },
                            '@media (min-width: 768px) and (max-width: 1024px)': {
                                width:'12.5rem',
                                fontSize: '21px',
                                '&:hover': {
                                    borderRadius: '16px',
                                    transform: 'scale(1.05)'
                                },
                                borderRadius: '16px',
                                gap: '1rem',
                                padding: '10px',
                                boxShadow: '8px 10px 4px rgba(0, 0, 0, 0.6)',
                                transition: 'background-color 0.3s, transform 0.2s', 
                            },
                            '@media (min-width: 1025px) and (max-width: 1280px)': {
                                width:'21.5rem',
                                fontSize: '24px',
                                '&:hover': {
                                    borderRadius: '18px',
                                    transform: 'scale(1.05)'
                                },
                                borderRadius: '18px',
                                gap: '1rem',
                                padding: '10px',
                                boxShadow: '8px 10px 4px rgba(0, 0, 0, 0.6)',
                                transition: 'background-color 0.3s, transform 0.2s', 
                            },
                            '@media (min-width: 1281px) and (max-width: 1440px)': {
                                width:'25rem',
                                fontSize: '27px',
                                '&:hover': { 
                                    borderRadius: '20px',
                                    transform: 'scale(1.05)'
                                },
                                borderRadius: '20px',
                                gap: '1rem',
                                padding: '10px',
                                boxShadow: '8px 10px 4px rgba(0, 0, 0, 0.6)',
                                transition: 'background-color 0.3s, transform 0.2s', 
                            },
                            '@media (min-width: 1441px)': {
                                width:'27rem',
                                fontSize: '30px',
                                '&:hover': {
                                    borderRadius: '22px',
                                    transform: 'scale(1.05)'
                                },  
                                borderRadius: '22px',
                                gap: '1rem',
                                padding: '10px',
                                boxShadow: '8px 10px 4px rgba(0, 0, 0, 0.6)',
                                transition: 'background-color 0.3s, transform 0.2s', 
                            }
                                
                            }} 
            >
                                
                
                                <Box sx={{ '@media (min-width: 350px) and (max-width: 480px)': {
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
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    gap: '1rem',
                                            },
                                            '@media (min-width: 1281px) and (max-width: 1440px)': {
                                                    fontSize: '27px',
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    gap: '1rem',
                                            },
                                            '@media (min-width: 1441px)': {
                                                    fontSize: '30px',
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    gap: '1rem',
                                            }    
                                        }} 
                                >  
                  

                                                <Box>
                                                    Escribenos
                                                </Box>
                                                <Box>
                                                    "AHORRAR"
                                                </Box>                 
                                </Box>        
                                        
                                <WhatsAppIcon sx={{ '@media (min-width: 350px) and (max-width: 480px)': {
                                                            fontSize: '35px',
                                                    },
                                                    '@media (min-width: 481px) and (max-width: 767px)': {
                                                            fontSize: '40px',
                                                    },
                                                    '@media (min-width: 768px) and (max-width: 1024px)': {
                                                            fontSize: '40px',
                                                    },
                                                    '@media (min-width: 1025px) and (max-width: 1280px)': {
                                                            fontSize: '45px',
                                                    },
                                                    '@media (min-width: 1281px) and (max-width: 1440px)': {
                                                            fontSize: '50px',
                                                    },
                                                    '@media (min-width: 1441px)': {
                                                            fontSize: '55px',
                                                    }    
                                                }} />
                                        
                                       
                                
                  
            </Box>

          

          
    </div>
  )
}
