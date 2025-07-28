import Hero from '../Hero/Hero';
import CTA from '../CTA/CTA';
import LandingAbout from '../LandingAbout/LandingAbout';
import LandingEvents from '../LandingEvents/LandingEvents';
import Partners from '../Partners/Partners';
import UpcomingEvents from '../UpcomingEvents/UpcomingEvents';
import NewsLetter from '../NewsLetter/NewsLetter';
const LandingPage: React.FC = ()=> {
    return(
        <div>
            <Hero/>
            <UpcomingEvents/>
            <Partners/>
            <LandingAbout/>
            <CTA/>
            <NewsLetter/>
        </div>

    );
};

export default LandingPage;