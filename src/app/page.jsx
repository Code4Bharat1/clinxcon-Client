import AboutUsHome from '@/component/home/about/page'
import MedicalBanner from '@/component/home/medical/medical'
import MissionVision from '@/component/home/ourvision/page.jsx'
import TestimonialsSection from '@/component/home/Testimonials/page'
import WhyClinxcon from '@/component/home/whychoose/page'
import React from 'react'

const page = () => {
  return (
    <div>
      < MedicalBanner/>
      < WhyClinxcon/>
       <MissionVision/>
        {/* <AboutUsHome/> */}
      <TestimonialsSection/>
      
    </div>
  )
  
}

export default page