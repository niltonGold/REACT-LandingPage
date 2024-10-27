import './styles.css';
import React from 'react';
import { Box, AppBar, Button } from '@mui/material';

export const Header = () => {

  const menuItems = [
    { label: 'PRESENTACIÓN', href: '#Inicio' },
    { label: 'PORQUE', href: '#Por_que' },
    { label: 'QUIENES SOMOS', href: '#QuienesSomos' },
    { label: '¿QUE ES SFS?', href: '#SFS' },
    { label: 'EXPERIENCIA', href: '#Experiencia' },
    { label: 'DIAGNÓSTICO', href: '#Diagnostico' },
  ];

      const scrollToSection = (event, href) => {
    event.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
    
    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: 'rgba(241, 226, 40, 0.2)', padding: '5px' }}>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                        
                        {menuItems.map((item, index) => (
                                
                                    <React.Fragment key={item.label}>
                                        
                                            <Button href={item.href}
                                                    sx={{ color: 'inherit',
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
                                                          }  
                                                        }}
                                              >
                                                
                              
                                                    {item.label}
                                                    
                              
                                            </Button>
                                            
                                            {index < menuItems.length - 1 && (
                                                <span style={{ margin: '0 8px', alignSelf: 'center' }}>|</span>
                                            )}
                                
                                    </React.Fragment>
                        
                        ) )}
                    
                    </Box>
                
            </AppBar>
        </>
  )
}
