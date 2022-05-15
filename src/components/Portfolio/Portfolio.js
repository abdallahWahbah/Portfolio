import React from 'react'

import Header from '../Header';
import Project from './Project';
import { projects } from '../JsonData';

const Portfolio = () => 
{
    return (
        //css files: page/home, components/project, components/video
        <div className='portfolio'>
            <Header title="Portfolios"/>

            <div className='project__container'>
                {projects.map(item => (
                    <Project 
                        key={item.title}
                        poster={item.poster}
                        videoURL={item.videoURL}
                        liveURL={item.liveURL}
                        githubURL={item.githubURL}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default Portfolio