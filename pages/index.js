import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome, getCategory } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import { findCategory } from '../components/utils/utils'

export default function Index({ allPosts, preview, allCategories }) {
  const heroPost = allPosts[0] 
  const morePosts = allPosts.slice(1)
  return ( 
    <> 
      <Layout preview={preview}>
        <Intro /> 
        <Container>
          {heroPost && allCategories && (
            <HeroPost
              title={heroPost.title}
              category={findCategory(allCategories, heroPost.categories)}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} category={findCategory(allCategories, heroPost.categories)} />}
        </Container>
         
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  const allCategories = await getCategory()
  return {
    props: { allPosts, preview, allCategories },
    revalidate: 1
  }
}
