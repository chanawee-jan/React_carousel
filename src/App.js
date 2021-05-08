import logo from "./logo.svg";
import "./App.css";
import { ImageCarousel } from "./components/ImageCarousel/ImageCarousel";
import { Section } from "./components/Section";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: "300px", height: "300px" }}>
          <ImageCarousel />
        </div>
      </header>
    </div>
  );
}

export default App;
