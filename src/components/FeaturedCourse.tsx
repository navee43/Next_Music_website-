'use client'
import React from 'react'
import courseData from '../data/music_courses.json'
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient'


interface Course{

        id: number,
        title: string,
        slug: string,
        description:string,
        price: number,
        instructor: string,
        isFeatured: boolean,
       image:string
}
function FeaturedCourse() {
   const FeaturedCourse = courseData.courses.filter((course:Course)=>course.isFeatured==true)

  return (
    <div className='py-12 bg-gray-900'>
        <div className=' text-center space-y-5'>
          <p className='capitalize  text-base text-teal-600 font-semibold tracking-wide'>featured courses</p>
          <h1 className='capitalize text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn with the best</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center '>
          {
            FeaturedCourse.map((course:Course , index)=>(
              <div className='flex justify-center items-center pt-10 mx-10' key={index}>

                 <BackgroundGradient className='flex flex-col rounded-[22px]
                 bg-white dark:bg-zinc-900 overflow-hidden h-full max-2-sm'>
                  <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
                    <p className='text-lg sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200'>{course.title}</p>
                    <p className='text-white'>{course.description}</p>
                    <Link className='text-white' href={`/courses/${course.slug}`}>
                    Learn More</Link>
                  </div>
                  
                 </BackgroundGradient>
              </div>
            ))

          }
        </div>
        <div className='mt-20 text-center'>
          <Link href={"/courses"} className='px-4 py-2 rounded border
          border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100
          transition duration-200'>
          view All courses
          </Link>

        </div>
        
        
        
        
        
        </div>
  )
}

export default FeaturedCourse