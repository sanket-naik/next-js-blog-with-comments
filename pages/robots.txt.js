import React, { Component } from "react";

export default class Robots extends Component {
    static getInitialProps({ res }) {
        res.setHeader("Content-Type", "text/plain");
        res.write(`User-agent: *
Allow: /*
Disallow: /api/*

Sitemap: https://bleedinginks.com/sitemap.xml`);
        res.end();
    }
}

// import React, { Component } from "react";
// import fetch from 'isomorphic-unfetch';

// export default class SiteMap extends Component {
//     static async getInitialProps({req, res}) {
//         if(res) {
//             const response = await fetch(`http://${req.headers['host']}/api/sitemap`);
//             const text = await response.text();
//             res.setHeader("Content-Type", "text/xml");
//             res.write(text);
//             res.end();
//         }

//     }
// }