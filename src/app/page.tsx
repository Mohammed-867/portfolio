'use client'

import Hero from "@/components/Hero"
import { WavyBackground } from "@/components/ui/wavy-background";
import About from "@/components/About"
import Slider from "@/components/Slider";
import Skills from "@/components/Skills";
import { Timeline } from "@/components/ui/timeline";
import { experience } from '../data/data'
import Projects from "@/components/Projects";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IoDocumentText } from "react-icons/io5";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
export default function Home() {

  const dock = [
    {

      title : "Resume",
      icon: <IoDocumentText className="h-full w-full text-neutral-700" />,
      href: 'https://drive.google.com/file/d/1oByX8pswBBpz7ZX3BiUFLYsClbNZCVXy/view?usp=sharing'
    },
    {
    title : "Mail",
    icon: <FiMail className="h-full w-full text-neutral-700"  />,
    href: 'mailto:mohdalinabil87@gmail.com'
  },
  {
  title : "github",
  icon: <FaGithub className="h-full w-full text-neutral-700"   />,
  href: 'https://github.com/Mohammed-867'
},
{

title : "Linkedin",
    icon: <FaLinkedin className="h-full w-full text-neutral-700" />,
    href: 'https://www.linkedin.com/in/mohammed-ali-nabil/'
  },
]

  return (
    <>
      <div className="fixed flex justify-center items-end w-[100vw] z-20 h-auto bottom-0 py-5">
        <FloatingDock items={dock} desktopClassName='bg-gray-900/90' />
      </div>
      <WavyBackground  >
        <Hero />
      </WavyBackground>
      <Slider />
      <About />
      <Skills />
      <Timeline data={experience} />
      <Projects />
    </>
  );
}
