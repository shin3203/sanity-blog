# Sanity Content Debugging Guide

## Issue: Custom text styles not reflecting in the blog

### Steps to Debug:

1. **Access the Debug Page**
   - Navigate to `http://localhost:5173/debug` (or your dev server URL + `/debug`)
   - This page will show you:
     - Sanity configuration
     - Number of posts found
     - Raw body content from posts
     - Any custom styles detected

2. **Check Browser Console**
   - Open DevTools (F12 or right-click → Inspect)
   - Look for any JavaScript errors in the Console tab
   - Check for the Sanity configuration log that shows your project ID and dataset

3. **Monitor Network Requests**
   - In DevTools, go to Network tab
   - Filter by "Fetch/XHR"
   - Refresh the page
   - Look for requests to `api.sanity.io`
   - Click on the request and check the Response tab to see the actual data

4. **Verify Custom Styles in Sanity Studio**
   - In your Sanity Studio, check if the custom styles appear in the block editor:
     - Large Text
     - Extra Large Text
     - Small Text
   - If they don't appear, you need to update your schema (see below)

### Solutions:

#### 1. Update Sanity Schema
If the custom styles aren't showing in Sanity Studio:

```javascript
// In your Sanity Studio project, update the post schema:
{
  name: 'body',
  type: 'array',
  title: 'Body',
  of: [
    {
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
        // Add these custom styles:
        {title: 'Large Text', value: 'largeText'},
        {title: 'Extra Large Text', value: 'extraLargeText'},
        {title: 'Small Text', value: 'smallText'},
      ],
      // ... rest of the configuration
    }
  ]
}
```

After updating:
1. Deploy the schema changes to Sanity
2. Edit your blog posts and apply the new styles
3. Publish the changes

#### 2. Clear CDN Cache
The Sanity client has been updated to disable CDN (`useCdn: false`). This ensures you get fresh content. If you want to re-enable CDN later for performance:

```typescript
// In src/lib/sanity.ts
useCdn: true, // Change back to true once content is stable
```

#### 3. Verify Component Rendering
The BlogPost component already includes handlers for custom styles:

```typescript
// In src/components/BlogPost.tsx
block: {
  largeText: ({children}) => <p className="text-xl mb-4">{children}</p>,
  extraLargeText: ({children}) => <p className="text-2xl mb-4">{children}</p>,
  smallText: ({children}) => <p className="text-sm mb-4">{children}</p>,
}
```

### What to Look For in API Response:

When checking the Network tab, look for blocks with custom styles like:

```json
{
  "_type": "block",
  "style": "largeText",
  "children": [
    {
      "_type": "span",
      "text": "This is large text"
    }
  ]
}
```

### Common Issues:

1. **Styles not in schema**: The custom styles must be defined in Sanity Studio's schema
2. **Content not updated**: After adding styles to schema, you need to edit and republish content
3. **CDN caching**: Old content may be cached, disable CDN temporarily
4. **Wrong style values**: Ensure style values match exactly (case-sensitive)

### Testing Custom Styles:

1. Create a test post in Sanity Studio
2. Add blocks with each custom style
3. Publish the post
4. Visit the debug page to see raw data
5. Visit the actual blog post to see rendering