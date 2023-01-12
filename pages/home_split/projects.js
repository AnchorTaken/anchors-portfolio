// Imports
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import useMountTransition from "../../comps/utils/transition.js";
import redundency from "/public/assets/json/projects.json";

function Projects() {
  // States
  const [isLoading, setIsLoading] = useState(true);
  const [tabsActive, setTabsActive] = useState(0);
  const [interested, setInterested] = useState(false);
  const [tabs, setTabs] = useState([]);
  const [code, setCode] = useState(false);

  // pass interested into hasTransitionedIn

  const hasTransitioned = useMountTransition({
    active: interested,
    unmountDelay: 1000,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://anchooor.wtf/api/project-showcases?populate=*"
        );

        setTabs(res.data.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      } catch (error) {
        setTabs(redundency.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div
        className={`my-projects-at-glance mt-32 z-30 relative animate__fadeIn animate__animated  ${
          isLoading ? "loading" : ""
        }`}
        data-aos="fade-in"
        data-aos-delay="250"
      >
        <div className="container m-auto">
          <div className="w-full">
            <div className="flex mb-5">
              <div
                className={`number mr-5 title md text-accent animate__fadeIn animate__animated ${
                  isLoading ? "loading" : ""
                }`}
              >
                02.
              </div>
              <div
                className={`title md text-primary animate__fadeIn animate__animated ${
                  isLoading ? "loading" : ""
                }`}
              >
                Some Things I{"’"}ve Built
              </div>
            </div>

            {/* Togglable tabs element */}
            <div className="tabs" data-aos="fade-in" data-aos-delay="950">
              <ul className="flex relative">
                {/* Map buttons to tabs json   */}
                {isLoading ? (
                  <li
                    // if tabactive is matches the id, add class active
                    className="active"
                  >
                    <button className="flex">
                      <div className="web-icon">
                        <i className="gg-shape-hexagon"></i>
                      </div>{" "}
                      <span>Vizintin Yachts</span>{" "}
                      {/* <div className="close-icon">
                        <i className="gg-close"></i>
                      </div> */}
                    </button>
                  </li>
                ) : (
                  tabs.map((tab, index) => {
                    return (
                      <li
                        key={index}
                        // if tabactive is matches the id, add class active

                        className={`${tabsActive == index ? "active" : ""}`}
                        data-aos-delay={index * 100}
                      >
                        <button
                          className="flex"
                          onClick={() => {
                            setTabsActive(index);
                          }}
                        >
                          <div className="web-icon">
                            <Image
                              src={
                                tab.attributes.favico == null
                                  ? "/favicon.ico"
                                  : tab.attributes.favico
                              }
                              width={25}
                              height={25}
                              alt="ITRSQ"
                            />
                          </div>{" "}
                          <span>{tab.attributes.name}</span>{" "}
                          {/* <div className="close-icon">
                            <i className="gg-close"></i>
                          </div> */}
                        </button>
                      </li>
                    );
                  })
                )}
                <div className="dots">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              </ul>
              {/* Cosmetic URL bar for the tabs */}
              <div className="url-bar flex">
                <div className="buttons flex my-auto ml-5">
                  {/* Button to go back to the previous state */}

                  <div className="back mr-3">
                    <i className="gg-chevron-double-left-o"></i>
                  </div>
                  <div className="forward">
                    <i className="gg-chevron-double-right-o"></i>
                  </div>
                </div>
                {/* Seperate a singular tab based on tabsActive. WELL DONE COPILOT <3 You tried your best*/}
                <div className="url-absolute">
                  <span className="url-address flex">
                    {tabs.map((tab, index) => {
                      return (
                        <span
                          key={index}
                          className={
                            tabsActive == index
                              ? "url-link animate__backInUp animate__animated absolute flex"
                              : "url-link animate__backOutUp animate__animated absolute flex"
                          }
                        >
                          {" "}
                          anchor://{" "}
                          <span>
                            {isLoading ? "loading" : tab.attributes.name}
                          </span>
                          .js
                        </span>
                      );
                    })}
                  </span>
                </div>
              </div>
              <div className="tab">
                {/* Main body of the tabs*/}
                {isLoading
                  ? ""
                  : tabs.map((tab, index) => {
                      const currentTab = index;
                      const tabber = tab.attributes;
                      return (
                        <div key={index}>
                          {tabsActive == index ? (
                            <div className="single flex w-full">
                              <div
                                className={
                                  tabsActive === index
                                    ? "left-side image relative w-6/12 animate__fadeInLeft animate__animated z-10 animate__delay-1s"
                                    : "left-side image relative w-6/12 animate__fadeOutLeft animate__animated"
                                }
                              >
                                {/* check if tabsActive is the same as currentTab and interested is true */}
                                <div
                                  className={`front ${
                                    hasTransitioned === true && "active"
                                  }`}
                                >
                                  <div
                                    className={
                                      hasTransitioned === true
                                        ? "prj-bg animate__animated animate__fadeOut"
                                        : "prj-bg active animate__animated animate__fadeIn"
                                    }
                                  >
                                    <div>
                                      <div className="work">
                                        <Image
                                          src={
                                            "https://res.cloudinary.com/dmoxrn44i/image/upload/v1666801676/portfolio/prj-bg_wrxyao.jpg"
                                          }
                                          layout="fill"
                                          objectFit="cover"
                                          alt="logo"
                                          priority={true}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className={`absolute flex z-20 h-full w-full ${
                                      hasTransitioned && "hidden"
                                    } ${
                                      interested &&
                                      "animate__animated animate__fadeOutLeft"
                                    }`}
                                  >
                                    <button
                                      className={"btn-show-me"}
                                      onClick={() => {
                                        setInterested(!interested);
                                      }}
                                    >
                                      Have a peek?
                                    </button>
                                  </div>
                                </div>
                                {(hasTransitioned || interested) === true && (
                                  <>
                                    {" "}
                                    <div className="iframe-wrapper">
                                      <iframe src={tabber.iframe_url}></iframe>
                                    </div>
                                  </>
                                )}
                              </div>

                              <div
                                className={
                                  code === true
                                    ? "right-side desc w-6/12 flex bg-white"
                                    : "right-side desc w-6/12 flex"
                                }
                              >
                                <div className="dashdash">{"// Anchor "}</div>{" "}
                                <button
                                  className={
                                    code === true
                                      ? "switch-code animate__flipInX animate__animated"
                                      : "switch-code animate__flipInY animate__animated white"
                                  }
                                  onClick={() => setCode(!code)}
                                >
                                  {" "}
                                  {code === true ? (
                                    <div className="inner">
                                      <i className="gg-code-slash"></i>Switch to
                                      code
                                    </div>
                                  ) : (
                                    <div className="inner">
                                      <i className="gg-browse"></i>Swtich to
                                      text
                                    </div>
                                  )}{" "}
                                </button>
                                <div
                                  className={
                                    code === true
                                      ? "m-auto w-10/12 coded animate__fadeInLeft animate__animated"
                                      : "m-auto w-10/12 animate__fadeInRight animate__animated"
                                  }
                                >
                                  {/* imports */}
                                  <div
                                    className={
                                      tabsActive == currentTab
                                        ? "imports animate__fadeInRight animate__animated"
                                        : ""
                                    }
                                  >
                                    <span className="pink code">import</span>{" "}
                                    <span className="cyan titlez">
                                      {" "}
                                      Information
                                    </span>{" "}
                                    <span className="pink code"> from</span>
                                    <span className="brown code">
                                      {" "}
                                      {`"database"`}
                                    </span>
                                    <span className="code">;</span>
                                  </div>
                                  {/* function */}
                                  <div
                                    className={
                                      tabsActive == currentTab
                                        ? "function pt-2 animate__fadeInRight animate__animated"
                                        : ""
                                    }
                                    data-animate-delay="100"
                                  >
                                    <span className="pink code">
                                      export default
                                    </span>{" "}
                                    <span className="blue code">function </span>{" "}
                                    <span className="yello code">
                                      ProvideInformation
                                    </span>{" "}
                                    <span className="yellow code">()</span>
                                    <span className="yellow code">{" {"}</span>
                                  </div>
                                  {/* text */}
                                  <div className="bdy">
                                    <div
                                      className={
                                        tabsActive == currentTab
                                          ? "animate__fadeInRight const animate__animated"
                                          : ""
                                      }
                                      data-animate-delay="200"
                                    >
                                      <span className="blue code">const</span>{" "}
                                      <span className="softblue code">
                                        info
                                      </span>{" "}
                                      <span className="code">=</span>
                                      <span className=" softestblue">
                                        {" "}
                                        Information about the project
                                      </span>{" "}
                                      <span className="code">;</span>
                                    </div>
                                    <div className="func py-4">
                                      <div className="inner pt-2 block">
                                        <div
                                          className={
                                            tabsActive == currentTab
                                              ? "function pt-2 animate__fadeInRight animate__animated"
                                              : ""
                                          }
                                          data-animate-delay="300"
                                        >
                                          <span className="blue code">
                                            function{" "}
                                          </span>{" "}
                                          <span className="yello code">
                                            projectInformation{" "}
                                          </span>
                                          <span className="yellow code">
                                            ()
                                          </span>
                                          <span
                                            className={
                                              tabsActive == currentTab
                                                ? "code yellow block animate__fadeInRight animate__animated"
                                                : ""
                                            }
                                            data-animate-delay="400"
                                          >
                                            {"{"}
                                          </span>
                                        </div>
                                        <div className="pl-8 and-b">
                                          <div
                                            className={
                                              tabsActive == currentTab
                                                ? "function pt-2 animate__fadeInRight animate__animated"
                                                : ""
                                            }
                                            data-animate-delay="600"
                                          >
                                            <div
                                              className={
                                                tabsActive == currentTab
                                                  ? "function pt-2 animate__fadeInRight animate__animated"
                                                  : ""
                                              }
                                              data-animate-delay="800"
                                            >
                                              <span className="green block pb-2 titlez">
                                                {" //   Project Name "}
                                              </span>
                                              <span className=" block pb-2">
                                                <span className="blue code">
                                                  const
                                                </span>{" "}
                                                <span className="softblue code">
                                                  Project Name
                                                </span>{" "}
                                                <span className="code">=</span>{" "}
                                                <span className="softestblue">
                                                  {tabber.name}
                                                </span>{" "}
                                                <span className="code">;</span>
                                              </span>
                                            </div>
                                            <div
                                              className={
                                                tabsActive == currentTab
                                                  ? "function pt-2 animate__fadeInRight animate__animated"
                                                  : ""
                                              }
                                              data-animate-delay="900"
                                            >
                                              <span className="green titlez">
                                                {" "}
                                                {" // "} Descripton{" "}
                                              </span>{" "}
                                              <span className=" block pb-2">
                                                <span className="blue code">
                                                  const
                                                </span>{" "}
                                                <span className="softblue code">
                                                  Project Description
                                                </span>{" "}
                                                <span className="code">=</span>{" "}
                                                <span className="softestblue">
                                                  {tabber.desc}
                                                </span>{" "}
                                                <span className="code">;</span>
                                              </span>
                                            </div>
                                            <div
                                              className={
                                                tabsActive == currentTab
                                                  ? "function pt-2 animate__fadeInRight animate__animated"
                                                  : ""
                                              }
                                              data-animate-delay="1000"
                                            >
                                              <span className="green titlez">
                                                {" "}
                                                {" // "} Project was built with{" "}
                                              </span>{" "}
                                              <span className=" block pb-2">
                                                <span className="blue code">
                                                  const
                                                </span>{" "}
                                                <span className="softblue code">
                                                  Software
                                                </span>{" "}
                                                <span className="code">=</span>{" "}
                                                <span className="softestblue">
                                                  <span className="code">
                                                    [
                                                  </span>{" "}
                                                  {tab.attributes.soft.map(
                                                    (tag, index) => {
                                                      return (
                                                        <div
                                                          key={index}
                                                          className="inline mr-2 "
                                                        >
                                                          <span className="tags">
                                                            {tag.tag}
                                                          </span>{" "}
                                                          <span className="code">
                                                            ,
                                                          </span>
                                                        </div>
                                                      );
                                                    }
                                                  )}
                                                  <span className="code">
                                                    ]
                                                  </span>
                                                </span>{" "}
                                                <span className="code">;</span>
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                        <span
                                          className={
                                            tabsActive == currentTab
                                              ? "yellow code block animate__fadeInRight animate__animated"
                                              : ""
                                          }
                                          data-animate-delay="500"
                                        >
                                          {"}"}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="func">
                                      <div
                                        className={
                                          tabsActive == currentTab
                                            ? "function pt-2 animate__fadeInRight animate__animated"
                                            : ""
                                        }
                                        data-animate-delay="1100"
                                      >
                                        <span
                                          className={
                                            tabsActive == currentTab
                                              ? "pink code animate__fadeInRight animate__animated"
                                              : ""
                                          }
                                        >
                                          return
                                        </span>{" "}
                                        <span
                                          className={
                                            tabsActive == currentTab
                                              ? "yellow code animate__fadeInRight animate__animated"
                                              : ""
                                          }
                                          data-animate-delay="1400"
                                        >
                                          (
                                        </span>
                                        <div className="inner pl-5 pt-2 block"></div>
                                        <div
                                          className={
                                            tabsActive == currentTab
                                              ? "function pt-2 animate__fadeInRight animate__animated"
                                              : ""
                                          }
                                        >
                                          <span className="gray code">
                                            {" <"}
                                          </span>
                                          <span className="blue code">div</span>{" "}
                                          <span className="softblue code">
                                            className
                                          </span>
                                          <span className="code">{"="}</span>
                                          <span className="brown code">
                                            {'"links"'}
                                          </span>
                                          <span className="gray code">
                                            {">"}
                                          </span>
                                          <div className="flex my-2 right-icons">
                                            {tab.attributes.icons.map(
                                              (tag, index) => {
                                                return (
                                                  <a
                                                    href={tag.url}
                                                    key={index}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                  >
                                                    <div className="sr-only">
                                                      <i
                                                        className={tag.name}
                                                      ></i>
                                                    </div>
                                                  </a>
                                                );
                                              }
                                            )}
                                            <a
                                              href={tab.attributes.url}
                                              target="_blank"
                                              rel="noreferrer"
                                            >
                                              <span className="sr-only">
                                                {tabber.name}
                                              </span>
                                              <div className="icons right">
                                                {" "}
                                                <i className="gg-browser text-white"></i>
                                              </div>
                                            </a>
                                          </div>{" "}
                                          <span className="gray code">
                                            {" <"}
                                          </span>
                                          <span className="blue code">div</span>{" "}
                                          <span className="gray code">
                                            {"/>"}
                                          </span>
                                        </div>
                                      </div>
                                      <div
                                        className={
                                          tabsActive == currentTab
                                            ? "function pt-2 animate__fadeInRight animate__animated"
                                            : ""
                                        }
                                      >
                                        <span
                                          className={
                                            tabsActive == currentTab
                                              ? "yellow  code block pt-2 animate__fadeInRight animate__animated"
                                              : ""
                                          }
                                          data-animate-delay="1400"
                                        >
                                          )
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      );
                    })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
