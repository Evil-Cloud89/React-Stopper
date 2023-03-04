import Container from "./components/Container/Container";
import Button from "./components/Button/Button";

function App() {
  
  return (
    <Container>
      <h1>HH:mm:ss.ms</h1>
      <Button>Start</Button>
      <Button>Stop</Button>
      <Button>Reset</Button>
    </Container>
  );
}

export default App;
