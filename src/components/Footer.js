import github from "./../assets/images/github.png";
import linkedin from "./../assets/images/linkedin.png";

function Footer() {
  return (
    <footer
      className="wrapper py-10 flex flex-col md:flex-row justify-between mb-5 md:mb-8 gap-6 md:gap-0"
      id="contact-btn"
    >
      <div className="flex flex-col gap-6 md:w-1/2">
        <h3 className="text-4xl">Get In Touch</h3>
        <p>
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>

        <a
          href="mailto:karim_othman88@hotmail.com"
          target="_blank"
          rel="noreferrer"
          className="bg-[#4b91c6] text-white border py-4 rounded-md w-[160px] text-center"
        >
          Say Hello
        </a>
      </div>
      <div className="flex gap-4 md:mx-0 ">
        <a href="https://github.com/K-Othman" target="_blank" rel="noreferrer">
          <img src={github} alt="github" className="w-[30px] h-[30px]" />
        </a>
        <a
          href="https://www.linkedin.com/in/karim-othman-7608b8ba/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="github" className="w-[30px] h-[30px]" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
