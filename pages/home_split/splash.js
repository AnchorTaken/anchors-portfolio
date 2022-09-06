import Image from "next/image";
// import FsParticleJS from "../../comps/utils/fsparticlejs.js";
import Header from "../../comps/layout/header.js";
import Copy from "../../comps/utils/copy.js";

function Splash() {
  return (
    <>
      {" "}
      <div className="splash z-10">
        <div className="relative z-10 flex">
          <div className="logo">
            <div className="bleh">
              <Image
                src={"/assets/img/logo.png"}
                layout="fill"
                objectFit="contain"
                alt="logo"
                priority={true}
              />
            </div>
          </div>
          <div className="logo-top-left">
            <div className="bleh" data-aos="fade-up" data-aos-delay="250">
              <Image
                src={"/assets/img/anchor-white.svg"}
                layout="fill"
                objectFit="contain"
                alt="logo"
              />
            </div>
          </div>
          {/* Splash Menu ONLY */}
          <Header />
          <div
            className="email absolute"
            data-clipboard-target="#foo"
            data-aos="fade-left"
            data-aos-delay="250"
          >
            {/* Copy to clipboard comp */}
            <Copy
              text={"maksvitisevalds@gmail.com"}
              copyValue={"maksvitisevalds@gmail.com"}
            />
          </div>
          <div className="splash-text">
            <div className="smaller" data-aos="fade-down">
              Hello! My name is Evalds || Anchor
            </div>

            <h1
              className="font-title pt-2"
              data-aos="fade-down"
              data-aos-delay="250"
            >
              Aspiring to be the person to design interactive experiences
            </h1>
            <p
              className="font-default"
              data-aos="fade-down"
              data-aos-delay="450"
            >
              {" "}
              I’m a designer specializing in building unique digital user
              experiences. Currently, I’m focused on building easy to use
              websites that have common sense at the center of user expreicence.
            </p>
          </div>
        </div>
        {/* <div className="custom-rebuilt">
          <FsParticleJS />
        </div> */}
      </div>
      <div className="transition relative">
        <div className="img-holder">
          <div className="work">
            <Image
              src={"/assets/img/bottom.png"}
              layout="fill"
              objectFit="cover"
              alt="logo"
              priority={true}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Splash;
