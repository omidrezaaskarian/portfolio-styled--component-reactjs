
import styled from 'styled-components';

const Testimonials = () => {
    return (
        <Main id="testimonials">
            <Title>
                <Container>
                    <Card>
                        <Top>
                            <ImageLeft src="assets/right-arrow.png" />
                            <ImageUser src="assets/omid.png" />
                            <ImageRight src="assets/youtube.png" />
                        </Top>
                        <Center>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt pariatur provident illo nam praesentium, voluptate quis 
                        </Center>
                        <Bottom>
                            <Name>Omid</Name>
                            <JobTitle>Frontend Developer</JobTitle>
                        </Bottom>
                    </Card>
                </Container>
            </Title>
        </Main>
    )
}

export default Testimonials

const Main = styled.div`
 width:100vw;
height: calc(100vh - 70px);
scroll-snap-align:start;
display: flex;
flex-direction: column;
align-items: center;
background-color: #fff;
 `;
const Title = styled.h1`
font-size: 50px;
`;
const Container = styled.div`
width: 100%;
height: 80%;
display: flex;
justify-content: center;
align-items: center;
`;
const Card = styled.div`
width: 250px;
height: 70%;
border-radius: 10px;
box-shadow:0px 0px 15px -8px #000;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 20px;
`;
const Top = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;
const Center = styled.div`
padding: 10px;
border-radius: 10px;
background-color: rgb(250, 244, 245);
font-size: 14px;
`;
const Bottom = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;
const ImageLeft = styled.img`
height: 25px;

`;
const ImageUser = styled.img`
height:60px ;
width:60px ;
border-radius: 50%;
object-fit: cover;
margin:0 30px ;
`;
const ImageRight = styled.img`
height: 25px;
`;
const Name = styled.h3`
margin-bottom: 5px;

`;
const JobTitle = styled.h4`
color:rgb(121, 115, 115) ;

`;
