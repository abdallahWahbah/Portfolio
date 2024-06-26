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
                            {/* <h6 className='timeline__item--description'>{item.description.split('\n').map(str => <p key={str}>{str}</p>)}</h6> */}
                            {item.description.head && (
                                <h6 className='timeline__item--description-common'>{item.description.head}</h6>  
                            )}
                              
                            {item.description.list.map(listItem => (
                                <div className='timeline__item--description-listContainer' key={listItem}>
                                    <span className='timeline__item--description-common timeline__item--description-dash'>-</span>
                                    <span className=' timeline__item--description-common'>
                                        {listItem}
                                    </span> 
                                </div>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Timeline