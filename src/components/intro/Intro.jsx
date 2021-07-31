import React,{useEffect,useRef} from 'react';
import styled from 'styled-components';
import { init } from 'ityped';

const Intro = () => {

    const textRef = useRef();
    useEffect(() => {
        init(textRef.current,{
            showCursor: false,
            backDelay:1500,
            backSpeed:60,
            strings:["Frontend Developer", "UX/UI Designer"],
        });
    }, [])

    return (
        <Main id="intro">
            <Left>
                <ImageContainer>
                    <Image src="assets/man.png"/>
                </ImageContainer>
            </Left>
            <Right>
                <Wrapper>
                    <Hi>Hi There, I`m</Hi>
                    <MyName>Omid Reza Askarian</MyName>
                   <Job ref={textRef}></Job>
                </Wrapper>
                <Portfolio href="#portfolio">
                    <Arrow src="assets/down.png"/>
                </Portfolio>
            </Right>
        </Main>
    )
}

export default Intro

const Main = styled.div`
width:100vw;
height: calc(100vh - 70px);
scroll-snap-align:start;
background-color:#fff;
display: flex;
 `;
 const Left = styled.div`
 flex: 0.5;
overflow: hidden;
 `;
 const Right = styled.div`
 flex: 0.5;
position: relative;
 `;
 const ImageContainer = styled.div`
 width: 700px;
 height: 700px;
 background-color: crimson;
 border-radius: 50%;
 display: flex;
 justify-content: center;
 align-items: flex-end;
 float: right;
 `;
 const Image = styled.img`
 height: 90%;
 `;
 const Wrapper = styled.div`
 width: 100%;
 height: 100%;
 padding-left: 50px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 `;
 const Hi = styled.h2`
 font-size: 35px;
 `;
 const MyName = styled.h1`
 font-size: 60px;
 margin: 10px 0;
 `;
 const Job = styled.h3`
 font-size: 30px;
 color: crimson;
 `; 
 const Portfolio = styled.a`
 position: absolute;
 bottom: 20px;
 left:40%;
 `;
 const Arrow = styled.img`
 width: 30px;
 animation: arrowBlink 2s infinite;
 `;

