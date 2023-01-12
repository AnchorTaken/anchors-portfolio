// Imports
import { useState, lazy, Suspense, useEffect, useRef } from "react";

// Components
import Splash from "./home_split/splash.js";
const About = lazy(() => import("./home_split/about.js"));
const Projects = lazy(() => import("./home_split/projects.js"));
const Jobs = lazy(() => import("./home_split/jobs.js"));
const Contact = lazy(() => import("./home_split/contact.js"));
const Footer = lazy(() => import("../comps/layout/footer.js"));
const SkillSearch = lazy(() => import("../comps/utils/skillSearch.js"));

export default function Home() {
  const [searchActive, setSearchActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function toggleSearch() {
    setSearchActive(!searchActive);
    document.body.style.overflow = searchActive ? "visible" : "hidden";
  }
  // State that manages the copy state
  const [copy, setCopy] = useState([{ value: "", copied: false }]);

  // Function that opens the popup and copies the text
  function copyOpen() {
    setCopy({ copied: true });
    copyClose();
  }

  // Function that closes the popup
  function copyClose() {
    setTimeout(() => setCopy({ copied: false }), 2000);
  }
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);
  return (
    <>
      {copy.copied ? <div className="copied ">Copied</div> : ""}
      {isLoading ? (
        "loading"
      ) : (
        <>
          {searchActive && (
            <div
              className={
                searchActive == true
                  ? "search-container gs"
                  : "search-container "
              }
            >
              {" "}
              <div className="inner-width z-50">
                <Suspense fallback={<div>Loading...</div>}>
                  <SkillSearch active={searchActive} />
                </Suspense>
                <div
                  className="close-btn-cont z-10 mx-auto "
                  onClick={() => toggleSearch()}
                >
                  <button className="view-button flex">
                    <i className="gg-close"></i>
                  </button>
                </div>
              </div>
              <div
                className={searchActive === true ? "menu-off" : ""}
                onClick={toggleSearch}
              ></div>
            </div>
          )}
          <div className="home">
            <Splash copyOpen={copyOpen} copyClose={copyClose} />

            <div className="main relative pt-20 b">
              {" "}
              <div id="about"></div>
              <Suspense fallback={<div>Loading...</div>}>
                <About />
              </Suspense>
              <div id="projects"></div>
              <div ref={ref}>
                {isVisible ? (
                  <Suspense fallback={<div>Loading...</div>}>
                    <Projects />
                  </Suspense>
                ) : null}
              </div>
              <div
                className="bg-black"
                data-aos="fade-in"
                data-aos-delay="900"
                data-aos-offset="-200px"
              >
                <div id="jobs"></div>
                <div ref={ref}>
                  {isVisible ? (
                    <Suspense fallback={<div>Loading...</div>}>
                      <Jobs />
                    </Suspense>
                  ) : null}{" "}
                </div>
                <div className="bg-black cont-padding">
                  <div id="contact"></div>
                  <div ref={ref}>
                    {isVisible ? (
                      <Suspense fallback={<div>Loading...</div>}>
                        <Contact />
                      </Suspense>
                    ) : null}{" "}
                  </div>
                  <Suspense fallback={<div>Loading...</div>}>
                    <Footer copyOpen={copyOpen} copyClose={copyClose} />
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
