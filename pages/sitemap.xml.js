// export default (req, res) => {
//     // Fetch data from a CMS.
//     // const resp = await fetch('MOCK_URL');
//     // const externalPosts = [];
  
//     // const routes = externalPosts.map((post) => `/blog/${posts.slug}`);
//     // const localRoutes = ['/index', '/blog'];
  
//     // const pages = routes.concat(localRoutes);
  
//     // const urlSet = pages
//     //   .map((page) => {
//     //     // Remove none route related parts of filename.
//     //     const path = page
//     //       .replace('pages', '')
//     //       .replace('_content', '')
//     //       .replace(/(.tsx|.ts)/, '')
//     //       .replace('.mdx', '');
//     //     // Remove the word index from route
//     //     const route = path === '/index' ? '' : path;
//     //     // Build url portion of sitemap.xml
//     //     return `<url><loc>https://codebycorey.com${route}</loc></url>`;
//     //   })
//     //   .join('');
  
//     // Add urlSet to entire sitemap string
//     const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>`;
  
//     // set response content header to xml
//     res.setHeader('Content-Type', 'text/xml');
//     // write the sitemap
//     res.write(sitemap);
//     res.end();
//   };


import React, { Component } from "react";
import { getAllPostsWithSlug } from "../lib/api";

export default class Sitemap extends Component {
    static async getInitialProps({ res }) {


      const posts = await getAllPostsWithSlug()

      const routes = posts.map((post) => `/posts/${post.slug}`);
      const localRoutes = ['/'];
    
      const pages = routes.concat(localRoutes);
    
      const urlSet = pages
        .map((page) => {
          // Remove none route related parts of filename.
          const path = page
            .replace('pages', '')
            .replace('_content', '')
            .replace('.mdx', '');
          // Remove the word index from route
          const route = path === '/index' ? '' : path;
          // Build url portion of sitemap.xml
          return `<url><loc>https://bleedinginks.com${route}</loc></url>`;
        })
        .join('');

        console.log(urlSet)
        const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlSet}</urlset>`;
        res.setHeader('Content-Type', 'text/xml');
        res.write(sitemap);
        res.end();
    }
}
