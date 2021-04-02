import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import MoreStories from '../../components/more-stories'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Comments from '../../components/comments'
import SectionSeparator from '../../components/section-separator'
import Layout from '../../components/layout'
import { getAllPostsWithSlug, getPostAndMorePosts, getCategory } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import Form from '../../components/form'
import Intro from '../../components/intro'
import { useEffect, useState } from 'react'
import Disqus from '../../components/disqus/Disqus'
import Meta from '../../components/meta'
import Loader from '../../components/loader/Loader'
import ScrollLoader from '../../components/scrollLoader/ScrollLoader'

export default function Post({ post, morePosts, preview, categories:allCategories }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
        <Intro />
        <ScrollLoader/>
     
        {router.isFallback ? (
          <Loader>Loading…</Loader>
        ) : (
          <>
        <Container>
            <article>
              <Meta
                  title={post.title}
                  url={`https://bleedinginks.com/posts/${post.slug}`}
                  image={post.coverImage}
                />
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.body} />
            </article>
        </Container>

        <div className="disqusMargin">
          <Container>
            <Disqus slug={post.slug}/>
          </Container>
        </div>

        <Container>
          {morePosts.length > 0 && <MoreStories posts={morePosts} allCategories={allCategories} />}
        </Container>
          </>
        )}
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview)
  const categories = await getCategory()
  return {
    props: {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || null,
      categories
    },
    revalidate: 1
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug, 
        },
      })) || [],
    fallback: true,
  }
}
