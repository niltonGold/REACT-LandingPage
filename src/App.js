import './App.css';
import { FooterFlotante } from './components/footerFlotante';
import { Footer } from './components/PrincipalComponents/Footer';
import { Header } from './components/PrincipalComponents/Header';
import { Main } from './components/PrincipalComponents/Main';
import { useState, useEffect } from 'react';


function App() {


  const [isFloatingFooterVisible, setFloatingFooterVisible] = useState(true);

  useEffect(() => {
      const handleScroll = () => {
              const footerOffsetTop = document.querySelector('.Footer-container').offsetTop;
              const scrollPosition = window.scrollY + window.innerHeight;

              if (scrollPosition >= footerOffsetTop) {
                setFloatingFooterVisible(false);
              } else {
                setFloatingFooterVisible(true);
              }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
            
    }, []);






  return (
    <div className="App-container">

          <Header/>
          <Main/>
          <Footer/>
          <FooterFlotante isVisible={isFloatingFooterVisible} />
          
    </div>

  );
}

export default App;















