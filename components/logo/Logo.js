import Link from 'next/link'
import React from 'react'

export default function Logo() {
    return (
            <div className="">
                 <Link href="/">
                  <img alt="logo" className="logostyle" src="https://res.cloudinary.com/dlmozkbdc/image/upload/v1616350009/SkillSchool/bleedinginks_4_xpmtao.svg"/>
                 </Link>
            </div>
        )
}
