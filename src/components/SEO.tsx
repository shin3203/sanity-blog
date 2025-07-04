import { useEffect } from 'react'

interface SEOProps {
  title: string
  description?: string
  image?: string
  url?: string
}

export default function SEO({ title, description, image, url }: SEOProps) {
  useEffect(() => {
    document.title = `${title} | My Blog`
    
    // Update meta tags
    const metaTags = [
      { name: 'description', content: description || 'Welcome to our blog' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description || 'Welcome to our blog' },
      { property: 'og:image', content: image || '/default-og-image.jpg' },
      { property: 'og:url', content: url || window.location.href },
      { property: 'og:type', content: 'article' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description || 'Welcome to our blog' },
      { name: 'twitter:image', content: image || '/default-og-image.jpg' },
    ]
    
    metaTags.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`
      let element = document.querySelector(selector)
      
      if (!element) {
        element = document.createElement('meta')
        if (name) element.setAttribute('name', name)
        if (property) element.setAttribute('property', property)
        document.head.appendChild(element)
      }
      
      element.setAttribute('content', content)
    })
    
    return () => {
      document.title = 'My Blog'
    }
  }, [title, description, image, url])
  
  return null
}