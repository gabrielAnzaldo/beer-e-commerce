import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        <section>
          <h1>Welcome to Beer e-commerce!</h1>
          <p>
            <Link to="products">Check our best seller products</Link>
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
