import Head from 'next/head'
import {BsFillMoonStars, BsFillMoonStarsFill, BsHeartFill} from "react-icons/bs";
import {AiFillLinkedin, AiFillTwitterCircle, AiOutlineGithub, AiFillHtml5} from "react-icons/ai";
import {DiCss3, DiJsBadge, DiReact, DiNodejsSmall, DiMongodb, DiGit, DiGithubBadge, DiDart} from "react-icons/di";
import {SiExpress, SiCplusplus, SiJava, SiNextdotjs, SiPython, SiTailwindcss, SiRedux, SiCanva, SiFigma, SiFirebase} from "react-icons/si";
import Image from 'next/image';
import dil from "../public/sahil.png";
import { use, useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode? "dark" : ""}>
      <Head>
        <title> Dilsekh Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white dark:bg-gray-900'>
        <section className='px-10'>
          <nav className='py-10 flex justify-between'>
            <div onClick={() => window.open("https://linktr.ee/dilsekhpatnaik7")} className='text-xl font-mono flex cursor-pointer'>
              <h1 className='dark:text-teal-300'>developedBy</h1>
              <h1 className='text-red-800 dark:text-red-600'>Dilsekh</h1>
            </div>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:text-teal-100' /></li>
              <li><a href="Dilsekh Patnaik's Resume.pdf" className='bg-gray-800 px-4 text-white py-2 rounded-md ml-8 dark:bg-teal-300 dark:text-gray-900'>Resume</a></li> 
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 dark:text-teal-100'>Dilsekh Patnaik</h2>
            <h3 className='text-3xl py-2 text-gray-800 dark:text-teal-300'>Developer</h3>
            <p className='text-md py-3 leading-8 max-w-xl mx-auto dark:text-teal-300'>An eager learner proficient in MERN Stack and
armed with the required skill set to be propelled
to higher positions</p>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-800 rounded-full w-80 h-80 overflow-hidden'>
           <Image src={dil} alt="mypic" layout='fill' objectFit='cover' />
          </div>
        </section>

        <section>
          <div className='text-center mt-10'>
            <h3 className='text-4xl py-7 dark:text-teal-100'>Tech Stacks</h3>
          </div>
          <div className='text-5xl flex justify-center gap-16 text-gray-800 cursor-pointer dark:text-teal-300'>
            <div className='m-auto text-5xl grid grid-cols-5 gap-10 justify-items-center text-gray-800 dark:text-teal-300'>
            <SiCplusplus/>
            <SiJava/>
            <SiPython/>
            <AiFillHtml5/>
            <DiCss3/>
            <DiDart />
            <DiJsBadge/>
            <DiReact/>
            <SiRedux />
            <DiNodejsSmall/>
            <SiExpress/>
            <DiMongodb/>
            <SiFirebase />
            <SiTailwindcss/>
            <DiGit />
            <DiGithubBadge />
            <SiCanva />
            <SiFigma />
            </div>
          </div>
        </section>
        
        <section>
          <div className='py-20 mt-2 text-center dark:text-teal-100'>
            <div className='text-3xl'>
              <h1>Connect</h1>
            </div>
            <div className='text-center mx-40 text-2xl'>
              <div><h1>With Me</h1></div>
            </div>
            <div className='text-5xl mt-5 flex justify-center gap-16 text-gray-800 cursor-pointer dark:text-teal-300'>
             <AiFillLinkedin onClick={() => window.open("https://www.linkedin.com/in/dilsekhpatnaik7/")}/>
             <AiFillTwitterCircle onClick={() => window.open("https://twitter.com/dilsekhed")}/>
             <AiOutlineGithub onClick={() => window.open("https://github.com/dilsekhpatnaik7")}/>
          </div>
          <div className='text-center text-2xl mt-20 -mb-7 flex justify-center gap-5 dark:text-teal-100'>
            <h1>Made with</h1>
            <div className='text-3xl mt-1 text-red-700 dark:text-red-600'> <BsHeartFill /> </div>
            <h1>by Dilsekh</h1>
          </div>
          </div>
        </section>
      </main>
    </div>
  )
} 
