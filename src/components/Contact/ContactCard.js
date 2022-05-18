import React from 'react'

const ContactCard = ({cards}) => 
{
    return (
        <React.Fragment>
            {cards.map(card => (
                <div className='card' key={card.title}>
                    <div className='card__icon'>
                        {card.icon}
                    </div>
                    <div className='card__details'>
                        <h3 className='card__title'>{card.title}</h3>
                        <div className='card__links'>
                            {card?.data?.map(item => (
                                <a 
                                    className={`card__link ${item.type === "address" ? "card__link--nohover" : ""}`}
                                    href={item.href} 
                                    target="_blank" 
                                    rel='noreferrer' 
                                    key={item.linkTitle}
                                >
                                    {item.linkTitle}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </React.Fragment>
    )
}

export default ContactCard