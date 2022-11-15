// Imports (useEffect, useState) image
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import redundency from "/public/assets/json/header.json";

export default function Header() {
  // State to toggle the menu
  const [menuActive, setMenuActive] = useState(false);

  // Nav API
  const navApi = "https://anchooor.wtf/api/navs?populate=*";
  const [isLoading, setIsLoading] = useState(true);
  // Nav menu state
  const [navs, setNav] = useState([]);

  // call api if error, use local json

  useEffect(() => {
    axios
      .get(navApi)
      .then((res) => {
        setNav(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setNav(redundency.data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {/* Map the array nav from the api */}
      {isLoading ? (
        <></>
      ) : (
        <>
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
                <a href="/assets/CV_Ev_2022.pdf" download>
                  <div
                    className="font-title font-nav button-home-head flex"
                    data-aos="fade-down"
                    data-aos-delay="550"
                  >
                    {" "}
                    Resumé{" "}
                    <div className="cont-for-ic">
                      <i className="gg-software-download"></i>
                    </div>
                  </div>
                </a>
              </div>
            </nav>
          </div>{" "}
        </>
      )}
    </>
  );
}
