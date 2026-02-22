import AboutHero from '../AboutHero/AboutHero';
import CallToAction from '../CallToAction/CallToAction';
import MeetTheTeam from '../MeetTheTeam/MeetTheTeam';
import OurValues from '../OurValues/OurValues';
import WWD from '../WWD/WWD';

const AboutPage: React.FC = () => {
  return (
    <div>
      <AboutHero />
      <MeetTheTeam />
      {/* TODO: Uncomment OurValues section after filling in section */}
      {/* <OurValues /> */}
      <CallToAction />
    </div>
  );
};

export default AboutPage;
