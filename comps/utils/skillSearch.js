// import things for api axios, useEffect, useState
import axios from "axios";
import { useEffect, useState } from "react";
import redundency from "/public/assets/json/skills.json";

function SkillSearch({ active }) {
  // Nav API

  // Nav menu state
  const [skills, setSkills] = useState([]);
  const [skillActive, setSkillActive] = useState(999);
  const [apiResponse, setApiResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [textShown, setTextShown] = useState(null);
  const [textTitle, setTextTitle] = useState(null);
  const [isShown, setIsShown] = useState(false);
  // Get data once
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://anchooor.wtf/api/skill-categories?populate=*"
        );

        setApiResponse(res.data.data.reverse());
        setSkills(res.data.data.reverse());

        setIsLoading(false);
      } catch (error) {
        setApiResponse(redundency.data.reverse());
        setSkills(redundency.data.reverse());
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const showAditionalInfo = (title, info) => {
    setTextTitle(title);
    setTextShown(info);
    setIsShown(true);
  };
  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <div className="search-skills">
          <div className="container relative z-10">
            <div className=" z-20 relative bg-white">
              {" "}
              <div className="relative inner-cont m-auto">
                <div
                  className={
                    active == true
                      ? "title m-auto relative mt-10 animate__fadeInLeft animate__animated"
                      : "title m-auto relative mt-10 animate__fadeOutRight animate__animated"
                  }
                >
                  <h2 className="font-title title mb-2 phone-spacing">
                    What are you looking for ?
                  </h2>
                </div>
                <div className="cool-border relative m-auto bg-white">
                  {" "}
                  <div className={isShown ? "additional-info" : "hidden"}>
                    <div className="flex mb-5">
                      <button
                        className="back"
                        onClick={() => setIsShown(false)}
                      >
                        {" "}
                        <i className="gg-chevron-double-left-r"></i>
                      </button>
                      <h2 className="currently-reading title mb-4">
                        {textTitle}
                      </h2>
                    </div>
                    <p className="font-default texto-simple animate__fadeIn animate__animated">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: textShown,
                        }}
                      />
                      {}
                    </p>
                  </div>
                  <div className="search-bar">
                    {/* make the input filter based on cat_name */}
                    <input
                      type="text"
                      className="search-input"
                      placeholder="Search skills"
                      onChange={(e) => {
                        const search = e.target.value.toLowerCase();
                        // set api response to lowercase
                        const lowercase = apiResponse
                          .map((item) => {
                            // filter the api response based on the search input. search for cat_name and skill_name. make it not exact match
                            return {
                              ...item,
                              cat_name: item.attributes.cat_name.toLowerCase(),
                              skill_name: item.attributes.list_of_skills.filter(
                                (item) => item.skill_name.toLowerCase()
                              ),
                            };
                          })
                          .filter((item) => {
                            return (
                              item.skill_name.some((item) => {
                                return item.skill_name
                                  .toLowerCase()
                                  .includes(search);
                              }) || item.cat_name.toLowerCase().includes(search)
                            );
                          });
                        setSkills(lowercase);
                      }}
                    />
                    <div className="info-i">
                      <div className="note font-default">
                        Search for something that your company needs. <br />{" "}
                        <br />
                        <span className="italic">
                          {`  eg. "react", "node", "javascript", "html"`}
                        </span>
                      </div>
                      <i className="gg-info"></i>
                    </div>
                    <div className="mag">
                      <i className="gg-search"></i>
                    </div>
                  </div>{" "}
                  <div className="overflow-hidden">
                    <div className="category">
                      {/* map through every category */}
                      {skills.map((category, index) => {
                        const cat_leng =
                          64 + category.attributes.list_of_skills.length * 44;
                        const currentActive = index;
                        return (
                          <div
                            key={index}
                            className={
                              skillActive === index
                                ? "lines-cats active "
                                : "lines-cats"
                            }
                          >
                            <div
                              className={
                                active == true
                                  ? "category-name font-title"
                                  : "category-name font-title"
                              }
                              data-animate-delay={1000 + index * 100}
                              onClick={() => setSkillActive(index)}
                            >
                              <i className="gg-folder"></i>
                              <span>{category.attributes.cat_name}</span>
                              {skillActive === index ? (
                                <div
                                  className={`line-down ${
                                    skillActive === index
                                      ? " animate__fadeInUp animate__animated  active"
                                      : "not-active  animate__fadeOutDown animate__animated"
                                  }`}
                                  style={{
                                    height:
                                      skillActive === index
                                        ? cat_leng + "px"
                                        : "0px",
                                  }}
                                ></div>
                              ) : (
                                ""
                              )}{" "}
                              <button>
                                <i
                                  className={
                                    skillActive === index
                                      ? "gg-chevron-double-up animate__fadeInDown animate__animated"
                                      : "gg-chevron-double-down animate__slideInUp animate__animated"
                                  }
                                ></i>{" "}
                              </button>
                            </div>
                            {/* make a active toggle  */}
                            {skillActive === index ? (
                              <div
                                className={
                                  skillActive === index
                                    ? `skill-list font-normal titles active `
                                    : `skill-list font-normal titles absolute `
                                }
                              >
                                <div className="overflow-hidden table w-full">
                                  <div
                                    className={
                                      skillActive === index ? `` : `absolute`
                                    }
                                  >
                                    <div className="skill-grid top-titlles mb-5 ml-8 lines-under">
                                      <div className="skill-name">Name</div>

                                      <div className="exprience">
                                        Confidence
                                      </div>
                                    </div>
                                    {category.attributes.list_of_skills
                                      .map((skill, index) => {
                                        return (
                                          <div
                                            key={index}
                                            className="skill-grid pl-8 inner"
                                          >
                                            {" "}
                                            <div
                                              className={
                                                skillActive === currentActive
                                                  ? `skill-name box-1 animate__fadeInDown animate__animated grid`
                                                  : `skill-name box-1 animate__fadeOut animate__animated`
                                              }
                                              data-animate-delay={index * 100}
                                            >
                                              {" "}
                                              <div className="skill-name font-bold hide-pc">
                                                Name
                                              </div>
                                              <i className="gg-file"></i>{" "}
                                              {skill.skill_name}
                                            </div>
                                            <div
                                              className={
                                                skillActive === currentActive
                                                  ? `skill-name box-2 onthe-right animate__fadeInRight animate__animated`
                                                  : `skill-name box-2 onthe-right animate__fadeOut animate__animated`
                                              }
                                              data-animate-delay={index * 100}
                                            >
                                              <div className="skill-name font-bold hide-pc">
                                                Confidence
                                              </div>
                                              {skill.confidence}{" "}
                                              {skill.note !== null
                                                ? skill.note
                                                : ""}
                                            </div>
                                            {console.log(skill)}
                                            {/* check if skill.desc is not null and is not "" */}
                                            {skill.desc !== null &&
                                            skill.desc !== "" ? (
                                              <button
                                                className={
                                                  skillActive === currentActive
                                                    ? `animate__fadeInRight animate__animated box-3`
                                                    : `animate__fadeOut animate__animated box-3`
                                                }
                                                data-animate-delay={index * 100}
                                                onClick={() =>
                                                  showAditionalInfo(
                                                    skill.skill_name,
                                                    skill.desc
                                                  )
                                                }
                                              >
                                                {" "}
                                                Read More
                                              </button>
                                            ) : (
                                              ""
                                            )}
                                          </div>
                                        );
                                      })
                                      .reverse()}
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
          </div>
        </div>
      )}
    </>
  );
}

export default SkillSearch;
