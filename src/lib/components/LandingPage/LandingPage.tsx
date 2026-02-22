import Hero from '../Hero/Hero';
import CallToAction from '../CallToAction/CallToAction';
import LandingAbout from '../LandingAbout/LandingAbout';
import LandingEvents from '../LandingEvents/LandingEvents';
import WWD from '../WWD/WWD'; //where does this go?
import Partners from '../Partners/Partners';
import UpcomingEvents from '../UpcomingEvents/UpcomingEvents';

const LandingPage: React.FC = () => {
  return (
    <div>
      <Hero />
      <UpcomingEvents />
      <LandingAbout />
      <LandingEvents />
      <Partners />
      <CallToAction />
    </div>
  );
};

export default LandingPage;
