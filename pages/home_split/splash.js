import Image from "next/image";
// import FsParticleJS from "../../comps/utils/fsparticlejs.js";
import Header from "../../comps/layout/header.js";
import Copy from "../../comps/utils/copy.js";

function Splash({ copyOpen, copyClose }) {
  return (
    <>
      {" "}
      <div className="splash z-10">
        <div className="relative z-10 flex lines w-full h-full">
          <div className="logo" id="logo">
            <div
              className="bleh"
              // set transform to follow the mouse
            >
              <Image
                src={"/assets/img/logo.svg"}
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
              copyOpen={copyOpen}
              copyClose={copyClose}
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
              Aspiring to design interactive experiences that engage and
              captivate users
            </h1>
            <p
              className="font-default"
              data-aos="fade-down"
              data-aos-delay="450"
            >
              {" "}
              As a designer, I specialize in creating unique digital user
              experiences. I am currently focused on building intuitive websites
              that prioritize user experience and common sense.
            </p>
          </div>
        </div>
        {/* <div className="custom-rebuilt">
          <FsParticleJS />
        </div> */}
      </div>
      <div className="trs relative">
        <div className="img-holder">
          <div className="work">
            <Image
              src={
                "https://res.cloudinary.com/dmoxrn44i/image/upload/v1666801678/portfolio/bottom_y6g2wx.png"
              }
              layout="fill"
              objectFit="cover"
              alt="logo"
              height={"176px"}
              width={"100%"}
              priority={true}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Splash;
