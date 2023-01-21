function Header() {
  return (
    <header className="bg-[#F1F5F9] shadow-md py-4">
      <div className="wrapper flex items-center justify-between">
        <h1 className="text-xl md:text-4xl">Karim Abdelghany</h1>
        <a
          className="border-2 border-black rounded-full text-lg p-2 transition-all hover:shadow-md"
          href="#contact-btn"
        >
          Contact
        </a>
      </div>
    </header>
  );
}

export default Header;
