"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from 'next/image';
import  {BsFillMoonStarsFill} from "react-icons/bs";
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from "react-icons/ai";
import { BiLogoGmail, BiLogoDiscordAlt } from "react-icons/bi";
import myself from '../public/image/pngwing.com.png';
import design from "../public/design/design.png";
import coding from "../public/design/code.png";
import web1 from "../public/web/web1.png";
import web2 from "../public/web/web2.png";
import web3 from "../public/web/web3.png";
import web4 from "../public/web/web4.png";





export default function Home() {
  const [darkMode, setDarkMode] = useState(false);


  return (
   <div className={darkMode ? "dark" : ""}>
    <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gradient-to-t from-gray-900 to-gray-600'>
      <div>
        <title>Milos Durutovic Portfolio</title>
        <meta name='description' content='portfolio'/>
        <link rel="icon" href="../public/favicon/favicon.ico"/>
      </div>

      <section className='min-h-screen'>
        <nav className='py-10 mb-12 flex justify-between'>
          <motion.h1 initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{duration: 0.5,delay: 0.2,ease: [0, 0.71, 0.2, 1.01]}} className='text-xl text-teal-600 font-medium dark:text-teal-500 font-concrete'>Developed by Milos</motion.h1>
          <ul className='flex flex-row'>
            <li><motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl"/></motion.button></li>
          </ul>
        </nav>
        <div className='text-center p-10'>
          <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl font-concrete'>Milos Durutovic</h2>
          <h3 className='text-2xl py-2 md:text-3xl dark:text-slate-900 font-concrete'>Full-Stack Developer</h3>
          <p className='text-lg py-5 leading-8 text-gray-800 md:text-xl max-w-6xl mx-auto dark:text-slate-900 font-signika'>As a versatile and creative freelancer, I am thrilled to offer my expertise in the dynamic world of digital marketing. With a diverse background in Coding and App Development, I bring a fresh perspective to every project I undertake. Get in touch today, and lets create something extraordinary together!</p>
        </div>
        <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 '>
          <Image src={myself} layout='fill' objectFit='cover' quality={100} alt=""/>
        </div>
      </section>


      <section>
        <div>
          <h3 className='text-3xl py-1 font-concrete'>Services I offer</h3>
          <p className='text-lg py-2 leading-8 text-gray-800 dark:text-gray-900 font-signika'>Since the beginng of my jurney as a freelance Full-Stack Developer, I have worked for <span className='text-teal-500'>agencies</span> consulted for <span className='text-teal-500'>startups</span> and colaborated with talented people to create digital products for private for both buisness and consumer use.</p>
          <p className='text-lg py-2 leading-8 text-gray-800 dark:text-slate-900 font-signika'>I offer wide range of services including <span className='text-teal-500'>Front-End</span>, <span className='text-teal-500'>Back-End</span> and <span className='text-teal-500'>Blockchain</span> programming.</p>
        </div>
        <div className='lg:flex gap-10'>
          <div className='text-center shadow-2xl p-10 rounded-xl my-10'>
            <motion.div whileHover={{ scale: [null, 1.5, 1.4] }} transition={{ duration: 0.3 }}>
              <Image src={design} width={150} height={150} quality={100} className='relative mx-auto' alt=""/>
            </motion.div>
            <h3 className='text-2xl font-medium pt-8 pb-2 font-concrete'>Beautiful Designs</h3>
            <p className='py-2 font-signika'>Creating elegant and modern designs suited for your needs following core design theory</p>
            <h4 className='text-lg py-4 text-teal-500 font-signika'>Tools that I use</h4>
            <p className='text-gray-600 py-1 dark:text-slate-900 font-concrete'>Photoshop</p>
            <p className='text-gray-600 py-1 dark:text-slate-900 font-concrete'>Illustrator</p>
            <p className='text-gray-600 py-1 dark:text-slate-900 font-concrete'>Figma</p>
          </div>
          <div className='text-center shadow-2xl p-10 rounded-xl my-10'>
            <motion.div whileHover={{ scale: [null, 1.5, 1.4] }} transition={{ duration: 0.3 }}>
              <Image src={coding} width={150} height={150} quality={100} className='relative mx-auto' alt=""/>
            </motion.div>
            <h3 className='text-2xl font-medium pt-8 pb-2 font-concrete'>Coding</h3>
            <p className='py-2 font-signika'>Building modern websites with the latest tools</p>
            <h4 className='text-lg py-4 text-teal-500 font-signika'>Tools that I use</h4>
            <p className='text-gray-600 py-1 dark:text-slate-900 font-concrete'>React.js</p>
            <p className='text-gray-600 py-1 dark:text-slate-900 font-concrete'>Node.js</p>
            <p className='text-gray-600 py-1 dark:text-slate-900 font-concrete'>MongoDB</p>
            <p className='text-gray-600 py-1 dark:text-slate-900 font-concrete'>Web3 Development</p>
            <p className='text-gray-600 py-1 dark:text-slate-900 font-concrete'>Blockchain technology</p>
            <p className='text-gray-600 py-1 dark:text-slate-900 font-concrete'>Token contract development</p>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h3 className='text-4xl py-2 leading-8 font-concrete '>Portfolio</h3>
          <p className='text-lg py-2 leading-8 text-gray-600 dark:text-gray-500 font-signika' >I am a highly skilled and motivated Full Stack Developer with a passion for creating innovative and efficient web applications. With a strong background in both front-end and back-end development, I thrive in dynamic and collaborative environments where I can apply my technical expertise to solve complex challenges. My goal is to deliver robust and user-friendly solutions that exceed client expectations.</p>
        </div>
        <div className='flex flex-col gap-10 py-10 shadow-2xl rounded-xl lg:flex-row lg:flex-wrap'>
          <div className='basis-1/3 flex-1'>
            <Image src={web1} className='rounded-lg object-cover' layout='responsive' alt=""/>
          </div>
          <div className='basis-1/3 flex-1'>
            <Image src={web2} className='rounded-lg object-cover' layout='responsive' alt=""/>
          </div>
          <div className='basis-1/3 flex-1'>
            <Image src={web3} className='rounded-lg object-cover' layout='responsive' alt=""/>
          </div>
          <div className='basis-1/3 flex-1'>
            <Image src={web4} className='rounded-lg object-cover' layout='responsive' alt=""/>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </main>
    </div>
  )
};



export function Footer() {
  const router = useRouter()
  var date = new Date().toLocaleDateString("en-US", {
    "year": "numeric",
    "month": "numeric"
  });

  return(
    <footer>
      <div className='flex justify-center text-6xl text-gray-800 gap-20 py-20 dark:text-gray-500'>
        <motion.div whileHover={{ scale: [null, 1.5, 1.4] }} transition={{ duration: 0.3 }}><button onClick={() => router.push('https://github.com/Lelx')} ><AiFillGithub /></button></motion.div>
        <motion.div whileHover={{ scale: [null, 1.5, 1.4] }} transition={{ duration: 0.3 }}><button onClick={() => router.push('https://discord.com/channels/@me')} ><BiLogoDiscordAlt /></button></motion.div>
      </div>
      <p className='text-center text-md py-5 font-concrete dark:text-gray-500'>&copy;All rights reserverd {date}</p>
    </footer>
  )
}




