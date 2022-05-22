import React, {useState} from 'react'
import {MdOutlineLightMode} from 'react-icons/md';
import {MdDarkMode} from 'react-icons/md'

const DarkMode = () => 
{
    const [mode, setMode] = useState("light");

    const toggle = () =>
    {
        if(mode === "light")
        {
            document.body.classList.add("dark")
            setMode("dark")
        } 
        else 
        {
            document.body.classList.remove("dark")
            setMode("light")
        }
    }
    return (
        <div className='darkmode__container'>
            {mode === "light" ? (
                <MdOutlineLightMode onClick={toggle} className="light__icon" />
            ) : (
                <MdDarkMode onClick={toggle} className="dark__icon" />
            )}
        </div>
    )
}

export default DarkMode