// Imports
import Image from "next/image";

// Comps
import Copy from "/comps/utils/copy.js";

function Footer({ copyOpen, copyClose }) {
  return (
    <footer className="flex">
      {/* Center LOGO */}
      <ul
        className="right w-1/3 grid"
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-offset="000"
      >
        <div className="tiitle">find me</div>
        <div className="flex  mx-auto w-fit">
          {/* Link to github */}
          <li
            id="discord"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-offset="000"
          >
            <Copy
              copyOpen={copyOpen}
              copyClose={copyClose}
              copyValue={"Anchor#7851"}
              imgPresent={
                "https://res.cloudinary.com/dmoxrn44i/image/upload/v1668688801/portfolio/socials/discord_p1xylh.png"
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
            id="github"
          >
            <li>
              {" "}
              <Image
                src={
                  "https://res.cloudinary.com/dmoxrn44i/image/upload/v1668688549/portfolio/socials/github_w4c1tf.png"
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
            id="linkedin"
          >
            <li>
              {" "}
              <Image
                src={
                  "https://res.cloudinary.com/dmoxrn44i/image/upload/v1668688549/portfolio/socials/linkedin_akiwsq.png"
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
            id="instagram"
          >
            <li>
              {" "}
              <Image
                src={
                  "https://res.cloudinary.com/dmoxrn44i/image/upload/v1668688549/portfolio/socials/ig_v8eeqc.png"
                }
                layout="fill"
                objectFit="contain"
                alt="logo"
              />
            </li>
          </a>
          <li
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-offset="000"
            id="email"
          >
            <Copy
              copyOpen={copyOpen}
              copyClose={copyClose}
              copyValue={"maksvitisevalds@gmail.com"}
              imgPresent={
                "https://res.cloudinary.com/dmoxrn44i/image/upload/v1668688549/portfolio/socials/email_npx3tp.png"
              }
            />{" "}
          </li>
        </div>
      </ul>{" "}
    </footer>
  );
}

export default Footer;
