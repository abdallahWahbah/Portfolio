import React from 'react'

import Header from '../Header'
import { contactData } from '../JsonData'
import ContactCard from './ContactCard'
import ContactForm from './ContactForm'

const Contact = () => 
{
    return (
        //css files: page/home, base/typography, components/card
        <div className='contact'>
            <Header title="Contact Me"/>

            <div className='contact__container'>
                <div className='cards'>
                    <ContactCard cards={contactData}/>
                </div>
                
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact