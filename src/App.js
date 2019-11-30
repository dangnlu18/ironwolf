import React from 'react';
import './App.css';
import Navbar from './components/navbar'
import Article from './components/articles'
import ArticleCard from './components/articles';
import BannerCarousel from './components/carousel';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <BannerCarousel />
      </div>

    </div>
  );
}

export default App;
