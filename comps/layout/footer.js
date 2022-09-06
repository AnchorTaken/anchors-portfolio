// Imports
import Image from "next/image";

// Comps
import Copy from "/comps/utils/copy.js";

function Footer() {
  return (
    <footer className="flex">
      <div className="transition-footer img-holder" data-aos="fade-in">
        <div className="work">
          <Image
            src={"/assets/img/footer-transition.jpg"}
            layout="fill"
            objectFit="cover"
            alt="logo"
          />
        </div>
      </div>
      <ul
        className="left w-1/3 grid"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <h2>for gamers</h2>
        <div className="flex  mx-auto w-fit">
          <li>
            <Copy
              copyValue={"Anchor#7851"}
              imgPresent={"/assets/img/socials/discord.png"}
            />{" "}
          </li>
        </div>
      </ul>{" "}
      {/* Center LOGO */}
      <div className="img-holder w-1/3 anc" data-aos="fade-down">
        <div className="work">
          <Image
            src={"/assets/img/anchor.svg"}
            layout="fill"
            objectFit="contain"
            alt="logo"
          />
        </div>
      </div>
      <ul
        className="right w-1/3 grid"
        data-aos="fade-left"
        data-aos-delay="400"
      >
        <h2>for professionals</h2>
        <div className="flex  mx-auto w-fit">
          {/* Link to github */}

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

          {/* Link to linkedin */}

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

          <li>
            <Copy
              copyValue={"maksvitisevalds@gmail.com"}
              imgPresent={"/assets/img/socials/email.png"}
            />{" "}
          </li>
        </div>
      </ul>{" "}
    </footer>
  );
}

export default Footer;
