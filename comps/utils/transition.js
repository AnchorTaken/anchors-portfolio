import { useEffect, useState } from "react";

const useMountTransition = ({ active, unmountDelay }) => {
  const [hasTransitioned, setHasTransitioned] = useState(false);

  useEffect(() => {
    let timeoutId;
    // create transition animation to unmount component

    if (active && !hasTransitioned) {
      setHasTransitioned(true);
    } else if (!active && hasTransitioned) {
      timeoutId = setTimeout(() => setHasTransitioned(false), unmountDelay);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [unmountDelay, active, hasTransitioned]);

  return hasTransitioned;
};

export default useMountTransition;
