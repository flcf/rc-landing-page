import Footer from './lib/components/Footer/Footer';
import Navigation from './lib/components/Navigation/Navigation';
import LandingPage from './lib/components/LandingPage/LandingPage';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './lib/components/AboutPage/AboutPage';

const App: React.FC = ()=> {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/about' element={<AboutPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
