import React from "react";
import MainCarousel from "../../HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../../../Data/Men/men_kurta";
import { mens_shoes } from "../../../../Data/shoes";
import { mens_shirts } from "../../../../Data/Men/men_shirt";
import { sarees } from "../../../../Data/Saree/Sarees";
import { women_dresses } from "../../../../Data/Women/women_dress";

function HomePage() { 
  return (
    <div>
      <MainCarousel />
      <div className="py-20 space-y-10 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"} />
        <HomeSectionCarousel data={mens_shoes} sectionName={"Men's Shoes"} />
        <HomeSectionCarousel data={mens_shirts} sectionName={"Men's Shirt"} />
        <HomeSectionCarousel data={sarees} sectionName={"Women's Saree"} />
        <HomeSectionCarousel data={women_dresses} sectionName={"Women's Dress"} />
      </div>
    </div>
  );
}

export default HomePage;
