import React from 'react'

const Skills = ({skills}) => 
{
    return (
        // css file: layout/skills
        <ul className='skills__list'>
            {skills?.map(skill => (
                <li key={skill.title} className="skill__item">
                    <div className='skill__list--item'>
                        {/* <h5 className='skill__title'>{skill.title}</h5>
                        <div className='skill__percentage--container'>
                            <h6 className='skill__percentage'>{`${skill.percentage}%`}</h6>
                            <div className='skill__line'>
                                <span className='skill__line--background'/>
                                <span className='skill__line--above' style={{width: `${skill.percentage}%`}}/>
                            </div>
                        </div> */}

                        {/* <img className='skill__image' src={skill.image} alt={skill.title}/>  */}
                    
                        <div className='skill__icon--container'>
                            {skill.icon && (skill.icon)}
                        </div>
                        <div className='skill__data--container'>
                            <h4 className='skill__name'>{skill.title}</h4>
                            <span className='skill__level'>{skill.level}</span>
                        </div>
                    </div>
                </li>

            ))}
        </ul>
    )
}

export default Skills