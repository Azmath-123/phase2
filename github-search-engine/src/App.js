import Header from "./Header";
import Footer from "./Footer";
import './App.css';
function App(){
  return(
    <div className="app-container">
    <Header />
      <main>
        <h2>Welcome to My Website</h2>
        <p>This is the main content of the website.</p>
      </main>
      <Footer />
    </div>

  )
}
export default App;