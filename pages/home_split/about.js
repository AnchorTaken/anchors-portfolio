import Image from "next/image";
import { useEffect, useState } from "react";

function About({ searchBtn, setSea }) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      {isLoading == "true" ? "Loading" : ""}{" "}
      <div
        className="container m-auto animate__fadeIn animate__animated"
        data-aos="fade-in"
        data-aos-delay="150"
      >
        <div className={isLoading ? "about flex loading" : "about flex"}>
          {/* Class below splits the component into half */}
          <div className="left-side w-7/12 z-10">
            <div className="flex mb-5">
              <div
                className={`number mr-5 title md text-accent ${
                  isLoading ? "placeholder" : ""
                }`}
                data-aos="fade-down"
              >
                02.
              </div>
              <div
                className={`title md text-primary ${
                  isLoading ? "placeholder" : ""
                }`}
                data-aos="fade-down"
                data-aos-delay="150"
              >
                Hey, I’m Evalds aka Anchor.
              </div>

              <div className="line"></div>
            </div>
            <p
              className={`mb-5  py-9 relative ${
                isLoading ? "placeholder" : ""
              }`}
              data-aos="fade-down"
              data-aos-delay="350"
            >
              I am a web designer with 5 years of experience and my focus is
              creating the most stunning experiences without sacrificing the UI
              and UX, ensuring the best outcome. Sometimes that might be a mind
              blowing visual and sometimes it may be a clean minimalistic UI
              which does not compromise between aesthetics and ease of use. Web
              development became my fascination in 2017. <br />
              <br /> Since then, I grew into a person who does not ask whether
              it is possible, only “how long will it take?”. My aspiration is
              growing personally with every website by learning and improving
              from my previous work, be it my code, the look of the site, or its
              performance.
            </p>
            <p
              className={`mb-5  py-9 relative ${
                isLoading ? "placeholder" : ""
              }`}
              data-aos="fade-down"
              data-aos-delay="450"
            >
              Where there is design, there is opportunity for beauty, and I
              strive to achieve it in every case. The sites can become
              immortalisations of owners and in that regard are closer to art
              than software.
            </p>{" "}
            <p
              className={`mb-5  py-9 relative ${
                isLoading ? "placeholder" : ""
              }`}
              data-aos="fade-down"
              data-aos-delay="550"
            >
              As a character, I am easy-going and find it simple to get along
              with people. This is a by-product of my drive for continuous
              learning and trying to work with people who can teach me as much
              as I can teach them
              <span> “Life is growth” – Phil Knight</span>
            </p>{" "}
            <div className="text-above"></div>
          </div>
          {/* Class below splits the component into half */}{" "}
          <div className="right-side w-5/12 relative pl-32">
            {" "}
            <div className="sq" data-aos="fade-left" data-aos-delay="350">
              <Image
                src={
                  "https://res.cloudinary.com/dmoxrn44i/image/upload/v1666801677/portfolio/sq_k9sews.svg"
                }
                layout="fill"
                objectFit="contain"
                alt="logo"
                priority={true}
              />
            </div>
            <div
              className="pop-in-hover"
              data-aos="fade-in"
              data-aos-delay="1000"
            >
              <div className="anchor">
                <Image
                  src={
                    "https://res.cloudinary.com/dmoxrn44i/image/upload/v1668440678/portfolio/street-main_cmyvaq.jpg"
                  }
                  layout="fill"
                  objectFit="cover"
                  alt="logo"
                />
              </div>

              <span className="pop-in">This is me drawn by a computer</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
