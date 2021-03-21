import React from 'react';
import './App.css';
import Header from './components/Header';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import Cards from './components/Cards';
import SectionFour from './components/SectionFour';
import SectionFive from './components/SectionFive';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <Cards />
        <SectionFour />
        <SectionFive />
        <Footer />
      </div>
    </div>
  );
}

export default App;
