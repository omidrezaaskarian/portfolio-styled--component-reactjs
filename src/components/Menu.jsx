import React from 'react'
import styled from 'styled-components';

const Menu = ({menuOpen,setMenuOpen}) => {
    return (
        <MainMenu className={(menuOpen && "active")}>
            <MenuItem>
            <Item onClick={() => setMenuOpen(false)}>
                <Intro href="#intro">Home</Intro>
            </Item>
            <Item onClick={() => setMenuOpen(false)}>
                <Intro href="#portfolio">Portfolio</Intro>
            </Item>
            <Item onClick={() => setMenuOpen(false)}>
                <Intro href="#works">Works</Intro>
            </Item>
            <Item onClick={() => setMenuOpen(false)}>
                <Intro href="#testimonials">Testimonials</Intro>
            </Item>
            <Item onClick={() => setMenuOpen(false)}>
                <Intro href="#contact">Contact</Intro>
            </Item>
            </MenuItem>
        </MainMenu>
    )
}

export default Menu
const MainMenu = styled.div`
width: 300px;
height: 100vh;
background-color:#15023a ;
position:fixed;
top: 0;
right:0;
z-index:2;
display: none;
flex-direction: column;
align-items: center;
justify-content: center;
transition: all 1s ease;
&.active{
    display: flex;
}
`;
const MenuItem = styled.ul`
font-size: 30px;
font-weight: 300;
color:#fff;
width: 60%;
`;
const Item = styled.li`
margin-bottom: 25px;
`;
const Intro = styled.a`
font-size: 30px;
color:#fff;

&:hover{
    font-weight: 500;
}
`;

