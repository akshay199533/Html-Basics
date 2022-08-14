import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Categories from './components/Categories';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Categories></Categories>
        <Cards></Cards>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
