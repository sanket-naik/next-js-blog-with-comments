import React from 'react'
import LazyImage from '../utils/LazyImage'

export default function Loader() {
    return (
        <div className="d-flex Loader">
            <img id="loadingL" src="https://res.cloudinary.com/dlmozkbdc/image/upload/v1616682625/SkillSchool/loadingIcon-removebg-preview_yasaa4.png"/>
            <div className="loadertxt">&nbsp;Loading...</div>
        </div>
    )
}
