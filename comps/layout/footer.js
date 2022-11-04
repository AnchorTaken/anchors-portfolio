// Imports
import Image from "next/image";

// Comps
import Copy from "/comps/utils/copy.js";

function Footer() {
  return (
    <footer className="flex">
      {/* Center LOGO */}
      <ul
        className="right w-1/3 grid"
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-offset="000"
      >
        <div>find me</div>
        <div className="flex  mx-auto w-fit">
          {/* Link to github */}
          <li data-aos="fade-up" data-aos-delay="500" data-aos-offset="000">
            <Copy
              copyValue={"Anchor#7851"}
              imgPresent={
                "https://res.cloudinary.com/dmoxrn44i/image/upload/v1666801166/portfolio/socials/discord_qiagch.png"
              }
            />{" "}
          </li>
          <a
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-offset="000"
            href="https://github.com/AnchorTaken"
            target="_blank"
            rel="noreferrer"
          >
            <li>
              {" "}
              <Image
                src={
                  "https://res.cloudinary.com/dmoxrn44i/image/upload/v1666801166/portfolio/socials/github_s6l3k7.png"
                }
                layout="fill"
                objectFit="contain"
                alt="logo"
              />
            </li>
          </a>

          {/* Link to linkedin */}

          <a
            data-aos="fade-up"
            data-aos-delay="700"
            data-aos-offset="000"
            href="https://www.linkedin.com/in/evalds-maksvitis-845247138/"
            target="_blank"
            rel="noreferrer"
          >
            <li>
              {" "}
              <Image
                src={
                  "https://res.cloudinary.com/dmoxrn44i/image/upload/v1666801166/portfolio/socials/linkedin_udi2xy.png"
                }
                layout="fill"
                objectFit="contain"
                alt="logo"
              />
            </li>
          </a>
          <a
            data-aos="fade-up"
            data-aos-delay="800"
            data-aos-offset="000"
            href="https://www.instagram.com/anchoronai/"
            target="_blank"
            rel="noreferrer"
          >
            <li>
              {" "}
              <Image
                src={
                  "https://res.cloudinary.com/dmoxrn44i/image/upload/v1666802622/portfolio/socials/ig_lxyuv2.png"
                }
                layout="fill"
                objectFit="contain"
                alt="logo"
              />
            </li>
          </a>
          <li data-aos="fade-up" data-aos-delay="900" data-aos-offset="000">
            <Copy
              copyValue={"maksvitisevalds@gmail.com"}
              imgPresent={
                "https://res.cloudinary.com/dmoxrn44i/image/upload/v1666801166/portfolio/socials/email_tldxje.png"
              }
            />{" "}
          </li>
        </div>
      </ul>{" "}
    </footer>
  );
}

export default Footer;
