import Hero from '../Hero/Hero';
import CTA from '../CTA/CTA';
import LandingAbout from '../LandingAbout/LandingAbout';
import LandingEvents from '../LandingEvents/LandingEvents';
import WWD from '../WWD/WWD'; //where does this go?
import Partners from '../Partners/Partners';
import UpcomingEvents from '../UpcomingEvents/UpcomingEvents';
const LandingPage: React.FC = ()=> {
    return(
        <div>
            <Hero/>
            <UpcomingEvents/>
            <Partners/>
            <LandingAbout/>
            <CTA/>
            <WWD/>
        </div>

    );
};

export default LandingPage;