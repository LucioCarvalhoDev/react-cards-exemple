import styled from 'styled-components';
import './App.css';
import Card from './Components/Card/Card.jsx';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Cards>
          <Card 
            image="https://picsum.photos/100/100"
            title="lorem"
            content="lorem ipsum"
          ></Card>
          <Card 
            image="https://picsum.photos/100/100"
            title="lorem"
            content="lorem ipsum"
          ></Card>
          <Card 
            image="https://picsum.photos/100/100"
            title="lorem"
            content="lorem ipsum"
          ></Card>
          <Card 
            image="https://picsum.photos/100/100"
            title="lorem"
            content="lorem ipsum"
          ></Card>
          <Card 
            image="https://picsum.photos/100/100"
            title="lorem"
            content="lorem ipsum"
          ></Card>
          <Card 
            image="https://picsum.photos/100/100"
            title="lorem"
            content="lorem ipsum"
          ></Card>
          <Card 
            image="https://picsum.photos/100/100"
            title="lorem"
            content="lorem ipsum"
          ></Card>
          <Card 
            image="https://picsum.photos/100/100"
            title="lorem"
            content="lorem ipsum"
          ></Card>
        </Cards>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  
`

const Cards = styled.section`
  padding: 20px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 400px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

export default App;
