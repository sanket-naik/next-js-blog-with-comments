import React, {useEffect} from 'react'

export default function ScrollLoader() {

    useEffect(() => {
        function progressBarScroll() {
            let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
                height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
                scrolled = (winScroll / height) * 100;
            let pb=document.getElementById("progressBar")
            if(pb && pb.style){
                pb.style.width = scrolled + "%";
            }
          }
          
          window.onscroll = function () {
            progressBarScroll();
          };
    }, [])

    return (
        <div className="scrollHead">
            <div className="header">
                <div className="progress-container">
                    <div className="progress-bar" id="progressBar"></div>
                </div>
            </div>
        </div>
    )
}
