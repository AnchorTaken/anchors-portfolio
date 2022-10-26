// Imports (useEffect, useState) image
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

export default function Header() {
  // State to toggle the menu
  const [menuActive, setMenuActive] = useState(false);

  // Nav API
  const navApi = "https://anchooor.wtf/api/navs?populate=*";

  // Nav menu state
  const [navs, setNav] = useState([]);

  // Get data once
  useEffect(() => {
    axios.get(navApi).then((res) => {
      setNav(res.data.data);
    });
  }, []);

  return (
    <>
      {/* Map the array nav from the api */}

      <div className="desktop">
        <nav className="absolute">
          <div className="main-menu m-auto">
            {navs.map((nav, index) => {
              return (
                <div key={index}>
                  <a href={nav.attributes.url}>
                    <div
                      className="font-title font-nav"
                      data-aos={nav.attributes.animation_type}
                      data-aos-delay={nav.attributes.delay}
                    >
                      <span>{nav.attributes.number}.</span>{" "}
                      <div className="text">{nav.attributes.name}</div>
                    </div>
                  </a>
                </div>
              );
            })}
            <div
              className="font-title font-nav button-home-head flex"
              data-aos="fade-down"
              data-aos-delay="550"
            >
              {" "}
              Resume{" "}
              <div className="cont-for-ic">
                <i className="gg-software-download"></i>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Nav Wrapper */}
      <div className="mobile">
        {/* Toggle Navigation Button */}
        <button
          className="nav-btn"
          onClick={() => setMenuActive(!menuActive)}
        ></button>
        <div
          className={`nav-wrapper ${
            menuActive
              ? "animate__fadeInRightBig animate__animated active"
              : "animate__fadeOutRightBig animate__animated "
          }`}
        >
          <nav className="absolute">
            <div className="how-is-it-going">
              {/* <div className="time">
              22 <span className="tocker">:</span> 46
            </div> */}
              <div
                className={
                  menuActive
                    ? "temp animate__backInRight animate__animated animate__delay-1s one"
                    : "temp animate__backOutRight animate__animated"
                }
              >
                25c
              </div>
              <div
                className={
                  menuActive
                    ? "weather animate__backInRight animate__animated animate__delay-1s two"
                    : "weather animate__backOutRight animate__animated"
                }
              >
                <i className="gg-cloud"></i>
              </div>
            </div>
            <div className="main-menu m-auto">
              <a href="#">
                <div
                  className={
                    menuActive
                      ? "font-title font-nav animate__backInRight animate__animated animate__delay-1s four"
                      : "font-title font-nav animate__backOutRight animate__animated"
                  }
                  data-aos="fade-down"
                  data-aos-delay="150"
                >
                  <span>01.</span> <div className="text">Home</div>
                </div>
                <div className="time">2</div>
              </a>
              <a href="#about">
                <div
                  className={
                    menuActive
                      ? "font-title font-nav animate__backInRight animate__animated animate__delay-1s five"
                      : "font-title font-nav animate__backOutRight animate__animated"
                  }
                  data-aos="fade-down"
                  data-aos-delay="250"
                >
                  <span>02.</span> <div className="text">About Me</div>
                </div>
                <div className="time">2</div>
              </a>
              <a href="#projects">
                <div
                  className={
                    menuActive
                      ? "font-title font-nav animate__backInRight animate__animated animate__delay-1s six"
                      : "font-title font-nav animate__backOutRight animate__animated"
                  }
                  data-aos="fade-down"
                  data-aos-delay="350"
                >
                  <span>03.</span> <div className="text">Projects</div>
                </div>
                <div className="time dots">:</div>
              </a>
              <a href="#jobs">
                <div
                  className={
                    menuActive
                      ? "font-title font-nav animate__backInRight animate__animated animate__delay-1s seven"
                      : "font-title font-nav animate__backOutRight animate__animated"
                  }
                  data-aos="fade-down"
                  data-aos-delay="350"
                >
                  <span>04.</span> <div className="text">Employment</div>
                </div>
                <div className="time">2</div>
              </a>
              <a href="#contact">
                <div
                  className={
                    menuActive
                      ? "font-title font-nav animate__backInRight animate__animated animate__delay-1s eight"
                      : "font-title font-nav animate__backOutRight animate__animated"
                  }
                  data-aos="fade-down"
                  data-aos-delay="450"
                >
                  <span>05.</span> <div className="text">Contact</div>
                </div>{" "}
                <div className="time">2</div>
              </a>
              {/* <div
              className={
                menuActive
                  ? "font-title font-nav button-home-head flex animate__backInRight animate__animated animate__delay-1s nine"
                  : "font-title font-nav button-home-head flex animate__backOutRight animate__animated"
              }
              data-aos="fade-down"
              data-aos-delay="550"
            >
              {" "}
              Resume{" "}
              <div className="cont-for-ic">
                <i className="gg-software-download"></i>
              </div>
            </div> */}
            </div>
            {/* <div
            className={
              menuActive
                ? "animate__fadeInUpBig animate__animated animate__delay-1s six img-holder tree"
                : "animate__fadeOutDownBig animate__animated animate__delay-1s six img-holder tree"
            }
          >
            <div className="work">
              <Image
                src={"/assets/img/tree.png"}
                layout="fill"
                objectFit="contain"
                alt="logo"
              />
            </div>
          </div> */}
            <div className="socials-head">
              <ul>
                {" "}
                <a
                  href="https://github.com/AnchorTaken"
                  target="_blank"
                  rel="noreferrer"
                >
                  <li>
                    {" "}
                    <Image
                      src={"/assets/img/socials/github.png"}
                      layout="fill"
                      objectFit="contain"
                      alt="logo"
                    />
                  </li>
                </a>
                <a
                  href="https://www.linkedin.com/in/evalds-maksvitis-845247138/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <li>
                    {" "}
                    <Image
                      src={"/assets/img/socials/linkedin.png"}
                      layout="fill"
                      objectFit="contain"
                      alt="logo"
                    />
                  </li>
                </a>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
