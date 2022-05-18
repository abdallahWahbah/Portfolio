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
const PortalContainer = ({videoURL, type, messageData}) =>
{
    return (
        <div className='popup__content'>
            {type === "video" && (
                <iframe
                    src={videoURL}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="video" 
                />
            )}
            {type === "message" && (
                <div className='popup__message'>
                    <h5 className='popup__message--title'>{messageData.title}</h5>
                    <p className='main__paragraph'>{messageData.content}</p>
                </div>
            )}
        </div>
    )
}

const PopUp = ({videoURL, onClose, type, messageData}) => 
{
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<PortalBackground onClose={onClose}/>, document.querySelector(".portal__background"))}
            {ReactDOM.createPortal(<PortalContainer 
                                        videoURL={videoURL} 
                                        type={type} 
                                        messageData={messageData}/>, 
                                        document.querySelector(".portal__content"))}
        </React.Fragment>
    )
}

export default PopUp