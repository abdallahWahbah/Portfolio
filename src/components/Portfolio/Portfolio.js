import React from 'react'

import Header from '../Header';
import Project from './Project';

const Portfolio = () => 
{
    return (
        //css files: page/home,
        <div className='portfolio'>
            <Header title="Portfolios"/>
                
            <Project />
        </div>
    )
}

export default Portfolio