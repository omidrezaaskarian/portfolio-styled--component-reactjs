import React from 'react'
import styled from 'styled-components';
import PortfolioList from '../portfolioList/PortfolioList';
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio,
  } from "../../data";
const Portfolio = () => {


const [selected, setSelected] = React.useState("feature");
const list =[

    {
        id: "featured",
        title: "Featured",
      },
      {
        id: "web",
        title: "Web App",
      },
      {
        id: "mobile",
        title: "Mobile App",
      },
      {
        id: "design",
        title: "Design",
      },
      {
        id: "content",
        title: "Content",
      },
];

  

    return (
        <Main id="portfolio">
            <Title>Portfolio</Title>
            <MenuItem>
                {/* <Item className="active">React Project</Item>
                <Item>Web Design</Item>
                <Item>App Design</Item> */}
                {list.map(item =>(
                    <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} />
                ) )}
            </MenuItem>
            <Container>
            <Card> 
            <Image src="assets/card1.png" />
            <Titr> Banking App</Titr>
            </Card>
            <Card> 
            <Image src="assets/card1.png" />
            <Titr> Banking App</Titr>
            </Card>
            <Card> 
            <Image src="assets/card1.png" />
            <Titr> Banking App</Titr>
            </Card>
            <Card> 
            <Image src="assets/card1.png" />
            <Titr> Banking App</Titr>
            </Card>
            <Card> 
            <Image src="assets/card1.png" />
            <Titr> Banking App</Titr>
            </Card>
            <Card> 
            <Image src="assets/card1.png" />
            <Titr> Banking App</Titr>
            </Card>
            </Container>

        </Main>
    )
}

export default Portfolio

const Main = styled.div`
 width:100vw;
height: calc(100vh - 70px);
background-color:#fff;
display:flex;
flex-direction:column;
align-items:center;
padding-top: 80px;
 `;
const Title = styled.h1`
font-size:50px
`;
const MenuItem = styled.ul`
margin:10px;
padding:0;
display:flex;
`;

const Container = styled.div`
width: 70%;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
`;

const Card = styled.div`
width:220px ;
height: 150px;
border: 1px solid lightgray;
border-radius: 20px;
margin: 10px 20px;
display: flex;
align-items: center;
justify-content: center;
color:#fff;
position: relative;
cursor: pointer;
transition: all .2s ease-in-out;


&:hover{
background-color: #15023a !important;
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
transform: scale(1.1);
}

`;
const Image = styled.img`
width: 100%;
height:100%;
object-fit: cover;
z-index:1;

`;
const Titr = styled.h3`
position: absolute;
font-size: 20px;
z-index:3;
`; 