import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import Link from 'next/link'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  category
}) {
  return (
    <section>
      {/* <div className="mb-4 md:mb-16">
        <CoverImage slug={slug} imageObject={coverImage} title={title} url={coverImage} />
      </div>
      <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-10 md:mb-28">
        <div>
          <h3 className="mb-4 text-3xl lg:text-6xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <span style={{cursor:'pointer'}} className="hover:underline">{title}</span>
            </Link>
          </h3>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <Avatar name={author?.name} picture={author?.picture} dateString={date}/>
        </div>
      </div> */}
      <div className="d-flex swssss">
          <div className="cover-img">
          <CoverImage from="hero" slug={slug} imageObject={coverImage} title={title} url={coverImage} />
          </div>
          <div className="cnthsis">
              <div className="catweb">
                <div>{category && category.map((e,index)=><span key={index} className="catgry">{index!==0 && ","}{e}</span>)}</div>
                <div className="dateSys">&nbsp;-&nbsp;<Date dateString={date} /></div>
              </div>
              <div className="hero-title">
                <Link as={`/posts/${slug}`} href="/posts/[slug]">
                  <span style={{cursor:'pointer'}} className="hover:underline">{title}</span>
                </Link>
              </div>
              <div className="catmob">
                <div>{category && category.map((e,index)=><span key={index} className="catgry">{index!==0 && ","}{e}</span>)}</div>
                <div className="dateSys">&nbsp;-&nbsp;<Date dateString={date} /></div>
              </div>
              <div>
                  <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
                  <Avatar name={author?.name} picture={author?.picture} dateString={date}/>
              </div>
          </div>
      </div>
    </section>
  )
}
