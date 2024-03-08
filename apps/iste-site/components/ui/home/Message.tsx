import React from "react";
import { motion } from "framer-motion";

import { fadeIn, staggerContainer } from "@/utils/motion";

const Message = () => (
  <section className={`sm:p-16 xs:p-8 px-6 py-12`}>
    <motion.div
      variants={staggerContainer(0.1, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`lg:w-[80%] w-[100%] mx-auto`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="gradient-05 sm:p-8 p-4 border-[1px] border-[#6A6A6A] rounded-xl relative flex flex-col sm:flex-row sm:items-center"
      >
        <div className="feedback-gradient" />
        <div className=" hidden sm:block rounded-full overflow-hidden sm:order-last">
          <img
            src="https://media.licdn.com/dms/image/C5103AQGvLDtNwxm8VQ/profile-displayphoto-shrink_800_800/0/1523506277758?e=1714003200&v=beta&t=1skrRNTQjd66VVaMcF3VM1bOKWXGRARUOO-T3rTkQ80"
            alt="profile"
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
        <div className="flex flex-col justify-center mr-8">
          <h4 className="font-bold sm:text-[30px] text-[24px] sm:leading-[40.32px] leading-[36.32px] text-white">
            Priyatosh Jana
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Mentor ISTE Chapter - HIT
          </p>
        </div>
        <p className="mt-[24px] font-extralight sm:text-[18px] text-[14px] sm:leading-[45.6px] leading-[39.6px] text-gray-300">
          Dear Members and Supporters,
          <br />
          Welcome to ISTE HIT Chapter! We're dedicated to innovation and
          learning in tech and education. Stay tuned for exciting events and
          opportunities. Join us in shaping the future of education.
        </p>
      </motion.div>
    </motion.div>
  </section>
);

export default Message;
