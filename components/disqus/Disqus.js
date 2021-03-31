import React, { useEffect } from 'react'

export default function Disqus({slug}) {

    useEffect(() => {
        LoadComments()
      }, [slug])

    const LoadComments=()=>{
        window.disqus_config = function () {
        this.page.url = window.location.href;  // Replace PAGE_URL with your page's canonical URL variable
        this.page.identifier = slug; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
        }
        const script= document.createElement('script');
        script.src= "https://https-next-js-blog-with-comment-seven-vercel-app.disqus.com/embed.js"
        script.setAttribute('data-timestamp', +Date.now().toString());
        document.body.appendChild(script)
    }

    return (
        <div>
            <div id="disqus_thread"></div>
        </div>
    )
}
