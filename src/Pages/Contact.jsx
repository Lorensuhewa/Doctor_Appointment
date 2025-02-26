import React from 'react'
import contactImg from '../assets/contact_img.png'

const Contact = () => {
  return (
    <div>
      <div>
        <h1 className='my-10 text-3xl font-bold text-center'>Contact US</h1>
      </div>
      <div className='flex flex-row justify-center gap-4 my-10'>
        <div>
          <img src={contactImg} className=' h-[600px] pl-10  ' />
        </div>
        <div className='pl-3 mx-4 text-lg'>
          <h2 className='mb-5 text-2xl font-bold'>Our OFFICE</h2>
          <p>54709 Wills Station <br />
          Suite 350, Washington, USA</p>
          <p className='mt-5'>Tel: (415) 5550132</p>
          <p>Email: greatstackdev@gmail.com</p>
          <h2 className='my-5 text-xl font-bold'>Careers at DocPoint</h2>
          <p>Learn more about our teams and job openings.</p>
          <div className='flex items-center justify-center gap-4 '>
          <button className='relative flex px-3 py-4 m-5 my-5 border border-blue-600 rounded-full'>Explore Jobs</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
