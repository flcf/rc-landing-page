import AboutHero from "../AboutHero/AboutHero";
import CTA from "../CTA/CTA";
import MTT from "../MTT/MTT";
import OurValues from "../OurValues/OurValues";
import WWD from "../WWD/WWD";


const AboutPage: React.FC = ()=> {

    return(
        <div>
            <AboutHero/>
            <MTT/>
            <OurValues/>
            <CTA/>
        </div>
        
    )

};

export default AboutPage;