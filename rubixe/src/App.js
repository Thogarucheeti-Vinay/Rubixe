import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Details from "./components/Details";

function App() {
  return (
    <div class="container">
      <Navbar className="navbar" />
      <Content className="content" />
      <Form />
      <Details />
      <Footer />
    </div>
  );
}

export default App;
