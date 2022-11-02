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
                  className="mb-5 px-10 py-9 relative placeholder"
                  data-aos="fade-down"
                  data-aos-delay="250"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deleniti quo nesciunt a quisquam nobis nemo! Quidem iusto
                  officia ullam molestias!
                </p>
                <p
                  className="mb-5 px-10 py-9 relative placeholder"
                  data-aos="fade-down"
                  data-aos-delay="350"
                >
                  Lorem ipsum dolor <span>sit</span> amet consectetur
                  adipisicing elit. Provident facere eveniet{" "}
                  <span>suscipit fugit</span> , soluta magni assumenda
                  distinctio illum deleniti similique in eos, cupiditate dolore{" "}
                  <span>perspiciati quibusdams</span> blanditiis quaerat atque
                  numquam.
                </p>
                <p
                  className="mb-5 px-10 py-9 relative placeholder"
                  data-aos="fade-down"
                  data-aos-delay="450"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Corporis, quia!
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
                  About Me
                </div>

                <div className="line"></div>
              </div>
              <p
                className="mb-5 px-10 py-9 relative"
                data-aos="fade-down"
                data-aos-delay="250"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti quo nesciunt a quisquam nobis nemo! Quidem iusto
                officia ullam molestias!
              </p>
              <p
                className="mb-5 px-10 py-9 relative"
                data-aos="fade-down"
                data-aos-delay="350"
              >
                Lorem ipsum dolor <span>sit</span> amet consectetur adipisicing
                elit. Provident facere eveniet <span>suscipit fugit</span> ,
                soluta magni assumenda distinctio illum deleniti similique in
                eos, cupiditate dolore <span>perspiciati quibusdams</span>{" "}
                blanditiis quaerat atque numquam.
              </p>
              <p
                className="mb-5 px-10 py-9 relative"
                data-aos="fade-down"
                data-aos-delay="450"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corporis, quia!
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
                <Parallax speed={-20}>
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
                <Parallax speed={20} translateX={"200px, 200px"}>
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
