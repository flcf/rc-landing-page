import React from 'react';
import Hero from './lib/components/Hero/Hero';
import Footer from './lib/components/Footer/Footer';
import Navigation from './lib/components/Navigation/Navigation';
import logo from './logo.svg';
import LandingAbout from './lib/components/LandingAbout/LandingAbout';
import LandingEvents from './lib/components/LandingEvents/LandingEvents';
import Partners from './lib/components/Partners/Partners';
import CTA from './lib/components/CTA/CTA';

const App = ()=> {
  console.log("Displays")
  return (
    <div className="App">
      <Navigation/>
      <Hero/>
      <LandingAbout/>
      <LandingEvents/>
      <Partners/>
      <CTA/>
      <Footer/>
    </div>
  );
}

export default App;
