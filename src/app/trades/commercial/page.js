import Banner from "@/app/components/banner";
import CallNow from "@/app/components/callNow";
import CommercialImg from "@/app/components/commercialImg";
import CompSlider from "@/app/components/compSlider";
import Footer from "@/app/components/footer";
import SecondMechanical from "@/app/components/secondMechanical";
import SimpleComp from "@/app/components/simpleComp";
import React from "react";

function Page() {
  return (
    <>
      <CommercialImg />
      <CallNow/>
      <SecondMechanical/>
      <CompSlider/>
      <SimpleComp/>
      <Banner/>
      <Footer/>
    </>
  );
}

export default Page;
