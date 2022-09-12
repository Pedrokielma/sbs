import React from 'react'

import ServiceCard from './Components/ServiceCard'
import { TbReportSearch } from 'react-icons/tb'
import { FaRegNewspaper} from 'react-icons/fa'
import { RiHandCoinLine } from 'react-icons/ri'


import './Services.scss'

const cardContent = {
    consulting: ['Google Business Profile', 'Online Presence', 'Customer Communication', 'Copyrighting', 'Blog Articles', 'Content strategy'],
    optimization: ['Website Design, Development and Management', 'Graphic Design', 'Search Engine Optimization', 'User Experience Design'],
    management: ['Scheduling & Appts', 'Customer Relationship Management', 'Customer Communication', 'Reputation management', 'Social Media']
}

function Services() {
  return (
    <div className='services'>
    <h2>What We Do</h2>
    <div className='card-section'>
    <ServiceCard 
        title='Small Business Consulting'
        content={cardContent.consulting}
        Icon={FaRegNewspaper}
    />
    <ServiceCard 
        title='Website build & optimization'
        content={cardContent.optimization}
        Icon={TbReportSearch}
    />
    <ServiceCard 
        title='customer relationship management'
        content={cardContent.management}
        Icon={RiHandCoinLine}
    />

    </div>
    </div>
  )
}

export default Services
