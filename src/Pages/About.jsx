import React from 'react'
import AboutImg from '../assets/about_img.png'

const About = () => {
  return (
    <div>
      <div className='my-10 text-3xl font-bold text-center'>
        <h1> About US</h1>
      </div>
      <div className='flex flex-row gap-4 my-10 '>
        {/*----------------- Left section --------------------------*/}
        
        <div className='flex items-center justify-center w-full md:w-1/2 sm:w-1/12'>
          <img src={AboutImg}  />
        </div>

        {/*----------------- Right section --------------------------*/}
        
        <div className='pl-3 mx-4 text-lg '>
          <p className='mb-4 text-justify'>
          Welcome to DocPoint, your trusted partner in managing your healthcare needs conveniently and efficiently. At DocPoint, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
          </p>
          <p className='mb-4 text-justify'>
          DocPoint is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you are booking your first appointment or managing ongoing care, DocPoint is here to support you every step of the way.
          </p>
          <h2 className='mb-3 text-xl font-semibold'>Our Vision</h2>
          <p className='mb-4 text-justify' >Our vision at DocPoint is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>
      <div className='py-10 my-10 text-2xl font-bold'>
        <h1>Why CHOOSE US</h1>
      </div>
      <div className='flex flex-row justify-around p-5 text-lg border'>
        <div className='flex-1 px-4'>
          <h2 className='mb-2 font-semibold uppercase text xl'>Efficiency:</h2>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border-l border-gray-300'></div>
        <div className='flex-1 px-4'>
          <h2 className='mb-2 font-semibold uppercase text xl'>Convenience:</h2>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border-l border-gray-300'></div>
        <div className='flex-1 px-4'>
          <h2 className='mb-2 font-semibold uppercase text xl'>Personalization:</h2>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </div>
  )
}

export default About
