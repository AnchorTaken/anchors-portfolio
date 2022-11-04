import { useState, useEffect } from "react";
import Image from "next/image";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import axios from "axios";
import FetchData from "../../services/fetchData.js";
import redundency from "/public/assets/json/jobs.json";

function Jobs() {
  // States
  const [jobsActive, setJobsActive] = useState(0);
  const [jobs, setJobs] = useState([]);
  const [listlength, setListlength] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [textShown, setTextShown] = useState(999);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://anchooor.wtf/api/jobs?populate=*");

        setJobs(res.data.data);
        setListlength(res.data.meta.pagination.total);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      } catch (error) {
        setJobs(redundency.data);
        setListlength(redundency.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div
          className="rapper relative animate__fadeIn animate__animated loading"
          data-aos="fade-in"
        >
          <div className="img-holder temple">
            <div className="work">
              <Image
                src={
                  "https://res.cloudinary.com/dmoxrn44i/image/upload/v1666801678/portfolio/top_dydj0o.png"
                }
                layout="fill"
                objectFit="cover"
                alt="logo"
              />
            </div>
          </div>
          <div className="jooooimg relative">
            <div className="bg-bc">
              <div className="job_sec container m-auto">
                <div className="flex mb-16 center-this">
                  <div
                    className="number mr-5 title sm text-accent font-mc placeholder"
                    data-aos="fade-down"
                  >
                    03.
                  </div>
                  <h2
                    className="title sm font-mc text-secondary main-title placeholder"
                    data-aos="fade-down"
                    data-aos-delay="150"
                  >
                    Previous Employment
                  </h2>
                </div>

                <div className="flex gap-16 under-job">
                  <div className="ui_nav left-side">
                    <div className="mobile-menu-op">
                      <ul className="jobs-btns relative">
                        {/* Map buttons to tabs json */}

                        <li className={`active flex placeholder mb-5`}>
                          <button className={`active flex placeholder`}>
                            <div className="web-icon">
                              <i className="gg-chevron-right"></i>
                            </div>{" "}
                            <span>name</span>{" "}
                          </button>
                        </li>
                        <li className={`active flex placeholder mb-5`}>
                          <button className={`active flex placeholder`}>
                            <div className="web-icon">
                              <i className="gg-chevron-right"></i>
                            </div>{" "}
                            <span>name</span>{" "}
                          </button>
                        </li>
                        <li className={`active flex placeholder`}>
                          <button className={`active flex placeholder`}>
                            <div className="web-icon">
                              <i className="gg-chevron-right"></i>
                            </div>{" "}
                            <span>name</span>{" "}
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="main-box">
                    <div className="single flex relative active z-10">
                      <div className="right-side desc">
                        <div className="popout job_desc_h">
                          <div className="relative">
                            <div className="flex animate__fadeInUp animate__animated font-mc placeholder">
                              Personal Projects{" "}
                              <span className="text-accent">
                                <i className="ml-5">@</i> Me
                              </span>
                            </div>
                            <small>Projects</small>
                            {/* Nest array map desc array form attributes */}
                            <div className="animate__fadeInUp animate__animated mobile-margin">
                              <span className="prj--name placeholder">
                                Hashtag Generator for Instagram
                              </span>
                              <div className="flex someinner placeholder">
                                <p className="descr animate__fadeInUp animate__animated">
                                  {/* slice the responce if number of characters is greater than 250 from desc.desc */}
                                  <span className="animate__fadeInUp animate__animated ">
                                    Hashtag Generator was a platform I quickly
                                    crafted for myself for the sake of
                                    efficiency and that only. As I run an
                                    Instagram account where I post art. I needed
                                    a more efficient way to generate hashtags
                                    and sometimes generate titles for my posts.{" "}
                                  </span>
                                </p>
                              </div>{" "}
                            </div>
                            <div className="animate__fadeInUp animate__animated mobile-margin">
                              <span className="prj--name placeholder">
                                My portfolio
                              </span>
                              <div className="flex someinner placeholder">
                                <p className="descr animate__fadeInUp animate__animated">
                                  {/* slice the responce if number of characters is greater than 250 from desc.desc */}
                                  <span className="animate__fadeInUp animate__animated ">
                                    My porfolio was mainly made because I needed
                                    a place to save all my previous projects in
                                    a sensible way and to test everything I
                                    learned about React and see what I could
                                    come up with. It took many head aches and
                                    countless hours of bug fixing and learning
                                    but the result was a stunning website and a
                                    ton of useful knowladge I proceeded to use
                                    on my next website. <br />
                                    <br />
                                  </span>
                                </p>
                              </div>{" "}
                            </div>
                          </div>
                        </div>
                        <div className="skills">
                          {" "}
                          <span className="animate__fadeInUp animate__animated placeholder mb-5">
                            Skills gained at a glance
                          </span>
                          <div className="animate__fadeInUp animate__animated  placeholder">
                            <div className="tag animate__fadeInUp animate__animated">
                              React, Next.js, Tailwind, AOS,
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      ) : (
        <>
          {" "}
          <div
            className="rapper relative animate__fadeIn animate__animated"
            data-aos="fade-in"
          >
            <div className="img-holder temple">
              <div className="work">
                <Image
                  src={
                    "https://res.cloudinary.com/dmoxrn44i/image/upload/v1666801678/portfolio/top_dydj0o.png"
                  }
                  layout="fill"
                  objectFit="cover"
                  alt="logo"
                />
              </div>
            </div>
            <div className="jooooimg relative">
              <div className="bg-bc">
                <div className="job_sec container m-auto">
                  <div className="flex mb-16 center-this">
                    <h2
                      className="number mr-5 title sm text-accent font-mc"
                      data-aos="fade-down"
                    >
                      03.
                    </h2>
                    <h2
                      className="title sm font-mc text-secondary main-title"
                      data-aos="fade-down"
                      data-aos-delay="150"
                    >
                      Previous Employment
                    </h2>
                  </div>

                  <div className="flex gap-16 under-job">
                    <div className="ui_nav left-side">
                      <div className="mobile-menu-op">
                        <ul className="jobs-btns relative">
                          {/* Map buttons to tabs json */}

                          {jobs.map((job, index) => {
                            const pathed = job.attributes;
                            return (
                              <li
                                key={index}
                                // if tabactive is matches the id, add class active

                                className={`${
                                  jobsActive == pathed.num
                                    ? "active flex"
                                    : "flex"
                                }`}
                                data-aos-delay={index * 100}
                              >
                                <button
                                  className={`${
                                    jobsActive == pathed.num
                                      ? "active flex"
                                      : "flex"
                                  }`}
                                  onClick={() => {
                                    setJobsActive(pathed.num);
                                  }}
                                >
                                  <div className="web-icon">
                                    <i className="gg-chevron-right"></i>
                                  </div>{" "}
                                  <span>{pathed.comp_name}</span>{" "}
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                    <div className="main-box">
                      {jobs.map((job, index) => {
                        const currentActive = index;
                        return (
                          <div
                            key={index}
                            className={
                              jobsActive == job.attributes.num
                                ? "single flex relative active z-10"
                                : "single flex relative hidden"
                            }
                          >
                            {jobsActive === index ? (
                              <div className="right-side desc">
                                <div className="popout job_desc_h">
                                  <div className="relative">
                                    <h2
                                      className={
                                        jobsActive == job.attributes.num
                                          ? "flex animate__fadeInUp animate__animated font-mc"
                                          : "flex animate__fadeOut animate__animated font-mc"
                                      }
                                    >
                                      {job.attributes.name}{" "}
                                      <span className="text-accent">
                                        <i className="ml-5">@</i>{" "}
                                        {job.attributes.comp_name}
                                      </span>
                                    </h2>
                                    <small>Projects</small>
                                    {/* Nest array map desc array form attributes */}

                                    {job.attributes.desc
                                      .map((desc, index) => {
                                        return (
                                          <div
                                            key={index}
                                            className={
                                              jobsActive == job.attributes.num
                                                ? "animate__fadeInUp animate__animated mobile-margin"
                                                : "animate__fadeOutUp animate__animated mobile-margin"
                                            }
                                          >
                                            <span className="prj--name">
                                              {desc.prj_name}
                                            </span>
                                            <div
                                              className="flex someinner"
                                              data-animate-delay={index * 100}
                                            >
                                              <p
                                                className={
                                                  jobsActive == currentActive
                                                    ? "descr animate__fadeInUp animate__animated "
                                                    : "descr animate__fadeOut animate__animated"
                                                }
                                                data-animate-delay={index * 100}
                                              >
                                                {/* slice the responce if number of characters is greater than 250 from desc.desc */}
                                                <span
                                                  className={
                                                    textShown == index
                                                      ? "animate__fadeInUp animate__animated "
                                                      : " animate__fadeInDown animate__animated job_desc_el"
                                                  }
                                                  dangerouslySetInnerHTML={{
                                                    __html:
                                                      textShown === index
                                                        ? desc.desc
                                                        : desc.desc.slice(
                                                            0,
                                                            250
                                                          ) + "...",
                                                  }}
                                                />
                                              </p>
                                              <button
                                                className={
                                                  textShown == index
                                                    ? "animate__fadeOut animate__animated show-more"
                                                    : "animate__fadeIn animate__animated show-more"
                                                }
                                                onClick={() =>
                                                  setTextShown(index)
                                                }
                                              >
                                                {" "}
                                                Show More
                                              </button>
                                            </div>{" "}
                                          </div>
                                        );
                                      })
                                      .reverse()}
                                  </div>
                                </div>
                                <div className="skills">
                                  {" "}
                                  <span
                                    className={
                                      jobsActive == job.attributes.num
                                        ? "animate__fadeInUp animate__animated"
                                        : "animate__fadeOutUp animate__animated"
                                    }
                                  >
                                    Skills gained at a glance
                                  </span>
                                  <div className="flex relative skills-map">
                                    {job.attributes.skills_learned
                                      .map((skill, index) => {
                                        return (
                                          <div
                                            key={index}
                                            className={
                                              jobsActive == job.attributes.num
                                                ? "animate__fadeInUp animate__animated"
                                                : "animate__fadeOutUp animate__animated"
                                            }
                                            data-animate-delay={index * 200}
                                          >
                                            <div
                                              key={index}
                                              className={
                                                jobsActive == job.attributes.num
                                                  ? "tag animate__fadeInUp animate__animated"
                                                  : "tag animate__fadeOutRight animate__animated"
                                              }
                                              data-animate-delay={index * 100}
                                            >
                                              {skill.tag}
                                            </div>
                                          </div>
                                        );
                                      })
                                      .reverse()}
                                  </div>
                                </div>
                              </div>
                            ) : (
                              ""
                            )}{" "}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </>
      )}
    </>
  );
}

export default Jobs;
