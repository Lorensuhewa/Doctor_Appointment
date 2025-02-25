import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../Context/AppContext'
import { useParams } from 'react-router-dom'

const Appointment = () => {

  const {docID} = useParams()
  const {doctors} = useContext(AppContext)

  const [docInfo, setDocInfo] = useState(null)

  
  const fetchDocInfo = async() => {
    const docInfo = doctors.find((doc) => doc._id === docID)
    setDocInfo(docInfo)
    console.log(docInfo)
  }

  useEffect(()=>{
    fetchDocInfo()
  },[doctors, docID])

  return docInfo && (
    <div>
      {/* Doctor details*/}
      <div>
        <div>
          <img src={docInfo.image} alt="" />
        </div>
        <div>
          <h1>{docInfo.name}</h1>
          <h2>{docInfo.specialization}</h2>
          <h3>Experience: {docInfo.experience} years</h3>
        </div>
      </div>
    </div>
  )
}

export default Appointment
