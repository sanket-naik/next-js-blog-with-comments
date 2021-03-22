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
}) {
  return (
    <section>
      <div className="mb-4 md:mb-16">
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
      </div>
    </section>
  )
}
