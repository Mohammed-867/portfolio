import React from 'react'
import Image from 'next/image'

export default function About(){
    return(
        <main className='bg-neutral-950 py-20 pt-40 md:py-10 md:px-20'>
            <div className='container text-white py-10 flex flex-col gap-7'>
                <h2 className='text-xl sm:text-2xl font-bold'>About </h2>
                <div className='flex flex-col lg:flex-row justify-center gap-5 '>

                    <section className=' grid grid-col sm:w-1/2 gap-3 border-2 border-white/10 p-3 bg-white/10 rounded-lg '>
                        <Image src="/image/profile.jpeg" className='rounded-lg' alt="Stains" width={250} height={100} />   
                        <div className='flex flex-col gap-2'>
                            <h3 className='font-bold text-lg'>Hey again 👋</h3>
                            <p className='text-sm sm:text-base '>I&apos;m Nabil, a DevOps Engineer focused on infrastructure automation, CI/CD, and cloud operations. I make sure code gets from laptop to production reliably and securely. My focus is on scalability, automation, and security in cloud-native environments</p>
                        </div>
                        <div className='flex gap-3'>
                        <p className='flex gap-2'>
                            <span className='flex gap-1 items-center bg-white/20 text-sm rounded-md p-2'>
                                
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>

                                Bengaluru, India
                            </span>
                        </p>

                        <p className='flex gap-2'>
                            <span className='flex gap-1 items-center bg-white/20 text-sm rounded-md p-2'>
                                
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                            </svg>


                                
                            </span>
                        </p>

                        </div>
                    </section>

                    <section className=' flex flex-col sm:w-1/2 gap-5 '>
                        <div className='flex flex-col gap-2 border-2 border-white/10 p-3 rounded-lg bg-white/10 '>
                            <h3 className='font-bold text-lg'>A little bit more about me</h3>
                            <p className='text-sm sm:text-base  leading-6'>
                            I&apos;m MOHAMMED ALI NABIL, a 22-year-old aspiring DevOps Engineer with a strong foundation in Docker, Kubernetes, and modern CI/CD pipelines. As a fresher, I&apos;ve already built and deployed containerized apps, automated workflows, and worked with cloud environments. My current focus is mastering cloud-native DevOps—leveraging tools like Jenkins, Argo CD, GitHub Actions, and Terraform to streamline and scale infrastructure. I&apos;m passionate about automation, reliability, and contributing to real-world solutions.
                            <br />           
                            <br />
                            I&apos;m actively looking for opportunities to grow in the industry and contribute to meaningful projects. I&apos;m enthusiastic about learning from experienced teams, contributing to open-source DevOps tools, and building production-ready automation systems.
                            </p>
                        </div>

                        <div className='flex flex-col gap-3 border-2 border-white/10 p-3 rounded-lg bg-white/10 '>
                            <h3 className='font-bold text-lg'>Come and say hi!</h3>
                            <div className='flex gap-3'>   
                              <a href='https://x.com/Mohd_Ali_Nabil' target='_blank'> <img src="https://skillicons.dev/icons?i=twitter" alt="x-social" className='w-10'  /> </a> 
                                <a href='https://github.com/Mohammed-867' target='_blank'> <img src="https://skillicons.dev/icons?i=github" alt="github-social" className='w-10'  /> </a>
                                <a href='mailto:mohdalinabil87@gmail.com' target='_blank'> <img src="https://skillicons.dev/icons?i=gmail" alt="mailid" className='w-10'  /> </a>
                                <a href='https://www.linkedin.com/in/mohammed-ali-nabil/' target='_blank'> <img src="https://skillicons.dev/icons?i=linkedin" alt="linkedin-social" className='w-10'  /> </a>
                            </div>

                        </div>

                    </section>
                </div>
            </div>
        
        </main>
    )
}
