import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { GraphQLClient,gql } from 'graphql-request';
import BlogCard from '../components/BlogCard';

const graphcms = new GraphQLClient('https://api-ap-south-1.hygraph.com/v2/cl7lxui9o1jgx01uk56oia9x6/master')

const QUERY = gql `
{
  posts {
    id ,
    title ,
    datePublished ,
    slug ,
    content {
      html
    },
    coverPhoto {
      url
    } ,
    author {
      name
      avatar {
        url
      },
    }
    
  }
}
` ;

export async function getStaticProps () {
  const {posts} = await graphcms.request(QUERY) ;
  return{
    props: {
      posts, 
    } ,
    revalidate : 10 , 
  }
}


export default function Home({posts}) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {posts.map((post) =>(
          <BlogCard title= {post.title} author = {post.author} coverPhoto = {post.coverPhoto} key={post.id} datePublised = {post.datePublised} slug= {post.slug} />
        ))}
      </main>
    </div>
  )
}
