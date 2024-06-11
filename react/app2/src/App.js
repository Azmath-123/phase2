import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import Footer from "./components/Footer.js";
import axios from "axios"

function App() {
  const data = axios.get("https//api.github.com/users")
  return (
    <>
    <Header name ="CFI A24"/>
    <Hero/>
    <Footer/>
    </>
  );
}

export default App;
