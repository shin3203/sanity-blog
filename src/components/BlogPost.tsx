import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { PortableText } from '@portabletext/react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getBlogPost, type BlogPost as BlogPostType } from '../lib/sanity'
import SEO from './SEO'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const [post, setPost] = useState<BlogPostType | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!slug) return

    async function fetchPost() {
      try {
        const data = await getBlogPost(slug!)
        setPost(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch post')
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [slug])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-red-600 mb-4">
          {error || 'Post not found'}
        </p>
        <Link to="/" className="text-blue-600 hover:underline">
          ← Back to blog
        </Link>
      </div>
    )
  }

  return (
    <>
      <SEO 
        title={post.title}
        description={post.excerpt || `Read ${post.title} on our blog`}
        image={post.mainImage?.asset.url}
        url={`${window.location.origin}/blog/${post.slug.current}`}
      />
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        <Link to="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-8 group">
          <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span>
          記事一覧に戻る
        </Link>

      {post.mainImage && (
        <img
          src={post.mainImage.asset.url}
          alt={post.mainImage.alt || post.title}
          className="w-full h-64 md:h-96 object-cover rounded-2xl mb-8 shadow-2xl"
        />
      )}

      <header className="mb-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{post.title}</h1>
        
        <div className="flex flex-wrap items-center gap-4 text-slate-300">
          <div className="flex items-center gap-2">
            {post.author.image && (
              <img
                src={post.author.image.asset.url}
                alt={post.author.name}
                className="w-10 h-10 rounded-full ring-2 ring-purple-500/50"
              />
            )}
            <span>{post.author.name}</span>
          </div>
          
          <time>
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          
          {post.categories && post.categories.length > 0 && (
            <div className="flex gap-2">
              {post.categories.map((category, idx) => (
                <span key={idx} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm">
                  {category.title}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      <div className="prose prose-lg prose-invert max-w-none prose-slate prose-headings:text-slate-100 prose-p:text-slate-200 prose-strong:text-slate-100 prose-blockquote:text-slate-300 prose-blockquote:border-slate-500">
        {post.bodyMarkdown ? (
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({children}) => <h1 className="text-4xl font-bold mb-6 mt-8 text-slate-100">{children}</h1>,
              h2: ({children}) => <h2 className="text-3xl font-bold mb-4 mt-6 text-slate-100">{children}</h2>,
              h3: ({children}) => <h3 className="text-2xl font-bold mb-3 mt-4 text-slate-100">{children}</h3>,
              h4: ({children}) => <h4 className="text-xl font-bold mb-2 mt-3 text-slate-100">{children}</h4>,
              p: ({children}) => {
                // childrenが文字列の場合の処理
                if (typeof children === 'string') {
                  // {large} で始まる段落は大きく
                  if (children.startsWith('{large}')) {
                    return <p className="mb-6 text-2xl leading-relaxed font-medium text-slate-200">{children.replace('{large}', '').trim()}</p>;
                  }
                  // {xlarge} で始まる段落はもっと大きく
                  if (children.startsWith('{xlarge}')) {
                    return <p className="mb-6 text-3xl leading-relaxed font-bold text-slate-100">{children.replace('{xlarge}', '').trim()}</p>;
                  }
                  // {small} で始まる段落は小さく
                  if (children.startsWith('{small}')) {
                    return <p className="mb-4 text-sm leading-relaxed text-slate-400">{children.replace('{small}', '').trim()}</p>;
                  }
                }
                
                // 配列の場合（複数の要素を含む段落）
                if (Array.isArray(children) && children.length > 0) {
                  const firstChild = children[0];
                  if (typeof firstChild === 'string') {
                    if (firstChild.startsWith('{large}')) {
                      children[0] = firstChild.replace('{large}', '').trim();
                      return <p className="mb-6 text-2xl leading-relaxed font-medium">{children}</p>;
                    }
                    if (firstChild.startsWith('{xlarge}')) {
                      children[0] = firstChild.replace('{xlarge}', '').trim();
                      return <p className="mb-6 text-3xl leading-relaxed font-bold">{children}</p>;
                    }
                    if (firstChild.startsWith('{small}')) {
                      children[0] = firstChild.replace('{small}', '').trim();
                      return <p className="mb-4 text-sm leading-relaxed text-gray-600">{children}</p>;
                    }
                  }
                }
                
                // 通常の段落
                return <p className="mb-4 text-lg leading-relaxed text-slate-200">{children}</p>;
              },
              ul: ({children}) => <ul className="list-disc list-inside mb-4 ml-4">{children}</ul>,
              ol: ({children}) => <ol className="list-decimal list-inside mb-4 ml-4">{children}</ol>,
              li: ({children}) => <li className="mb-2">{children}</li>,
              blockquote: ({children}) => (
                <blockquote className="border-l-4 border-slate-500 pl-4 italic mb-4 ml-2 text-slate-300">{children}</blockquote>
              ),
              code: ({children}: any) => {
                const isInline = !String(children).includes('\n');
                return isInline ? (
                  <code className="bg-slate-700 px-2 py-1 rounded text-sm text-slate-200">{children}</code>
                ) : (
                  <pre className="bg-slate-800 p-4 rounded-lg overflow-x-auto mb-4 border border-slate-700">
                    <code className="text-slate-200">{children}</code>
                  </pre>
                );
              },
              strong: ({children}) => <strong className="font-bold">{children}</strong>,
              em: ({children}) => <em className="italic">{children}</em>,
              hr: () => <hr className="my-8 border-gray-300" />,
              a: ({href, children}) => (
                <a href={href} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  {children}
                </a>
              ),
            }}
          >
            {post.bodyMarkdown}
          </ReactMarkdown>
        ) : (
          <PortableText 
            value={post.body}
            components={{
              types: {
                image: ({value}) => {
                  return (
                    <img
                      src={value.asset.url}
                      alt={value.alt || ''}
                      className="rounded-lg my-8"
                    />
                  )
                }
              },
              block: {
                normal: ({children}) => <p className="mb-4">{children}</p>,
                h1: ({children}) => <h1 className="text-4xl font-bold mb-4">{children}</h1>,
                h2: ({children}) => <h2 className="text-3xl font-bold mb-4">{children}</h2>,
                h3: ({children}) => <h3 className="text-2xl font-bold mb-4">{children}</h3>,
                h4: ({children}) => <h4 className="text-xl font-bold mb-4">{children}</h4>,
                blockquote: ({children}) => <blockquote className="border-l-4 border-gray-300 pl-4 italic mb-4">{children}</blockquote>,
                largeText: ({children}) => <p className="text-xl mb-4">{children}</p>,
                extraLargeText: ({children}) => <p className="text-2xl mb-4">{children}</p>,
                smallText: ({children}) => <p className="text-sm mb-4">{children}</p>,
              }
            }}
          />
        )}
      </div>
    </article>
    </>
  )
}