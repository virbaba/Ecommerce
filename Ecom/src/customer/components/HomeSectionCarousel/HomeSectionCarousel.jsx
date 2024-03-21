import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Button from "@mui/material/Button";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";


function HomeSectionCarousel({data, sectionName}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
     setActiveIndex((prevIndex) =>
       Math.min(data.length - 5, prevIndex + 1)
     );
  };

   const items = data
     .slice(activeIndex, activeIndex + 5)
     .map((item, index ) => <HomeSectionCard  product={item} />);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  return (
    <div className="px-4 lg:px-8">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableButtonsControls
          disableDotsControls
          slideToIndex={activeIndex}
        />
        {activeIndex !== 0 && (
          <Button
            variant="contained"
            className="z-50"
            onClick={handlePrev}
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(-90deg)",
              bgcolor: "white",
            }}
          >
            <KeyboardArrowLeftIcon
              style={{ color: "black", transform: "rotate(90deg)" }}
            />
          </Button>
        )}
        {activeIndex + 5 < data.length && (
          <Button
            variant="contained"
            className="z-50"
            onClick={handleNext}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
            }}
          >
            <KeyboardArrowLeftIcon
              style={{ color: "black", transform: "rotate(90deg)" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
}

export default HomeSectionCarousel;
