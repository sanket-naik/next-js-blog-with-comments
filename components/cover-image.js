import cn from 'classnames'
import Link from 'next/link'
import { imageBuilder } from '../lib/sanity'
import LazyImage from './utils/LazyImage'

export default function CoverImage({ title, url, imageObject, slug, from }) {
  const image = (
    <LazyImage 
      // width={1240}
      // height={540}
      alt={`Cover Image for ${title}`}
      className={`${from=="hero" && "heropst"}`}
      src={imageBuilder(imageObject).width(1240).height(540).url()}
    />
  )

  return (
    <div className="-mx-5 sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <span style={{cursor:'pointer'}} aria-label={title}>{image}</span>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
