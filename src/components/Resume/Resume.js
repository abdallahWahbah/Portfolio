import React from 'react'
import Header from '../Header'

import { skills } from '../JsonData'
import { workTimeline, educationTimeline } from '../JsonData'
import Skills from './Skills'
import Timeline from './Timeline'

const Resume = () => 
{
    return (
        //css files: page/home, base/typography, layouts/skills, components/timeline
        <div className='resume'>

            <Header title="My Skills"/>
            <Skills skills={skills}/>

            <Header title="Resume"/>
            <Timeline workTimeline={workTimeline}/>
            
            <Timeline workTimeline={educationTimeline}/>
            
        </div>
    )
}

export default Resume