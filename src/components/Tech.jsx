import React from "react";
import { styles } from "../styles";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { useMediaQuery } from "react-responsive";
import { BallCanvas } from "./canvas";

const MobileTechCard = ({ technology }) => (
  <div className="w-28 h-28 p-4 bg-white rounded-lg shadow">
    <img
      src={technology.icon}
      alt={technology.name}
      className="w-full h-full"
    />
  </div>
);

const Tech = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="flex flex-col items-center gap-5">
      <div>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {isMobile
          ? technologies.map((technology) => (
              <MobileTechCard key={technology.name} technology={technology} />
            ))
          : technologies.map((technology) => (
              <div className="w-28 h-28" key={technology.name}>
                <BallCanvas icon={technology.icon} />
              </div>
            ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
