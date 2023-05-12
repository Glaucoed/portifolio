import './styles/global.css'
import { useMediaQuery } from 'react-responsive';

import Avatar from './components/Avatar.tsx';
import Sobre from './components/Sobre.tsx';
import Skill from './components/Skill.tsx';
import Projeto from './components/Projeto.tsx';
import Footer from './components/Footer.tsx';
import Nav from './components/Nav.tsx';
import Navbar from './components/Navbar.tsx'

function App() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <>
    {
      isMobile ? <Navbar /> :  <Nav />
    }
    
    <main id="main">
      <Avatar />
      <Sobre />
      <Skill />
      <Projeto />
      <Footer />
    </main>
    </>
  );
}

export default App;
