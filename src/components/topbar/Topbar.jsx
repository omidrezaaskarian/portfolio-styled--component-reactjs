import React from 'react';
import styled from 'styled-components';
import {Person,Mail} from '@material-ui/icons';

const Topbar = ({menuOpen,setMenuOpen}) => {
    return (
        <Main className={(menuOpen && "active")}>
            <Wrapper>
               
                <Left>
                    <Logo href="#intro">
                       Camtorial
                    </Logo>
                    <ItemContainer>
                        <Person className="icon" />
                        <Number>+98 915 228 55443</Number>
                    </ItemContainer>
                    <ItemContainer>
                        <Mail className="icon" />
                        <Number>a.omid88@gmail</Number>
                    </ItemContainer>
                </Left>
                <Right>
                  <Hamburger onClick={() => setMenuOpen(!menuOpen)} >
                    <Line1></Line1>
                    <Line2></Line2>
                    <Line3></Line3>
                  </Hamburger>
                </Right>
            </Wrapper>
        </Main>
    )
}

export default Topbar

const Main = styled.div`
width:100%;
height:70px;
background-color:#fff;
color:#15023a;
position:fixed;
top:0;
z-index:3;
/* box-shadow: 0 2px 2px -2px rgba(0,0,0,.2); */
box-shadow: 0px 1px 10px #e2e2e2;
&.active{
background-color:#fff ;

}
`;

const Wrapper = styled.div`
padding:10px 30px;
display:flex;
align-items: center;
justify-content: space-between;
`;

const Right = styled.div`

`;
const Left = styled.div`
display: flex;
align-items: center;
`;
const Logo = styled.a`
font-size: 40px;
font-weight: 700;
color: #15023a;
margin-right: 40px;
`;
const ItemContainer = styled.div`
display: flex;
align-items: center;
margin-left: 30px;
`;

const Number = styled.span`
font-size: 15px;
font-weight: 400;
`;  
const Hamburger = styled.div`
width: 32px;
height: 25px;
display: flex;
flex-direction: column;
justify-content: space-between;
cursor: pointer;

`;

const Line1= styled.span`
width: 100%;
height: 3px;
background-color: #15023a;
`;
const Line2= styled.span`
width: 100%;
height: 3px;
background-color: #15023a;
`;
const Line3= styled.span`
width: 100%;
height: 3px;
background-color: #15023a;
`;