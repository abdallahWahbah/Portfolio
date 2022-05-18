import React from 'react'

import ReactDOM from 'react-dom'
import {AiOutlineClose} from 'react-icons/ai'

const PortalBackground = ({onClose}) =>
{
    return(
        <div className='popup__background' onClick={onClose}>
            <div className='popup__close--button'>
                <AiOutlineClose/>
            </div>
        </div>
    )
}
const PortalContainer = ({videoURL, type}) =>
{
    return (
        <div className='popup__content'>
            <PortalContent videoURL={videoURL} type={type}/>
        </div>
    )
}

const PortalContent = ({type, videoURL}) =>
{
    return (
        <React.Fragment>
            {type === "video" ? (
                <iframe
                    src={videoURL}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="video" 
                />
            ) : (
                <div className='popup__message'>
                    <h5 className='popup__message--title'>Done!</h5>
                    <p className='main__paragraph'>Your message is successfully sent</p>
                </div>
            )}
        </React.Fragment>
    )
}

const PopUp = ({videoURL, onClose, type}) => 
{
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<PortalBackground onClose={onClose}/>, document.querySelector(".portal__background"))}
            {ReactDOM.createPortal(<PortalContainer videoURL={videoURL} type={type}/>, document.querySelector(".portal__content"))}
        </React.Fragment>
    )
}

export default PopUp