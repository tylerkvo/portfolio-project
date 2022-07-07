import './App.css';
import './css/base.css'
import './css/main.css'
import Header from './Components/Header';
import About from './Components/About';
import Home from './Components/Home';
import Extra from './Components/Extra';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <Home />
        <About />
        <Footer />
    </div>
  );
}

export default App;
