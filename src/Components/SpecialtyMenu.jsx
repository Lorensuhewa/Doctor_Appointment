import React from 'react'
import { specialtyData } from './Reusable_Components/DoctorList'
import { Link } from 'react-router-dom'

function SpecialtyMenu() {
  return (
    <div id='specialty' className='flex flex-col items-center gap-4 py-16 text-gray-800 '>
        <h1 className='text-3xl font-medium'>Find by Specialty </h1>
        <p className='text-sm text-center sm:w-1/3'> Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free. </p>
        <div className='flex w-full gap-5 pt-5 overflow-scroll sm:justify-center'>
            {specialtyData.data.map((item,index) => (
                    <Link onClick={()=> scrollTo(0,0)} className='flex flex-col items-center text-xs w-[250px] border rounded-full border-blue-500 cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/doctors/${item.name}`}>
                        <img className='w-16 p-1 mb-2 sm:w-24' src={item.img} alt="" />
                        <h3 className='p-2'>{item.name}</h3>
                        
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default SpecialtyMenu