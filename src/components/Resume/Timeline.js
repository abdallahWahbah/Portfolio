import React from 'react'

const Timeline = ({workTimeline}) => 
{
    return (
        // css file: components/timeline
        <div className='timeline'>
            <div className='timeline__header--container'>
                <div className='timeline__item--icon'>
                    {workTimeline.icon}
                </div>
                <h2 className='timeline__header'>{workTimeline.header}</h2>
            </div>
            <ul className='timeline__list'>
                {workTimeline.data.map(item => (
                    <li className='timeline__item' key={item.role}>
                        <div className='timeline__item--date'>{item.date}</div>
                        <div className='timeline__item--details'>
                            <h2 className='timeline__item--role'>{item.role}</h2>
                            <h4 className='timeline__item--company'>{item.company}</h4>
                            <h6 className='timeline__item--description'>{item.description}</h6>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Timeline