import blankDP from '../imgs/memberImgs/blank-dp-1280.png';
import LucyLeiImg from '../imgs/memberImgs/lucy_lei.jpg';
import TonyTranImg from '../imgs/memberImgs/tony_tran.jpg';
import StoneHeImg from '../imgs/memberImgs/stone_he.jpg';
import VictoriaLeeImg from '../imgs/memberImgs/victoria_lee.jpg';
import GinaHsuImg from '../imgs/memberImgs/gina_hsu.jpg';
import CJGarciaImg from '../imgs/memberImgs/cj_garcia.jpg';
import XtineRynaVillanuevaImg from '../imgs/memberImgs/xtine_ryna_villanueva.jpg';
import ZajiraDujaliImg from '../imgs/memberImgs/zajira_dujali.jpg';
import RichardLeeImg from '../imgs/memberImgs/richard_lee.jpg';
import { RoleGroup, MemberCardProps } from 'lib/components/MeetTheTeam/types';

const members: MemberCardProps[] = [
  {
    id: 1,
    firstName: 'Lucy',
    lastName: 'Lei',
    role: 'Director of Programming',
    roleGroup: RoleGroup.DIRECTOR,
    image: LucyLeiImg,
    bio: 'A results-driven leader passionate about driving positive change through strategic problem-solving. With a background in project management, stakeholder engagement, and a commitment to fostering inclusivity, I thrive on transforming vision into reality and building stronger communities.',
  },
  {
    id: 2,
    firstName: 'Tony',
    lastName: 'Tran',
    role: 'Director of Partnerships and Sponsorships',
    roleGroup: RoleGroup.DIRECTOR,
    image: TonyTranImg,
    bio: 'Policy, projects and papers, I am an extraordinaire in government affairs, stakeholder relations, and project management. I enjoy bringing awareness to the unique, yet non-unique, perspective of the Asian Canadian diaspora.',
  },
  {
    id: 3,
    firstName: 'Stone',
    lastName: 'He',
    role: 'Social Media Coordinator',
    roleGroup: RoleGroup.COORDINATOR,
    image: StoneHeImg,
    bio: 'My approach centers on achieving success through a blend of unwavering commitment and the infusion of joy into all our endeavors. Join me on this journey as we work together to build a thriving, vibrant, and harmonious Asian community.',
  },
  {
    id: 4,
    firstName: 'Victoria',
    lastName: 'Lee',
    role: 'Finance Coordinator',
    roleGroup: RoleGroup.COORDINATOR,
    image: VictoriaLeeImg,
    bio: 'I look to drive creativity and purpose through providing the safety of financial health. With a background specialized in NPO and Private Enterprise accounting I focus on ensuring the steady foundation that Roots will flourish upon.',
  },
  {
    id: 5,
    firstName: 'Gina',
    lastName: 'Hsu',
    role: 'Digital Design and Website Coordinator',
    roleGroup: RoleGroup.COORDINATOR,
    image: GinaHsuImg,
    bio: 'Strategic designer with expertise in crafting digital experiences that solve problems and drive impactful change. With over half a decade of experience, I’m eager to strengthen our online presence to share our passion for uplifting Asian communities.',
  },
  {
    id: 6,
    firstName: 'CJ',
    lastName: 'Garcia',
    role: 'Assets Generation Coordinator',
    roleGroup: RoleGroup.COORDINATOR,
    image: CJGarciaImg,
    bio: '“With great power comes great responsibility.” These words have resonated with me, shaping my journey every step of the way. From journalist to part-time software developer, I now specialize in marketing, content strategy, and event direction—combining creativity with strategy to bring ideas to life. Driven by passion, I strive to inspire and make a lasting impact.',
  },
  {
    id: 7,
    firstName: 'Xtine "Ryna X"',
    lastName: 'Villanueva',
    role: 'People and Community Coordinator',
    roleGroup: RoleGroup.COORDINATOR,
    image: XtineRynaVillanuevaImg,
    bio: 'A Filipino-Canadian with a professional background in human resources and event planning, eager to apply my specialized skills to elevate the exposure of Asian culture, communities, and businesses. A veteran cosplayer since 2007, passionate about engaging and showcasing the cosplay community where possible.',
  },
  {
    id: 8,
    firstName: 'Zajira',
    lastName: 'Dujali',
    role: 'Social Media and Events Coordinator',
    roleGroup: RoleGroup.COORDINATOR,
    image: ZajiraDujaliImg,
    bio: 'An RC associate fixated in Social Media and Event Planning. Highly passionate in promoting Asian culture and providing devotion and support in Canadian-Asian communities throughout the city. Striving to expand my skills and utilize my time to provide assistance.',
  },
  {
    id: 9,
    firstName: 'Richard',
    lastName: 'Lee',
    role: 'Website Coordinator',
    roleGroup: RoleGroup.COORDINATOR,
    image: RichardLeeImg,
    bio: 'I’m a self-professed nerd with a background in software engineering and business. I’m passionate about being creative and making things, including arts and crafts. I strive to solve hard problems and make experiences that people enjoy.',
  },
];

export default members;
