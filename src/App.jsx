import './styles/global.css'

import Avatar from './components/Avatar.tsx';
import Sobre from './components/Sobre.tsx';
import Skill from './components/Skill.tsx';
import Projeto from './components/Projeto.tsx';
import Footer from './components/Footer.tsx';

function App() {
  return (
    <main>
      <Avatar />
      <Sobre />
      <Skill />
      <Projeto />
      <Footer />
    </main>
  );
}

export default App;
