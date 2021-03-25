import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from './cover-image'
import Link from 'next/link'
import {imageBuilder} from '../lib/sanity'
export default function PostPreview({ 
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  category
}) {
  return (
    <div className="card">
      <div className="mb-2">
        <CoverImage slug={slug} title={title} imageObject={coverImage} url={imageBuilder(coverImage).url()} />
      </div>
      <div className="catweb">
        <div>{category && category.map((e,index)=><span className="catgry">{index!==0 && ","}{e}</span>)}</div>
        <div className="dateSys">&nbsp;-&nbsp;<Date dateString={date} /></div>
      </div>
      <h3 className="text-3xl mb-3 leading-snug cardHeader">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <span style={{cursor:'pointer'}} className="hover:underline">{title}</span>
        </Link>
      </h3>
      <div className="catmob mb-3">
        <div>{category && category.map((e,index)=><span className="catgry">{index!==0 && ","}{e}</span>)}</div>
        <div className="dateSys">&nbsp;-&nbsp;<Date dateString={date} /></div>
      </div>
      <Avatar className="avtrCard" name={author?.name} picture={author?.picture} dateString={date} />
    </div>
  )
}
