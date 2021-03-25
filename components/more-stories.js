import PostPreview from '../components/post-preview'

export default function MoreStories({ posts, category }) {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 md:col-gap-16 lg:col-gap-16 row-gap-10 md:row-gap-4 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            category={category}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
