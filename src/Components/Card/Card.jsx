import styled from 'styled-components';

function Card(props) {
    return (
    <>
        <Container>
            <Header>
                <img src={props.image} alt="" />
                <h6>{props.title}</h6>
            </Header>
            <Main>
                {props.content}
            </Main>
        </Container>
    </>)
}

const Container = styled.section`
    display: grid;
    grid-template-rows: 2rem 1fr;
    background: #eeeeee;
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 10px;

    @media screen and (min-width: 400px) {
        margin: 10px;
    }
`

const Header = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    & > img {
        border-radius: 100%;
        height: 100%;
        margin-right: 5px;
    }
`

const Main = styled.div`
    text-align: left;
    margin-top: 5px;
`


export default Card;