import React, {useEffect} from 'react'

export default function ScrollLoader() {

    useEffect(() => {
        function progressBarScroll() {
            let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
                height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
                scrolled = (winScroll / height) * 100;
            document.getElementById("progressBar").style.width = scrolled + "%";
          }
          
          window.onscroll = function () {
            progressBarScroll();
          };
    }, [])

    return (
        <div className="scrollHead">
            <div class="header">
                <div class="progress-container">
                    <div class="progress-bar" id="progressBar"></div>
                </div>
            </div>
        </div>
    )
}
