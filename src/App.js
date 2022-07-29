import React from 'react';
import ImgCarousel from './components/carousel/imgCarousel';
import Destinations from './components/destinations/destinations';
import Footer from './components/footer/footer';
import Hero from './components/Hero/hero';
import Navbar from './components/navbar/navbar'
import Search from './components/search/search';
import Selects from './components/selects/selects';

 function App() {
     return (
         <div>
             <Navbar />
             <Hero />
             <Destinations />
             <Search />
             <Selects />
             <ImgCarousel />
             <Footer />
         </div>
     );
 }
 export default App;