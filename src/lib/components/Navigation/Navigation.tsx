const Navigation: React.FC = () => {
  return (
    <nav className="flex items-center justify-between h-16 w-full px-[15vw] mx-auto overflow-hidden">
      <a href="/">
        <img
          src="/assets/Logo.png"
          alt="Logo"
          className="scale-[1.2] max-w-[40vw]"
        />
      </a>
      <a href="/about" className="font-montserrat font-medium">
        About Us
      </a>
    </nav>
  );
};

export default Navigation;
