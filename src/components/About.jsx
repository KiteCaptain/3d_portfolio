/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React from 'react';

import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { sectionWrapper } from '../hoc';
import ServiceCard  from './ServiceCard';


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus aut hic temporibus maiores aspernatur. Eligendi, nisi numquam ut harum error eveniet vel facere aut natus adipisci? Tempora repellat eius voluptatibus?
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default sectionWrapper(About, "about")