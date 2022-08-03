import React from 'react'

import ReactDOM from 'react-dom'
import {AiOutlineClose} from 'react-icons/ai'

const PortalBackground = ({onClose}) =>
{
    return(
        <div className='popup__background' onClick={onClose}></div>
    )
}
const PortalContainer = ({videoURL, type, messageData, onClose}) =>
{
    return (
        <div className='popup__content'>
            <div className='popup__content--back'>
                
                {type === "video" && ( // video
                    <div className='popup__close--button' onClick={onClose}>
                        <AiOutlineClose/>
                    </div>
                )}
                {type === "video" && ( // video
                    <iframe
                        src={videoURL}
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title="video" 
                    />
                )}

                {/* {type === "message" && (
                    <div className='popup__close--button popup__ok--text' onClick={onClose}>
                        ok
                    </div>
                )} */}
                {type === "message" && ( // message
                    <div className='popup__message'>
                        <h5 className='popup__message--title'>{messageData.title}</h5>
                        <div className={`popup__message--box ${messageData.title === "Failed!" ? "failed" : "seccessed"}`}>
                            <p className={`main__paragraph`}>{messageData.content}</p>
                            <button className='popup__message--button' onClick={onClose}>Ok</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

const PopUp = ({videoURL, onClose, type, messageData}) => 
{
    // CSS files: components/popup
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<PortalBackground onClose={onClose} />, document.querySelector(".portal__background"))}
            {ReactDOM.createPortal(<PortalContainer 
                                        videoURL={videoURL} 
                                        type={type}
                                        onClose={onClose} 
                                        messageData={messageData}/>, 
                                        document.querySelector(".portal__content"))}
        </React.Fragment>
    )
}

export default PopUp