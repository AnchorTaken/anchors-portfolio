import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback, useEffect } from "react";

const FsParticleJS = () => {
  const particlesInit = useCallback(async (engine) => {
    "console.log(engine)";
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await "console.log(container)";
  }, []);

  return (
    <Particles
      id="tsparticles custom-rebuilt"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 60,
        fullScreen: false,

        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: false,
            opacity: 0.2,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
            bounce: false,
            direction: "bottom",
            enable: true,
            outMode: "out",
            random: false,
            straight: true,
            speed: 100,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            limit: 0,
            value: 15,
          },
          shape: {
            character: {
              fill: false,
              font: "Verdana",
              style: "",
              value: "*",
              weight: "600",
            },
            image: [],
            polygon: {
              nb_sides: 5,
            },
            stroke: {
              color: "#aaa",
              width: 9,
            },
            type: "line",
          },
          opacity: {
            animation: {
              enable: false,
              minimumValue: 0.2,
              speed: 0.5,
              sync: false,
            },
            random: true,
            value: 1,
          },
          size: {
            value: { min: 0.4, max: 2 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default FsParticleJS;
