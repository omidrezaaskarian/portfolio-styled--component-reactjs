import styled from 'styled-components';
import Intro from './components/intro/Intro';
import Topbar from './components/topbar/Topbar';
import Portfolio from './components/portfolio/Portfolio';
import Works from './components/works/Works';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import React,{useState} from 'react';
import Menu from './components/Menu';




function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Main>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Section>
        <Intro />
        <Portfolio />
        <Works />
        {/* <Testimonials /> */}
        <Contact />
      </Section>
      
    </Main>
  );
}

export default App;

const Section = styled.div`
width:100%;
height: calc(100vh - 70px);
background-color:lightsalmon;
position:relative;
top:70px;
scroll-behavior:smooth ;
scroll-snap-type: y madatory;
scrollbar-width: none; 
`;
const Main = styled.div`
height:100vh;
`;