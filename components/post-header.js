import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'
import {imageBuilder} from '../lib/sanity'
import Share from './share/Share'

export default function PostHeader(props) {

const { title, coverImage, date, author }=props

  return (
    <>
      <PostTitle>{title}</PostTitle> 
      <div className="hidden md:flex md:mb-12 avt">
        <div><Avatar name={author?.name} picture={author?.picture} dateString={date}/></div>
        <div className="my-auto" style={{marginLeft:'auto'}}><Share/></div>
      </div>
      <div className="mb-8 md:mb-16 -mx-1 sm:mx-0">
        <CoverImage title={title} imageObject={coverImage} url={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="flex md:hidden mb-6">
          <div><Avatar name={author?.name} picture={author?.picture} dateString={date}/></div>
          <div className="my-auto" style={{marginLeft:'auto'}}><Share data={props}/></div>
        </div>
        {/* <div className="mb-6 text-lg">
          <Date dateString={date} />
        </div> */}
      </div>
    </>
  )
}
