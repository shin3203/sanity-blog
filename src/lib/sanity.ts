import { createClient } from '@sanity/client'

// Debug: Log environment variables
console.log('Sanity Config:', {
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  env: import.meta.env
})

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'your-project-id',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: false, // Disable CDN to get fresh content
  apiVersion: '2024-01-01',
})

export interface BlogPost {
  _id: string
  _type: 'post'
  title: string
  slug: {
    current: string
  }
  author: {
    name: string
    image?: {
      asset: {
        url: string
      }
    }
  }
  mainImage?: {
    asset: {
      url: string
    }
    alt?: string
  }
  categories?: Array<{
    title: string
  }>
  publishedAt: string
  body: any[]
  excerpt?: string
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  console.log('Fetching blog posts...')
  try {
    const posts = await client.fetch(`
      *[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        author->{
          name,
          image{
            asset->{
              url
            }
          }
        },
        mainImage{
          asset->{
            url
          },
          alt
        },
        categories[]->{
          title
        },
        publishedAt,
        excerpt
      }
    `)
    console.log('Fetched posts:', posts)
    return posts
  } catch (error) {
    console.error('Error fetching posts:', error)
    throw error
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost> {
  return client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      author->{
        name,
        image{
          asset->{
            url
          }
        }
      },
      mainImage{
        asset->{
          url
        },
        alt
      },
      categories[]->{
        title
      },
      publishedAt,
      body,
      excerpt
    }
  `, { slug })
}