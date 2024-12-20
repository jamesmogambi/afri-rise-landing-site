import { useEffect, useState } from "react";

const useScreenHeight = () => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    // Function to calculate and update height
    const updateHeight = () => {
      const newHeight = window.innerHeight * (2 / 3);
      setHeight(newHeight);
    };

    // Set initial height
    updateHeight();

    // Add event listener for window resize
    window.addEventListener("resize", updateHeight);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return { height };
};

export default useScreenHeight;
