import { useState } from 'react';
import './App.css';
import Items from './components/ingredients.jsx';
import Card from './components/card.jsx';
import Destinations from './components/destinations.jsx'
import Packages from './components/packages.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/contact.jsx'
import Footer from './components/footer.jsx'
import Hero from './components/Hero.jsx'




function App() {


  return (
    <>
      <Hero />
      <Destinations />
      <Packages icon1="compass" title1="Guided Trips" description1="Looking for the complete experience? Take a tour with one of our experts. They'll show you secrets that you're likely to miss otherwise." icon2="camera-retro" title2="Photo Trips" description2="Want to experience nature's beauty without all of that annoying exercise? Take a photo tour on one of our Life is a party! buses." icon3="bicycle" title3="Biking Trips" description3="If bicycles are more your speed, consider taking a tour through one of our mountain or city bike paths. We'll provide the bikes, and lunch too!" icon4="flag-checkered" title4="Racing Trips" description4="Got a competitive spirit? Sign up for one of our challenge-based marathons! Try to reach the summit before any other group." />
      <Testimonials quote1="Wow! This tour made me realize how much I love being outside with my friends. After going on one of these tours, I can safely say that beer pong is my favorite game all time, also the cultural programs were really interesting!" author1="Albert Herter" quote2="Wow, this really blew my mind. We had so much fun at the beach, and also some hidden secrets revealed. Come on, I'm living in this city for 5 years. Amazing!" author2="Sharon Rosenberg" quote3="If you want to understand your friends better, head to the mountains. I mean, seriously. It's like sitting next to a campfire and just talk in the sunset, woah. You know? It's like that." author3="Luis Mendoza"/>
      <Contact />
      <Footer />
      
    </>
  );
}

export default App;

