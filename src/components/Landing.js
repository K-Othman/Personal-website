import karim from "./../assets/images/karim.webp";

function Landing() {
  return (
    <section className="wrapper flex flex-col lg:flex-row items-center justify-between my-10 md:my-20">
      <div className="md:w-[500px] flex flex-col gap-2 md:gap-4">
        <p className="text-4xl max-md:text-[20px]">Hello!</p>
        <p className="text-[22px] leading-[2.5rem] max-md:leading-[1.5rem] max-md:text-[15px]">
          I'm Karim, a software engineer based in{" "}
          <span className="text-[#4484B6] font-semibold"> Manchester, UK </span>
          who's experienced in taking fullstack applications from scractch to
          production
        </p>
      </div>
      <figure>
        <img
          src={karim}
          alt="My personal foto"
          className="w-4/5 md:w-[400px]"
        />
      </figure>
    </section>
  );
}

export default Landing;
