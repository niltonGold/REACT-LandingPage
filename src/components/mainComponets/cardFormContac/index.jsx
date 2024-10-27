import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './style.css';

const initialFormData = {
        nombre: '',
        telefono: '',
        email: '',
        mensaje: '',
        area: '',
};


const CardFormContac = () => {
      
      const [formData, setFormData] = useState( initialFormData );

      const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
                  ...formData,
                  [name]: value
            });
      };
      
      const handleSubmit = (e) => {
            e.preventDefault();
            sendEmail( formData );
            console.log( formData );
            setFormData( initialFormData );
      };

      const sendEmail = ( data ) => {
            
            const ServiceAiddyaw = 'service_aiddyaw';

            const TemplateId = 'template_xyhrz9u';

            const PublicKey = 'r_-18lB31SJkvZzPx';

            emailjs.send( ServiceAiddyaw, TemplateId, data, PublicKey )
                  .then((response) => {
                  console.log('Correo enviado exitosamente!', response.status, response.text);
                  alert('Mensaje enviado exitosamente!');
                  }, (error) => {
                  console.error('Error al enviar el correo:', error);
                  alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
                  });
      };




  return (
    <>

                              
      <form className='Formulario-Principal-Container' onSubmit={handleSubmit}>
            
                    
            <div className='formulario-titulo'>
                  DIAGNÓSTICO ENERGÉTICO GRATIS  
            </div>
            
            <div className='formulario-subtitulo'>
                  Completa el formulario y recibe un diagnóstico energético gratis
            </div>
            
            <div className='formulario-obligatorios-opcionales-container'>
                        <div className='camposObligatorios'>
                              (*) Campos obligatorios
                        </div>


                        <div className='camposOpcionales'>
                              (o) Campos opcionales
                        </div>
            </div>

                    







            <div className='formulario-subcontainer'>


                    
                        <div className='escribir-datos-container'>
                              <div className='titulo-input'>
                                    <div className='formulario-label'>Nombre</div>
                                    <div className='formulario-dos-puntos'>:</div>
                              </div>
                              <div className='input-container'>
                                    <input type="text" className='in-put obligatorio' name="nombre" value={formData.nombre} onChange={handleChange} required />
                                    <div className='camposObligatorios'> (*) </div>
                              </div>
                        </div>
                        
                        
                        <div className='escribir-datos-container'>
                              <div className='titulo-input'>
                                    <div className='formulario-label'>Teléfono</div>
                                    <div className='formulario-dos-puntos'>:</div>
                              </div>
                              <div className='input-container'>
                                    <input type="tel" className='in-put obligatorio' name="telefono" value={formData.telefono} onChange={handleChange} required />
                                    <div className='camposObligatorios'> (*) </div>
                              </div>
                        </div>
                        
                  
                        <div className='escribir-datos-container'>
                              <div className='titulo-input'>
                                    <div className='formulario-label'>Email</div>
                                    <div className='formulario-dos-puntos'>:</div>
                              </div>
                              <div className='input-container'>
                                    <input type="email" className='in-put obligatorio' name="email" value={formData.email} onChange={handleChange} required />
                                    <div className='camposObligatorios'> (*) </div>
                              </div>
                        </div>
                        
                  
                        <div className='escribir-datos-container'>
                              <div className='titulo-input'>
                                    <div className='formulario-label'>Mensaje</div>
                                    <div className='formulario-dos-puntos'>:</div>
                              </div>
                              <div className='input-container'>                            
                                    <textarea name="mensaje" className='in-put opcional' value={formData.mensaje} onChange={handleChange} />
                                    <div className='camposOpcionales'> (o) </div>
                              </div>
                        </div>

                        
                        <div className='escribir-datos-container'>
                              <div className='titulo-input'>
                                    <div className='formulario-label-area'>Area de tu embalse (m<sup>2</sup>)</div>
                                    <div className='formulario-dos-puntos'>:</div>
                              </div>
                              <div className='input-container'>
                                    <input type="number" className='in-put in-put-area opcional' name="area" value={formData.area} onChange={handleChange} />
                                    <div className='camposOpcionales'> (o) </div>
                              </div>
                        </div>


                        <button className='btn-submit' type="submit">Enviar</button>
                        
            </div>               
      </form>
                        
    </>
  );
};

export default CardFormContac;