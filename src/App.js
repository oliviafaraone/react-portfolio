import React from 'react';
import Header from './components/Header';
// import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PortfolioContainer from "./components/PortfolioContainer";

function App() {
  return (
    <div>
      <Header></Header>
      {/* <Navigation></Navigation> */}
      <main>
      <PortfolioContainer />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
