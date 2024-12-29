import Footer from './lib/components/Footer/Footer';
import Navigation from './lib/components/Navigation/Navigation';
import LandingPage from './lib/components/LandingPage/LandingPage';

const App = ()=> {
  return (
    <div className="App">
      <Navigation/>
      <LandingPage/>
      <Footer/>
    </div>
  );
}

export default App;
