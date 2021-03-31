import React, {useState, useEffect} from 'react'
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton
} from "react-share";

export default function Share(props) {

    const [url, seturl] = useState("")

    useEffect(() => {
        seturl(window && window.location.href)
    }, [])

    return (
        <div style={{display:'flex'}}>
            <div className="px-1">
             <FacebookShareButton 
                url={url}
                quote={props.title}
                hashtag="#bleedinginks">
                 <FacebookIcon size={36} round={true}/>
              </FacebookShareButton>
            </div>
            <div className="px-1">
              <LinkedinShareButton 
                url={url}
                title={props.title}
                source={url}>
                 <LinkedinIcon size={36} round={true}/>
              </LinkedinShareButton>
            </div>
            {/* <div className="px-1">
              <TwitterShareButton 
                url={url}
                title={props.title}
                via={"LOGO"}>
                 <TwitterIcon size={36} round={true}/>
              </TwitterShareButton>
            </div> */}
            <div className="px-1">
              <WhatsappShareButton 
                url={url}
                title={props.title}
                separator={" "}>
                 <WhatsappIcon size={36} round={true}/>
              </WhatsappShareButton>
            </div>
        </div>
    )
}
