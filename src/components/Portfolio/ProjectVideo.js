import React from 'react'

import ReactDOM from 'react-dom'
import {AiOutlineClose} from 'react-icons/ai'

const PortalBackground = ({onClose}) =>
{
    return(
        <div className='video__background' onClick={onClose}>
            <div className='video__close--button'>
                <AiOutlineClose/>
            </div>
        </div>
    )
}
const PortalContent = ({videoURL}) =>
{
    return (
        <div className='video__content'>
            <iframe
                src={videoURL}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
            />
        </div>
    )
}

const ProjectVideo = ({videoURL, onClose}) => 
{
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<PortalBackground onClose={onClose}/>, document.querySelector(".portal__background"))}
            {ReactDOM.createPortal(<PortalContent videoURL={videoURL} />, document.querySelector(".portal__content"))}
        </React.Fragment>
    )
}

export default ProjectVideo