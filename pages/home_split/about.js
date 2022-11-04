import Image from "next/image";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import axios from "axios";
import { useEffect, useState } from "react";
import SkillSearch from "../../comps/utils/skillSearch.js";
import redundency from "/public/assets/json/skills-about.json";

function About({ searchBtn, setSea }) {
  // Nav menu state
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Get data once
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://anchooor.wtf/api/skills-abouts?populate=*"
        );
        // wait for 2 seconds and then set loading to false
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
        setSkills(res.data.data);
      } catch (error) {
        setSkills(redundency.data);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          {" "}
          <div
            className="container m-auto animate__fadeIn animate__animated"
            data-aos="fade-in"
            data-aos-delay="150"
          >
            <div className="about flex loading">
              {/* Class below splits the component into half */}
              <div className="left-side w-7/12 z-10">
                <div className="flex mb-5">
                  <div
                    className="number mr-5 title md text-accent placeholder"
                    data-aos="fade-down"
                  >
                    02.
                  </div>
                  <div
                    className="title md text-primary placeholder"
                    data-aos="fade-down"
                    data-aos-delay="150"
                  >
                    About Me
                  </div>

                  <div className="line"></div>
                </div>
                <p
                  className="mb-5 pr-10 py-9 relative placeholder"
                  data-aos="fade-down"
                  data-aos-delay="250"
                >
                  I am a web designer with 5 years of experience in building web
                  experiences.
                </p>
                <p
                  className="mb-5 pr-10 py-9 relative placeholder"
                  data-aos="fade-down"
                  data-aos-delay="350"
                >
                  My main focus is on designing the most stunning experiences
                  without sacrificing UI and UX to ensure the best possible
                  outcome. Sometimes it might be mind blowing visuals and
                  sometimes it may be a simple clean minimalistic UI to ensure
                  ease of use.
                </p>
                <p
                  className="mb-5 pr-10 py-9 relative placeholder"
                  data-aos="fade-down"
                  data-aos-delay="450"
                >
                  I fell in love with web development in 2017 and ever since I
                  was able to grow into a person who has no idea of what’s
                  possible only the idea of how long it would take. I always
                  aspire to grow with every website I build. Learn and improve
                  from my previous work be it my code, look of the website or
                  the performance of the website. What I lack in back-end I make
                  up in exceptional front-end.
                </p>{" "}
                <p
                  className="mb-5 pr-10 py-9 relative placeholder"
                  data-aos="fade-down"
                  data-aos-delay="450"
                >
                  I always had an insatiable love for pretty things and web
                  design is my way of expressing myself and my creativity. For
                  me websites I build are closer to art than to software.
                </p>{" "}
                <p
                  className="mb-5 pr-10 py-9 relative placeholder"
                  data-aos="fade-down"
                  data-aos-delay="450"
                >
                  Overall, I am an easy-going person and I find it easy to get
                  along with people. I aspire to work with people that do things
                  better than me.{" "}
                  <span>To steal their knowledge and help me grow</span>
                </p>
                <p
                  className="mb-5 pr-10 py-9 relative placeholder"
                  data-aos="fade-down"
                  data-aos-delay="450"
                >
                  I truly believe growing as a person is the most important
                  thing a human can do.
                </p>
                <div className="text-above"></div>
                <div className="tables">
                  <div className="title sm text-primary py-10">
                    <span className="text-accent placeholder block">
                      02(1).
                    </span>{" "}
                  </div>
                  <ul className="">
                    <li data-aos="fade-down" className="placeholder">
                      {" "}
                      <div className="icon-cont"> </div>
                      <span></span>
                    </li>
                    <li data-aos="fade-down" className="placeholder">
                      {" "}
                      <div className="icon-cont"> </div>
                      <span></span>
                    </li>
                    <li data-aos="fade-down" className="placeholder">
                      {" "}
                      <div className="icon-cont"> </div>
                      <span></span>
                    </li>
                  </ul>
                  <button
                    className="btn-view-more flex placeholder"
                    onClick={() => setSea()}
                  >
                    <div className="i-contr">
                      <i className="gg-search"></i>
                    </div>
                    <span>Looking for more</span>{" "}
                  </button>
                </div>
              </div>
              {/* Class below splits the component into half */}
              <div className="right-side w-5/12 relative pl-32">
                {" "}
                <div className="sq" data-aos="fade-left" data-aos-delay="350">
                  <Image
                    src={
                      "https://res.cloudinary.com/dmoxrn44i/image/upload/v1666801677/portfolio/sq_k9sews.svg"
                    }
                    layout="fill"
                    objectFit="cover"
                    alt="logo"
                    priority={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div
          className="container m-auto animate__fadeIn animate__animated"
          data-aos="fade-in"
          data-aos-delay="150"
        >
          <div className="about flex">
            {/* Class below splits the component into half */}
            <div className="left-side w-7/12 z-10">
              <div className="flex mb-5">
                <div
                  className="number mr-5 title md text-accent"
                  data-aos="fade-down"
                >
                  02.
                </div>
                <div
                  className="title md text-primary"
                  data-aos="fade-down"
                  data-aos-delay="150"
                >
                  Hey I’m Evalds aka Anchor
                </div>

                <div className="line"></div>
              </div>
              <p
                className="mb-5 pr-10 py-9 relative"
                data-aos="fade-down"
                data-aos-delay="350"
              >
                I am a web designer with 5 years of experience in building web
                experiences. <br />
                <br />
                My main focus is on designing the most stunning experiences
                without sacrificing UI and UX to ensure the best possible
                outcome. Sometimes it might be mind blowing visuals and
                sometimes it may be a simple clean minimalistic UI to ensure
                ease of use
              </p>
              <p
                className="mb-5 pr-10 py-9 relative"
                data-aos="fade-down"
                data-aos-delay="450"
              >
                I fell in love with web development in 2017 and ever since I was
                able to grow into a person who has no idea of what’s possible
                only the idea of how long it would take. I always aspire to grow
                with every website I build. Learn and improve from my previous
                work be it my code, look of the website or the performance of
                the website. What I lack in back-end I make up in exceptional
                front-end
              </p>{" "}
              <p
                className="mb-5 pr-10 py-9 relative"
                data-aos="fade-down"
                data-aos-delay="450"
              >
                I always had an insatiable love for pretty things and web design
                is my way of expressing myself and my creativity. For me
                websites I build are closer to art than to software
              </p>{" "}
              <p
                className="mb-5 pr-10 py-9 relative"
                data-aos="fade-down"
                data-aos-delay="450"
              >
                Overall, I am an easy-going person and I find it easy to get
                along with people. I aspire to work with people that do things
                better than me.{" "}
                <span>To steal their knowledge and help me grow</span>
              </p>
              <p
                className="mb-5 pr-10 py-9 relative"
                data-aos="fade-down"
                data-aos-delay="450"
              >
                I truly believe growing as a person is the most important thing
                a human can do
              </p>
              <div className="text-above"></div>
              <div className="tables">
                <div className="title sm text-primary py-10">
                  <span className="text-accent">02(1).</span> Skills at a glance
                </div>
                <ul className="">
                  {skills.map((skill, index) =>
                    skill.attributes.skill_list.map((skillz, index) => (
                      <li
                        key={index}
                        data-aos="fade-down"
                        data-aos-delay={index * 100}
                      >
                        {" "}
                        <div className="icon-cont">
                          {" "}
                          <i className="gg-arrow-long-right m-auto mr-2"></i>
                        </div>
                        <span>{skillz.tag}</span>
                      </li>
                    ))
                  )}
                </ul>
                <button className="btn-view-more flex" onClick={() => setSea()}>
                  <div className="i-contr">
                    <i className="gg-search"></i>
                  </div>
                  <span>Looking for more</span>{" "}
                </button>
              </div>
            </div>
            {/* Class below splits the component into half */}
            <ParallaxProvider>
              {" "}
              <div className="right-side w-5/12 relative pl-32">
                {" "}
                <Parallax speed={-30}>
                  <div className="sq" data-aos="fade-left" data-aos-delay="350">
                    <Image
                      src={
                        "https://res.cloudinary.com/dmoxrn44i/image/upload/v1666801677/portfolio/sq_k9sews.svg"
                      }
                      layout="fill"
                      objectFit="cover"
                      alt="logo"
                      priority={true}
                    />
                  </div>
                </Parallax>
                <Parallax speed={-30} translateY={[0, 40]}>
                  <div
                    className="pop-in-hover"
                    data-aos="fade-in"
                    data-aos-delay="1000"
                  >
                    <div className="anchor">
                      <Image
                        src={
                          "https://res.cloudinary.com/dmoxrn44i/image/upload/v1666801677/portfolio/street_ezp7cc.jpg"
                        }
                        layout="fill"
                        objectFit="cover"
                        alt="logo"
                      />
                    </div>

                    <span className="pop-in">
                      This is me drawn by a computer
                    </span>
                  </div>
                </Parallax>
              </div>
            </ParallaxProvider>
          </div>
        </div>
      )}
    </>
  );
}

export default About;
