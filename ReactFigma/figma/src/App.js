import Navbar from "./components/navbar";
import "./styles/app.css";
import { ReactComponent as Logo } from "./logo/logo.svg";
import TextSection from "./components/textSection";
import TilesSection from "./components/titlesSection";
import Card from "./components/cards";
import Footer from "./components/footer";
import Pagination from "./components/pagination";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Logo className="logo" />
      <TextSection />
      <TilesSection />
      <Card />
      <Pagination />
      <Footer />
    </div>
  );
}

export default App;
