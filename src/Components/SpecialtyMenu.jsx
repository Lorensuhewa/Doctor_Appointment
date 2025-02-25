import React from 'react'
import { specialtyData } from './Reusable_Components/DoctorList'
import { Link } from 'react-router-dom'

function SpecialtyMenu() {
  return (
    <div id='specialty' className='flex flex-col items-center gap-4 py-16 text-gray-800 '>
        <h1 className='text-3xl font-medium'>Find by Specialty </h1>
        <p className='sm:w-1/3 text-center text-sm'> Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free. </p>
        <div className='flex gap-4 pt-5 sm:justify-center w-full overflow-scroll'>
            {specialtyData.data.map((item,index) => (
                    <Link onClick={()=> scrollTo(0,0)} className='flex flex-col items-center text-xs border border-blue-500 cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/doctors/${item.name}`}>
                        <img className='w-16 sm:w-24 mb-2 ' src={item.img} alt="" />
                        <h3>{item.name}</h3>
                        <p className='sm:w-1/10 text-center text-sm'>{item.description}</p>

                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default SpecialtyMenu