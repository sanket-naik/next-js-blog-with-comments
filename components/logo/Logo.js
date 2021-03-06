import Link from 'next/link'
import React from 'react'

export default function Logo() {
    return (
            <div className="">
                 <Link href="/">
                  <img alt="logo" className="logostyle" src="https://res.cloudinary.com/dlmozkbdc/image/upload/v1616396429/SkillSchool/BleedingInkPng_bgtkeb.png"/>
                 </Link>
            </div>
        )
}
