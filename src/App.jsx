import "./App.css";
import troll from "./assets/TrollFace.png";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  return (
    <>
      <Header image={troll} />
      <main>
        <Form />
      </main>
    </>
  );
}

export default App;
