"use client";
import { Righteous } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import React from "react";
import BackgroundImage from "@/components/ui/events/BackgroundImage";
import Slides from "@/components/ui/events/Slides";
import SlideInfo from "@/components/ui/events/SlideInfo";
import Controls from "@/components/ui/events/Controls";

const inter = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});
export type Data = {
  img: string;
  title: string;
  description: string;
  location: string;
};

export type CurrentSlideData = {
  data: Data;
  index: number;
};

export default function Home() {
  const [data, setData] = React.useState<Data[]>(sliderData.slice(1));
  const [transitionData, setTransitionData] = React.useState<Data>(
    sliderData[0],
  );
  const [currentSlideData, setCurrentSlideData] =
    React.useState<CurrentSlideData>({
      data: initData,
      index: 0,
    });

  return (
    <main
      className={`
       ${inter.className}
        relative min-h-screen select-none overflow-hidden text-white antialiased `}
    >
      <AnimatePresence>
        <BackgroundImage
          transitionData={transitionData}
          currentSlideData={currentSlideData}
        />
        <div className="  absolute z-20  h-full w-full">
          <div className=" flex h-full w-full grid-cols-10 flex-col md:grid">
            <div className=" col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
              <SlideInfo
                transitionData={transitionData}
                currentSlideData={currentSlideData}
              />
            </div>
            <div className=" col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
              <Slides data={data} />
              <Controls
                currentSlideData={currentSlideData}
                data={data}
                transitionData={transitionData}
                initData={initData}
                handleData={setData}
                handleTransitionData={setTransitionData}
                handleCurrentSlideData={setCurrentSlideData}
                sliderData={sliderData}
              />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </main>
  );
}

const sliderData = [
  {
    img: "https://res.cloudinary.com/ds4lbluhe/image/upload/v1708694408/WhatsApp_Image_2024-02-23_at_18.47.38_034a1c5d_l5rf8s.jpg",
    location: "CS Department",
    description:
      "Are you ready to advance your hacking skills and start on an exciting cybersecurity adventure? Our Capture the Flag (CTF) events and Advanced Ethical Hacking Workshop are the only places to look! ",
    title: "CodeVault",
  },
  {
    img: "https://res.cloudinary.com/ds4lbluhe/image/upload/v1708693635/IMG_20231101_185655_pwdjnf.jpg",
    title: "Access Denied",
    description:
      "Team ISTE recently had the privilege of conducting a workshop from November 1st to November 3rd that left an indelible mark on both Instructors and Attendees alike",
    location: "CS Lab 2nd Floor",
  },
  {
    img: "https://res.cloudinary.com/ds4lbluhe/image/upload/v1708694970/390957785_1005229477413655_3343713001902293170_n_evct4x.jpg",
    title: "Quest for Enigma",
    description:
      'Team ISTE is thrilled to announce the tremendous success of the free quiz event "Quest For Enigma," which took place from October 11th to 12th. ',
    location: "Cryptography Lab",
  },
  {
    img: "https://res.cloudinary.com/ds4lbluhe/image/upload/v1708695128/Screenshot_2024-02-23_190129_noofbb.png",
    title: "Bit N Bytes",
    description:
      'Indian Society for Technical Education (HIT Students Chapter) presents "BIT N BYTES" for all the coding enthusiasts. The two day competition is open to everyone.',
    location: "Cryptography Lab",
  },
];

const initData = sliderData[0];
