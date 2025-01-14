import React, { useState } from 'react';
import { motion, AnimatePresence, useAnimate } from "framer-motion"
import "../../css/font.css"

const Hero = ({page}) => {

  // const [startAnimation, setStartAnimation] = useState(false)
  const [scope, animate] = useAnimate()

  const onMouseEnter = async (e) => {

    // setStartAnimation(true)

    animate("#hand", { left: '-70%', top: '-70%' }, { duration: 1 })
    await animate("#grafitti", { top: '-10rem', right: 0, left: '-8rem' }, { duration: 1 })
    animate("#hand", { left: '-700%', top: '700%' }, { duration: 1.5 })
    await animate("#arrow", { top: '-10rem', right: 0, left: '-8rem', scaleX: -1, rotate: 360 }, { duration: 0.5 })
    animate("#events", { bottom: '-5.5rem', left: '23rem', opacity: 1 }, { duration: 0.5 })
  }

  const onMouseLeave = async (e) => {

    // setStartAnimation(false)

    await animate("#hand", { left: '-70%', top: '-70%' }, { duration: 1 })
    animate("#hand", { left: '-700%', top: '700%' }, { duration: 1.5 })
    animate("#grafitti", { left: '-700%', top: '700%', bottom: 0, right: 0 }, { duration: 1.5 })
    // animate("#grafitti", { top: 500, left: "-50rem" }, { duration: 0.7 })
    animate("#arrow", { left: '-700%', top: '700%', bottom: 0, right: 0 }, { duration: 0.7 })
    await animate("#events", { left: '-700%', top: '700%', opacity: 1 }, { duration: 0.5 })
    // await animate("#events", { bottom: -500, left: '-50rem' }, { duration: 0.7 })

    animate("#arrow", { top: '-700%', right: 0, left: '-8rem', rotate: 180, scaleX: -1 }, { duration: 0 })
    animate("#events", { left: '-5.5rem', bottom: '18rem', top: '14rem', opacity: 0 }, { duration: 0 })
  }

  return (
    <div
      className="w-screen h-screen flex justify-center items-center overflow-hidden"
    >
      <div
        className="min-w-[300px] w-[50vw] sm:min-w-[600px] sm:w-[33vw] flex justify-center items-cente relative"
        ref={scope}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <img
          className="z-40"
          src={`/assets/EventsPage/hero/mainAB.png`}
        />
        <img
          className="z-10 absolute mt-3 ml-2"
          src={`/assets/EventsPage/hero/shadowAB.png`}
          id="shadow"
        />
        <img
          className="w-[65%] z-50 absolute top-[700%] right-[700%] rotate-[60deg] scale-y-125"
          src={`/assets/EventsPage/hero/hand.png`}
          id="hand"
        />
        <img
          className="w-[90%] aspect-square z-20 absolute top-[700%] right-[700%]"
          src={`/assets/EventsPage/hero/grafitti.png`}
          id="grafitti"
        />
        <img
          // className="w-[35rem] z-20 absolute rotate-180 scale-x-100 drop-shadow-arrow"
          className="w-[85%] z-20 absolute bottom-[700%] drop-shadow-arrow rotate-180 scale-x-100"
          src={`/assets/EventsPage/hero/arrow.png`}
          id="arrow"
        />
        <p
          // className="text-8xl text-white absolute bottom-40 left-[33rem] rotate-[20deg] opacity-0"
          className="text-8xl text-white absolute -bottom-[5.5rem] left-72 opacity-0 urbanist-font drop-shadow-title"
          id="events"
        >
          {page}
        </p>
      </div>
    </div>
  );
};

export default Hero;