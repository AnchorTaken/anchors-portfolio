import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import FetchData from "../../services/fetchData.js";
import redundency from "/public/assets/json/jobs.json";
import { fetchAPI } from "../../comps/hooks/api";
import { useQuery } from "@tanstack/react-query";

function Jobs() {
  // States
  const [jobsActive, setJobsActive] = useState(0);
  const [jobs, setJobs] = useState([]);
  const [listlength, setListlength] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [textShown, setTextShown] = useState(999);
  const { data, status } = useQuery({
    queryKey: ["data"],
    queryFn: () => fetchAPI("https://anchooor.wtf/api/jobs?populate=*"),
  });

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
      {" "}
      <div
        className={`rapper relative animate__fadeIn animate__animated ${
          isLoading ? "loading" : ""
        }`}
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
                  className={`number mr-5 title sm text-accent font-mc ${
                    isLoading ? "placeholder" : ""
                  }`}
                  data-aos="fade-down"
                >
                  03.
                </h2>
                <h2
                  className={`title sm font-mc text-secondary main-title ${
                    isLoading ? "placeholder" : ""
                  }`}
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
                      {isLoading ? (
                        <li className={`active flex placeholder mb-5`}>
                          <button className={`active flex placeholder`}>
                            <div className="web-icon">
                              <i className="gg-chevron-right"></i>
                            </div>{" "}
                            <span>Loading</span>{" "}
                          </button>
                        </li>
                      ) : (
                        jobs.map((job, index) => {
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
                        })
                      )}
                    </ul>
                  </div>
                </div>
                <div className="main-box">
                  {/* Lo */}
                  {isLoading ? (
                    <div className="single flex relative active z-10 placeholder">
                      <div className="right-side desc">
                        <div className="popout job_desc_h">
                          <div className="relative">
                            <h2 className="flex animate__fadeInUp animate__animated font-mc placeholder">
                              Front End Web Dev
                              <span className="text-accent">@ Worldview</span>
                            </h2>
                            <small className="placeholder">Projects</small>
                            {/* Nest array map desc array form attributes */}

                            <div className="animate__fadeInUp animate__animated mobile-margin">
                              <span className="prj--name placeholder">
                                General
                              </span>
                              <div
                                className="flex someinner placeholder"
                                data-animate-delay={100}
                              >
                                <p
                                  className="descr animate__fadeInUp animate__animated"
                                  data-animate-delay={100}
                                >
                                  {/* slice the responce if number of characters is greater than 250 from desc.desc */}
                                  <span className="animate__fadeInUp animate__animated">
                                    I built and maintained very many projects at
                                    Worldview and was involved to some capacity
                                    in basically everything in the company. As
                                    this was my first job in web development and
                                    my introduction programming, most of my work
                                    by today`&apos;`s standard was sub-par
                                    however my employer loved every single bit
                                    of it. Sadly, most of it is lost to time.
                                    However, I`&apos;`ll do my best to describe
                                    my most involved projects and where I can
                                    provide the links to the websites.
                                  </span>
                                </p>
                              </div>{" "}
                            </div>
                          </div>
                        </div>
                        <div className="skills">
                          {" "}
                          <span className="animate__fadeInUp animate__animated placeholder">
                            Skills gained at a glance
                          </span>
                          <div className="flex relative skills-map placeholder mt-2">
                            <div
                              className="animate__fadeInUp animate__animated"
                              data-animate-delay={200}
                            >
                              <div
                                className="tag animate__fadeInUp animate__animated"
                                data-animate-delay={100}
                              >
                                React
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    jobs.map((job, index) => {
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
                    })
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
}

export default Jobs;
