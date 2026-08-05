"use client";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const AosInit = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return null;
};

export default AosInit;
