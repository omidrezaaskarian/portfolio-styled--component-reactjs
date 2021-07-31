import React,{useState} from 'react'
import styled from 'styled-components';

const Works = () => {
    const [currentSldier, setCurrentSldier] = useState(0);
    const data = [
        {
            id: "1",
            icon: "./assets/mobile.png",
            title: "Web Design",
            desc:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            img:
              "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
          },
          {
            id: "2",
            icon: "./assets/globe.png",
            title: "Mobile Application",
            desc:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img:
              "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
          },
          {
            id: "3",
            icon: "./assets/writing.png",
            title: "Branding",
            desc:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img:
              "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
          },
    ];

    const handleClick = (way) => {
        way === "left" ? setCurrentSldier(currentSldier > 0 ? currentSldier-1 : 2) : 
        setCurrentSldier(currentSldier < data.length -1 ? currentSldier + 1 : 0 );

    }

    return (
        <Main id="works">
            <Slider style={{transform:`translateX(-${currentSldier * 100}vw)`}}>
                {data.map(d => (
                <Container>
                    <Item>
                        <Left>
                            <LeftContainer>
                                <ImgContiner>
                                    <Image src={d.icon} />
                                </ImgContiner>
                                <Title> {d.title}</Title>
                                <Desc>{d.desc}</Desc>
                                <Project>Projects</Project>
                            </LeftContainer>
                        </Left>
                        <Right>
                            <ImageSlider src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"/>
                        </Right>
                    </Item>
                </Container>))}
            </Slider>
            <LeftArrow src="assets/arrow.png" onClick={() =>handleClick("left") }/>
            <RightArrow src="assets/arrow.png" onClick={() =>handleClick() }/>
        </Main>
    )
}

export default Works

const Main = styled.div`
 width:100vw;
height: calc(100vh - 70px);
scroll-snap-align:start;
background-color: crimson;
display: flex;
align-items: center;
justify-content: center;
position: relative;
 `;
const Slider = styled.div`
 height: 350px;
 display: flex;
 position: absolute;
 left: 0;
 transition:all 1s ease-out ;
 `;
const Container = styled.div`
 width: 100vw;
 display: flex;
align-items: center;
justify-content: center;
 `;
const Item = styled.div`
 width: 700px;
 height: 100%;
 background-color: #fff;
 border-radius: 20px;
 display: flex;
align-items: center;
justify-content: center;
 `;
const Left = styled.div`
 flex: 4;
 height: 80%;
 display: flex;
align-items: center;
justify-content: center;
 `;
const Right = styled.div`
 flex: 8;
display: flex;
align-items: center;
justify-content: center;
 height: 100%;
overflow-y: hidden;
 `;
const LeftContainer = styled.div`
width: 90%;
height: 70%;
display: flex;
flex-direction: column;
justify-content: space-between;
`;
const ImgContiner = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: rgb(245,179,155);
display: flex;
align-items: center;
justify-content: center;
`;
const Image = styled.img`
width: 50%;
`;
const Title = styled.h2`
font-size: 20px;
`;
const Desc = styled.p`
font: 13px;
`;
const Project = styled.span`
font-size:12px;
font-weight: 600;
color:crimson;
cursor: pointer;
`;
const ImageSlider = styled.img`
width: 400px;
transform: rotate(-10deg);
cursor: pointer;
`;
const LeftArrow = styled.img`
height: 50px;
position: absolute;
left: 100px;
transform: rotateY(180deg);
cursor: pointer;
`;
const RightArrow = styled.img`
height: 50px;
position: absolute;
right: 100px;
cursor: pointer;
`;