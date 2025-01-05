import Hero from '../Hero/Hero';
import CTA from '../CTA/CTA';
import LandingAbout from '../LandingAbout/LandingAbout';
import LandingEvents from '../LandingEvents/LandingEvents';
import WWD from '../WWD/WWD'; //where does this go?
import Partners from '../Partners/Partners';
const LandingPage: React.FC = ()=> {
    return(
        <div>
            <Hero/>
            <LandingAbout/>
            <LandingEvents/>
            <Partners/>
            <CTA/>
        </div>

    );
};

export default LandingPage;