import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";

export default function Layout({ children }) {
  useEffect(() => {
    // Loading AOS Globally
    AOS.init({ once: true });
  });

  return (
    <>
      <div className="fullpage relative">{children}</div>
    </>
  );
}
