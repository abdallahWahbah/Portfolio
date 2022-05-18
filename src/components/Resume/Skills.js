import React from 'react'

const Skills = ({skills}) => 
{
    return (
        // css file: layout/skills
        <ul className='skills__list'>
            {skills?.map(skill => (
                <li key={skill.title} className="skill__item">
                    <h5 className='skill__title'>{skill.title}</h5>
                    <div className='skill__percentage--container'>
                        <h6 className='skill__percentage'>{`${skill.percentage}%`}</h6>
                        <div className='skill__line'>
                            <span className='skill__line--background'/>
                            <span className='skill__line--above' style={{width: `${skill.percentage}%`}}/>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default Skills