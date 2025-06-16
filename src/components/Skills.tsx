import React from 'react'
import RecoilImage from '../../public/image/stack/RecoilImage.png'
import ArgoCD from '../../public/image/stack/1_Argo_CD.webp'
import Image from 'next/image'



export default function Skills() {

    return(
        <main className=' bg-neutral-950 text-white py-10 sm:py-10 md:px-20'>
            <div className='container flex flex-col gap-7'>
                <h2 className='text-xl sm:text-2xl font-bold'>Skills ⚒️</h2>

                <section className='grid grid-cols-2 sm:grid-cols-10 grid-rows-7 gap-3'>

                    <div className='p-2 sm:col-span-2 sm:row-span-1 border-2 bg-white/90 text-gray-700 rounded-lg font-bold flex gap-2 items-center justify-center hover:cursor-pointer hover:bg-black hover:text-white hover:border-whiteS'>
                        <img src="https://skillicons.dev/icons?i=linux" alt="x-social" className='w-10'  /> 
                        <span className='text-xl'>Linux</span> 
                    </div>
                    
                    <div className='p-2 sm:col-span-2 sm:row-span-1 border-2 bg-white/90 text-gray-700 rounded-lg font-bold flex gap-4 items-center justify-center hover:cursor-pointer hover:bg-[#333333] hover:border-whiteS hover:text-white'>
                        <img src="https://skillicons.dev/icons?i=jenkins" alt="x-social" className='w-10'  /> 
                        <span className='text-xl'>Jenkins</span>
                    </div>

                    <div className='p-2 col-span-2 sm:col-span-2 sm:row-span-3  border-2 bg-white/90 text-gray-700 rounded-lg font-bold flex gap-2 items-center justify-center hover:cursor-pointer hover:bg-sky-600 hover:text-white hover:border-sky-600'>
                        <img src="https://skillicons.dev/icons?i=kubernetes" alt="x-social" className='w-10'  /> 
                        <span className='text-xl'>Kubernetes</span>     
                    </div>
                    
                    <div className='p-2 col-span-2 sm:col-span-4 sm:row-span-3 border-2 bg-white/90 text-gray-700 rounded-lg font-bold flex gap-2 items-center justify-center hover:cursor-pointer hover:bg-black hover:text-white'>
                        <img src="https://skillicons.dev/icons?i=aws" alt="x-social" className='w-10'  /> 
                        <span className='text-xl'>AWS</span>      
                    </div>

                    <div className='p-2 sm:col-span-2 sm:row-span-1 border-2 bg-white/90 text-gray-700 rounded-lg font-bold flex gap-2 items-center justify-center hover:cursor-pointer hover:bg-violet-900 hover:text-white hover:border-violet-900'>
                         <img src="https://skillicons.dev/icons?i=terraform" alt="x-social" className='w-10'  /> 
                        <span className='text-xl'>Terraform</span>  
                    </div>

                    <div className='p-2 sm:col-span-2 sm:row-span-1 border-2 bg-white/90 text-gray-700 rounded-lg font-bold flex gap-2 items-center justify-center hover:cursor-pointer hover:bg-red-700 hover:text-white hover:border-red-700'>
                        <img src="https://skillicons.dev/icons?i=ansible" alt='skills-redux' className=' w-10'  /> 
                        <span className='text-xl'>Ansible</span>      

                    </div>

                    <div className='p-2 sm:col-span-4 sm:row-span-1  border-2 bg-white/90 text-gray-700 rounded-lg font-bold flex gap-2 items-center justify-center hover:cursor-pointer hover:bg-sky-600 hover:text-white hover:border-sky-600'>
                        <img src="https://skillicons.dev/icons?i=docker" alt="x-social" className='w-10'  /> 
                        <span className='text-xl'>Docker</span>     
                    </div>

                    <div className='p-2 sm:col-span-3 sm:row-span-1  border-2 bg-white/90 text-gray-700 rounded-lg font-bold flex gap-2 items-center justify-center hover:cursor-pointer hover:bg-yellow-500 hover:text-white hover:border-yellow-500'>
                        <img src="https://skillicons.dev/icons?i=py" alt="x-social" className='w-10'  /> 
                        <span className='text-xl'>Python</span>    
                    </div>

                    <div className='p-2 sm:col-span-2 sm:row-span-1 border-2 bg-white/90 text-gray-700 rounded-lg font-bold flex gap-2 items-center justify-center hover:cursor-pointer hover:bg-red-600 hover:text-white hover:border-red-600'>
                        <img src="https://skillicons.dev/icons?i=prometheus" alt="x-social" className='w-10'  /> 
                        <span className='text-xl'>Prometheus</span>    
                    </div>


                    <div className='p-2 sm:col-span-2 sm:row-span-1 border-2 bg-white/90 text-gray-700 rounded-lg font-bold flex gap-2 items-center justify-center hover:cursor-pointer hover:bg-sky-700 hover:text-white hover:border-sky-700'>
                        <img src="https://skillicons.dev/icons?i=grafana" alt="x-social" className='w-10'  /> 
                        <span className='text-xl'>Grafana</span>   
                    </div>

                    <div className='p-2 sm:col-span-3 sm:row-span-1 border-2 bg-white/90 text-gray-700 rounded-lg font-bold flex gap-2 items-center justify-center hover:cursor-pointer hover:bg-green-600 hover:text-white hover:border-green-600'> 
                          <Image src={RecoilImage} width={400} height={100} alt='skills-recoil' className=' w-24'  /> 
                        <span className='text-xl'></span>     
                    </div>

                    <div className='p-2 sm:col-span-2 sm:row-span-1 border-2 bg-white/90 text-gray-700 rounded-lg font-bold flex gap-2 items-center justify-center hover:cursor-pointer hover:bg-black hover:text-white'>
                        <img src="https://skillicons.dev/icons?i=bash" alt="x-social" className='w-10'  /> 
                        <span className='text-xl'>Bash</span>        
                    </div>

                   <div className='p-2 sm:col-span-2 sm:row-span-1 border-2 bg-white/90 text-gray-700 rounded-lg font-bold flex gap-2 items-center justify-center hover:cursor-pointer hover:bg-blue-400 hover:text-white hover:border-blue-400'>
                         <Image src={ArgoCD} width={400} height={100} alt='skills-recoil' className=' w-24'  /> 
                        <span className='text-xl'></span>      
                    </div>

                    <div className='p-2 sm:col-span-2 sm:row-span-1  border-2 bg-white/90 text-gray-700 rounded-lg font-bold flex gap-2 items-center justify-center hover:cursor-pointer hover:bg-orange-600 hover:text-white hover:border-orange-600'>
                        <img src="https://skillicons.dev/icons?i=git" alt="x-social" className='w-10'  /> 
                        <span className='text-xl'>Git</span>        
                    </div>

                    <div className='p-2 sm:col-span-2 sm:row-span-1 border-2 bg-white/90 text-gray-700 rounded-lg font-bold flex gap-2 items-center justify-center hover:cursor-pointer hover:bg-black hover:text-white '>
                        <img src="https://skillicons.dev/icons?i=github" alt="x-social" className='w-10'  /> 
                        <span className='text-xl'>GitHub</span>      
                    </div>

                    <div className='p-2 col-span-2 sm:col-span-2 sm:row-span-1 border-2 bg-white/90 text-gray-700 rounded-lg font-bold flex gap-2 items-center justify-center hover:cursor-pointer hover:bg-black hover:text-white '>
                        <img src="https://skillicons.dev/icons?i=githubactions" alt="x-social" className='w-10'  /> 
                        <span className='text-xl'>GitHubActions</span>      
                    </div>

                </section>

            </div>
        </main>
    )
}
