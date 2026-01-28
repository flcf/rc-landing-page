import { Link } from 'react-router-dom';
import Logo from '../../../static/assets/imgs/Logo.png';

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between h-[4em] w-full px-[15vw] mx-auto overflow-hidden">
      <Link className="show last:font-montserrat last:font-medium" to="/">
        <img className="scale-110 max-w-[40vw]" src={Logo} alt="Logo" />
      </Link>
      <Link className="show" to="/about">
        About Us
      </Link>
    </nav>
  );
};

export default Navigation;
