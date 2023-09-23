import React, { useRef } from "react";
import Landingpageheader from "./Landingpagecontent/Landingpageheader";
import Landingpagecontects from "./Landingpagecontent/Landingpagecontects";
import "../Landingpage/Landingpage.css";

const Landingpage = () => {
  const Home = useRef(null);
  const About = useRef(null);
  const Services = useRef(null);
  const handleLinkClick = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <div style={{ position: "fixed", zIndex: "99999", width: "100%" }}>
        <Landingpageheader Home={Home} About={About} Services={Services} handleLinkClick={handleLinkClick} />
      </div>
      <div>
        <Landingpagecontects Home={Home} About={About} Services={Services} handleLinkClick={handleLinkClick} />
      </div>
    </div>
  );
};

export default Landingpage;
