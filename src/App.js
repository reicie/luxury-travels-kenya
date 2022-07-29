import React from 'react';
import Destinations from './components/destinations/destinations';
import Hero from './components/Hero/hero';
import Navbar from './components/navbar/navbar'
import Search from './components/search/search';

 function App() {
     return (
         <div>
             <Navbar />
             <Hero />
             <Destinations />
             <Search />
         </div>
     );
 }
 export default App;