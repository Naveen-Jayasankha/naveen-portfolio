import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'



const Details = ({type, time, place}) => {
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
          
        </motion.div>
    </li>
    );
}

const Certifications = () => {
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
            Certifications
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative'>

                <motion.div 
                style={{scaleY:scrollYProgress}}
                className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'  />

                

                <ul className="w-full flex flex-col items-start justify-between ml-4">
                    <Details

                        type="AWS Essentials"
                        time="2024" 
                        place="AWS"
                        


                    />
                    <Details

                        type="  Angular - The Complete Guide (2024 Edition)"
                        time="2024" 
                        place="Udemy"
                        


                    />
                    <Details

                        type="Test Automation Foundations"
                        time="2024" 
                        place="Udemy"
                        


                    />
                    <Details

                        type="Azure DevOps Fundamentals for Beginners"
                        time="2024" 
                        place="Udemy"
                        


                    />
                    <Details

                        type="   DevOps CI/CD for Beginners"
                        time="2024" 
                        place="Udemy"
                        


                    />
                    <Details

                        type="  Selenium Webdriver with Python From Scratch + Frameworks"
                        time="2024" 
                        place="Udemy"
                        


                    />
                    <Details

                        type="   OCI Generative AI Certification"
                        time="2023" 
                        place="Oracle"
                        


                    />
                    <Details

                        type="   CCNAv7: Introduction to Networks"
                        time="2021" 
                        place="Cisco Networking Academy"
                        


                    />
                    <Details

                        type="   Introduction to Cybersecurity"
                        time="2020" 
                        place="Cisco Networking Academy"
                        


                    />
                    

                    
                    
                    
                </ul>
            </div>
        </div>
    )
}

export default Certifications