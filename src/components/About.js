import { useEffect, useRef } from "react";
// import image4 from "./../assets/images/image4.webp";
import Lottie from "lottie-web";

function About() {
  const ref = useRef(null);
  useEffect(() => {
    const animation = Lottie.loadAnimation({
      container: ref.current, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "https://assets3.lottiefiles.com/packages/lf20_jtbfg2nb.json", // the path to the animation json
    });
    return () => animation.destroy();
  }, [ref]);

  return (
    <section className="bg-[#3b749f] text-white py-12">
      <div className="wrapper flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-[500px] leading-[2.5rem] max-md:leading-[1.5rem] flex flex-col gap-6">
          <p>
            I specialise in creating engagging digital experiences with a
            current focus on building accessible and inclusive web products.
          </p>
          <p>
            A few technologies I have been working with include: JavaScript,
            Node.js, Express.js, SQL, MongoDB, HTML5, CSS3, Tailwind, REACT
          </p>
        </div>
        <div className="mt-8 md:mt-0 w-4/5 md:w-[400px]">
          <div ref={ref} alt="developer" />
          {/* <img src={image4} alt="about" className="rounded-md" /> */}
        </div>
      </div>
    </section>
  );
}
export default About;
