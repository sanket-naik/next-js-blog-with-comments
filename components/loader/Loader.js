import React from 'react'

export default function Loader(props) {
    return (
        <div className="d-flex Loader">
            <img id="loadingL" src="https://res.cloudinary.com/dlmozkbdc/image/upload/v1616682625/SkillSchool/loadingIcon-removebg-preview_yasaa4.png"/>
            <div className="loadertxt">&nbsp;{props.children}</div>
        </div>
    )
}
