import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'



const Details = ({type, time, place, info }) => {
    const ref = useRef(null);
    return (
    <li ref={ref}className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        
        <LiIcon reference={ref} />

        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5,type:"spring"}}
        >
            <h3 className='capitalize  font-bold text-2xl'>
                {type}&nbsp;
                </h3>
            <span className='capitalize font-medium text-dark/75'>
                {time} | {place}
            </span>
            <p className='font-medium w-full'>
                {info}
            </p>
        </motion.div>
    </li>
    );
}

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target:ref,
            offset:["start end", "center start"]
        }
    )

    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center'>
                Education
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative'>

                <motion.div 
                style={{scaleY:scrollYProgress}}
                className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'  />

                

                <ul className="w-full flex flex-col items-start justify-between ml-4">
                    <Details

                        type=" Associate Engineer UI/UX " company="Virtusa"
                        companyLink="www.virtusa.com"
                        time="2022-Present" place="752 Dr Danister De Silva Mawatha, Colombo"
                        info="At Virtusa, I primarily focus on front-end development using Angular However, 
I often work closely with the design team to ensure that the user interfaces we create 
are not only visually appealing but also functional and user-friendly. My experience with 
Figma allows me to contribute directly to the UI/UX process by creating prototypes and user
 flows. I make sure that the designs I work on translate into responsive, accessible, and 
 efficient code, which provides a seamless experience for users."


                    />
                    <Details

                        type=" Associate Engineer UI/UX " company="Virtusa"
                        companyLink="www.virtusa.com"
                        time="2022-Present" place="752 Dr Danister De Silva Mawatha, Colombo"
                        info="At Virtusa, I primarily focus on front-end development using Angular However, 
I often work closely with the design team to ensure that the user interfaces we create 
are not only visually appealing but also functional and user-friendly. My experience with 
Figma allows me to contribute directly to the UI/UX process by creating prototypes and user
 flows. I make sure that the designs I work on translate into responsive, accessible, and 
 efficient code, which provides a seamless experience for users."


                    />
                    <Details

                        type=" Associate Engineer UI/UX " company="Virtusa"
                        companyLink="www.virtusa.com"
                        time="2022-Present" place="752 Dr Danister De Silva Mawatha, Colombo"
                        info="At Virtusa, I primarily focus on front-end development using Angular However, 
I often work closely with the design team to ensure that the user interfaces we create 
are not only visually appealing but also functional and user-friendly. My experience with 
Figma allows me to contribute directly to the UI/UX process by creating prototypes and user
 flows. I make sure that the designs I work on translate into responsive, accessible, and 
 efficient code, which provides a seamless experience for users."


                    />
                </ul>
            </div>
        </div>
    )
}

export default Education