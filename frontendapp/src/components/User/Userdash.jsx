import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Appoinment from '../Appoinment/Appoinment'
import { UserCard } from './Usercard'
import './Userdash.css'; // Import CSS for styling

export default function Userdash() {
  const services = [
    {
      heading:'Skilled nursing',
      para : 'Much like countless enterprises today, our skilled nursing for home care senior service undergoes a transformative journey. Formerly reliant on conventional care models, our evolution reflects just a fraction of the narrative.'
    },
    {
      heading:'Personal Care',
      para : 'Similar to numerous entities today, our personal care for home-bound seniors undergoes a significant shift. Once rooted in conventional caregiving methods, our transition embodies only a portion of the unfolding narrative.'
    },
    {
      heading:'Medication management',
      para : 
      "Echoing the trajectory of many entities, our medication management service for home-based seniors undergoes a notable evolution. Formerly centered on traditional practices, our transformation captures just a segment of the unfolding narrative."
    },
    {
      heading:'Physical therapy',
      para : 
      "Reflecting the journey of numerous organizations, our physical therapy service for seniors receiving home care embarks on a significant transition. Formerly grounded in conventional approaches, our adaptation represents merely a portion of the broader narrative."
    },
    {
      heading:'Emergency Home Care',
      para : 'In sync with the evolution of countless organizations, our emergency home care service for seniors experiences a transformative shift. Once reliant on traditional models, our adaptation marks only a fraction of the unfolding narrative.'
    },
    {
      heading:'Companionship',
      para : 'Mirroring the journey of many organizations, our companionship service for seniors in home care undergoes a significant transformation. Previously anchored in conventional practices, our evolution represents just a slice of the unfolding narrative.'
    },

  ]
  return (
    <>
        <div className="user-card-container">
        {services.map((service, index) => (
          <UserCard key={index} heading={service.heading} para={service.para} />
        ))}
      </div>
      <Appoinment />
    </>
  )
}
