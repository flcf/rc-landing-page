import { ReactComponent as RootsCollectiveLogo } from 'static/assets/imgs/rootsCollectiveLogo.svg';
import { ReactComponent as InstagramLogo } from 'static/assets/imgs/instagramLogo.svg';
import { ReactComponent as LinkedInLogo } from 'static/assets/imgs/linkedInLogo.svg';

const Footer: React.FC = () => {
  return (
    <section className="flex flex-wrap justify-between items-center h-[20em] bg-[#f8c8c8] px-[15vw] py-16">
      <div className="flex justify-center items-center gap-4 bg-transparent last:gap-8">
        <RootsCollectiveLogo />
        <p className="show">Roots Collective, 2024</p>
      </div>
      <div className="flex justify-center items-center gap-4 bg-transparent last:gap-8">
        <a
          className="show"
          href="https://www.instagram.com/rootscollectiveyvr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramLogo />
        </a>
        <a
          className="show"
          href="https://ca.linkedin.com/company/rootscollective"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInLogo />
        </a>
      </div>
    </section>
  );
};

export default Footer;
