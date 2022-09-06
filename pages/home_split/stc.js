// Import gsap & scrolltrigger
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import { useEffect } from "react";
import Image from "next/image";

export default function STC() {
  // Register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    console.log("ran");

    // --- ORANGE PANEL ---
    gsap.to(".move-disa", {
      scrollTrigger: {
        trigger: ".fsbasd",
        start: "40% 40%",
        end: "50% 40%",
        scrub: 1,
        markers: true,
        pin: ".thata",
      },
      duration: 1,
      translateX: "300%",
      ease: "power3.Out",
    });
  }, []);

  return (
    <>
      {" "}
      <div className="fsbasd mt-32">
        <div className="thata">
          <div className="move-disa">
            <div className="train" id="train">
              <Image
                src={"/assets/img/train.png"}
                layout="fill"
                objectFit="contain"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
