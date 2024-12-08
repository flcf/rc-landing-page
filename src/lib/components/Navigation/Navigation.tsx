import Logo from '../../../static/assets/Logo.png'

const Navigation = () => {
  return (
    <nav className='flex items-center justify-between h-[4em] w-full px-[15vw] mx-auto overflow-hidden'>
      <a className="show last:font-montserrat last:font-medium" href="/">
        <img className='scale-110 max-w-[40vw]' src={Logo} alt="Logo" />
      </a>
      <a className="show" href="/about">
        About Us
      </a>
    </nav>
  );
};

export default Navigation;
