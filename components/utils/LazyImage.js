
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
 
const LazyImage = ({ src, alt, style, height, width, className, onClick }) => (
    <LazyLoadImage
      src={src}
      alt={alt?alt:'img'}
      style={{height:height, width:width, ...style}}
      wrapperProps={{border:'1px solid red'}}
      className={className}
      onClick={onClick}
      effect="blur"
    />
);
 
export default LazyImage