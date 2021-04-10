import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Components/Header.css';
import './Components/Footer.css';
import './Components/BackToTop.css';
import './Containers/About.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import BackToTop from './Components/BackToTop';
import Home from './Containers/Home';
import About from './Containers/About';
import Error from './Containers/Error';
import './Containers/Error.css';
import SingleCocktail from "./Containers/SingleCocktail";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Router>
    <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/cocktail/:id" component={SingleCocktail} />
          <Route path="*" component={Error} />
        </Switch>
    <BackToTop />
    <Footer />
    </Router>
    </div>
  );
}

export default App;
