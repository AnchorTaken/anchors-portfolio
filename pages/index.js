// Imports
import { useState } from "react";

// Components
import Splash from "./home_split/splash.js";
import About from "./home_split/about.js";
import Projects from "./home_split/projects.js";
import Jobs from "./home_split/jobs.js";
import Contact from "./home_split/contact.js";
import Footer from "../comps/layout/footer.js";
import SkillSearch from "../comps/utils/skillSearch.js";

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
              <div className="inner-width z-50">
                <SkillSearch active={searchActive} />
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
              <About setSea={toggleSearch} />
              <div id="projects"></div>
              <Projects />
              <div
                className="bg-black"
                data-aos="fade-in"
                data-aos-delay="900"
                data-aos-offset="-200px"
              >
                <div id="jobs"></div>
                <Jobs />
                <div className="bg-black cont-padding">
                  <div id="contact"></div>
                  <Contact />
                  <Footer copyOpen={copyOpen} copyClose={copyClose} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
