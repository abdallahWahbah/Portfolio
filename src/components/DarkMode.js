import React, {useState} from 'react'
import {MdOutlineLightMode} from 'react-icons/md';
import {MdDarkMode} from 'react-icons/md'

const DarkMode = () => 
{
    const [mode, setMode] = useState("dark");

    const toggle = () =>
    {
        if(mode === "dark")
        {
            document.body.classList.add("light")
            setMode("light")
        } 
        else 
        {
            document.body.classList.remove("light")
            setMode("dark")
        }
    }
    return (
        // CSS file: base/base(body),  components/mode_button
        <div className='darkmode__container'>
            {mode === "dark" ? (
                <MdOutlineLightMode onClick={toggle} className="light__icon" />
            ) : (
                <MdDarkMode onClick={toggle} className="dark__icon" />
            )}
        </div>
    )
}

export default DarkMode