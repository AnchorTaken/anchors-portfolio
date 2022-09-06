import { useState, useEffect } from "react";
import Image from "next/image";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import axios from "axios";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";

function Jobs() {
  // States
  const [jobsActive, setJobsActive] = useState(0);
  const [jobs, setJobs] = useState([]);
  const [listlength, setListlength] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:1337/api/jobs?populate=*"
        );

        setJobs(res.data.data);
        setListlength(res.data.meta.pagination.total);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loader m-auto container">
          <div className="loading-bar">Loading</div>
        </div>
      ) : (
        <>
          {" "}
          <div
            className="previous-employment mt-20 pt-32 relative"
            data-aos="fade-in"
            data-aos-delay="150"
          >
            <div className="img-holder">
              <div className="work">
                <Image
                  src={"/assets/img/top.png"}
                  layout="fill"
                  objectFit="cover"
                  alt="logo"
                />
              </div>
            </div>

            <div className="cont-background py-40">
              <div className="container m-auto z-10 relative">
                <div className="w-full">
                  <ParallaxProvider>
                    {" "}
                    <Parallax speed={11}>
                      <div className="img-holder right-image z-10">
                        <div className="work">
                          <Image
                            src={"/assets/img/dude-bg.png"}
                            layout="fill"
                            objectFit="cover"
                            alt="logo"
                          />
                        </div>
                      </div>
                    </Parallax>
                    <Parallax speed={12}>
                      <div className="img-holder right-image">
                        <div className="work">
                          <Image
                            src={"/assets/img/dude.png"}
                            layout="fill"
                            objectFit="cover"
                            alt="logo"
                          />
                        </div>
                      </div>
                    </Parallax>
                  </ParallaxProvider>
                  <div className="flex mb-5 w-fit m-auto mb-32">
                    <div
                      className="number mr-5 title sm text-accent font-mc"
                      data-aos="fade-down"
                    >
                      03.
                    </div>
                    <div
                      className="title sm font-mc text-secondary"
                      data-aos="fade-down"
                      data-aos-delay="150"
                    >
                      Previous Employment
                    </div>
                  </div>

                  {/* Togglable jobs element */}
                  <div className="jobs flex relative pt-10">
                    {/* Make this button go forward */}
                    <div className="left-side">
                      <div className="mobile-menu-op">
                        <button
                          className="nav-bt left mobile"
                          onClick={() => {
                            if (jobsActive > 0) {
                              setJobsActive(jobsActive - 1);
                            }
                          }}
                        >
                          <i className="gg-chevron-double-left"></i>
                        </button>
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
                                  <span>{pathed.name}</span>{" "}
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                        <button
                          className="nav-bt right mobile"
                          onClick={() => {
                            if (jobsActive < listlength - 1) {
                              setJobsActive(jobsActive + 1);
                            }
                          }}
                        >
                          <i className="gg-chevron-double-right"></i>
                        </button>
                      </div>
                    </div>
                    <div className="right-side">
                      <div className="job">
                        {/* Main body of the tabs*/}
                        {jobs.map((job, index) => {
                          const currentActive = index;
                          return (
                            <div
                              key={index}
                              className={
                                jobsActive == job.attributes.num
                                  ? "single absolute flex active z-10"
                                  : "single absolute flex "
                              }
                            >
                              {" "}
                              <div className="right-side desc">
                                <div className="popout">
                                  <div className="relative">
                                    <h2
                                      className={
                                        jobsActive == job.attributes.num
                                          ? "flex font-bold animate__fadeInUp animate__animated font-mc"
                                          : "flex font-bold animate__fadeOutUp animate__animated font-mc"
                                      }
                                    >
                                      {job.attributes.name}{" "}
                                      <span className="text-accent">
                                        <i className="ml-5">@</i>{" "}
                                        {job.attributes.comp_name}
                                      </span>
                                    </h2>
                                    <small>Featured Project</small>
                                    {/* Nest array map desc array form attributes */}

                                    {job.attributes.desc
                                      .map((desc, index) => {
                                        return (
                                          <div
                                            key={index}
                                            className={
                                              jobsActive == job.attributes.num
                                                ? "animate__fadeInUp animate__animated"
                                                : "animate__fadeOutUp animate__animated"
                                            }
                                          >
                                            <div
                                              className="flex"
                                              data-animate-delay={index * 100}
                                            >
                                              <div className="i-holder my-auto">
                                                {" "}
                                                <i className="gg-shape-rhombus mr-5"></i>
                                              </div>
                                              <p
                                                className={
                                                  jobsActive == currentActive
                                                    ? "descr animate__fadeInUp animate__animated"
                                                    : "descr animate__fadeOut animate__animated"
                                                }
                                                data-animate-delay={index * 100}
                                              >
                                                {desc.desc}
                                              </p>
                                            </div>{" "}
                                          </div>
                                        );
                                      })
                                      .reverse()}
                                  </div>
                                </div>
                                <div className="skills">
                                  {" "}
                                  <span className="sk font-title font-mc">
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
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </>
      )}
    </>
  );
}

export default Jobs;
