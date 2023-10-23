import React from "react";
import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useMediaQuery } from "react-responsive";

// Create a custom Card component for mobile view
const MobileTechCard = ({ technology }) => (
  <div className="w-28 h-28 p-4 bg-white rounded-lg shadow">
    <BallCanvas icon={technology.icon} />
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
