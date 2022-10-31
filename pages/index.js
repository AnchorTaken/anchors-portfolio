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

  function toggleSearch() {
    setSearchActive(!searchActive);
    document.body.style.overflow = searchActive ? "visible" : "hidden";
  }

  return (
    <>
      {searchActive && (
        <div
          className={
            searchActive == true ? "search-container gs" : "search-container "
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
        <Splash />

        <div className="main relative pt-20 b">
          {" "}
          <div id="about"></div>
          <About setSea={toggleSearch} />
          <div id="projects"></div>
          <Projects />
          <div className="bg-black">
            <div id="jobs"></div>
            <Jobs />
            <div className="bg-black cont-padding">
              <div id="contact"></div>
              <Contact />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
