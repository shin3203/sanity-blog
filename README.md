# Sanity Blog Site - ULTRA AI Theme

A modern blog site built with React, TypeScript, and Tailwind CSS, integrated with Sanity CMS.

## 🌀 Current Theme: ULTRA AI (Updated: 2025-01-07)
- ブラックホール効果で吸い込まれる体験
- 3Dパースペクティブグリッド
- 量子パーティクルアニメーション
- ネオンライトニングエフェクト
- ホログラフィックUI

## Features

- ✅ Blog post list page with grid layout
- ✅ Individual blog post pages with rich content
- ✅ Responsive design for all screen sizes
- ✅ SEO optimization with dynamic meta tags
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Sanity integration for content management

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure Sanity:
   - Create a `.env` file based on `.env.example`
   - Add your Sanity project ID and dataset name:
   ```
   VITE_SANITY_PROJECT_ID=your-project-id
   VITE_SANITY_DATASET=production
   ```

3. Set up Sanity Studio:
   - Create a new Sanity project or use an existing one
   - Use the schemas provided in `sanity-schema.js` for your content types
   - The schemas include: Blog Post, Author, and Category

4. Run the development server:
```bash
npm run dev
```

## Project Structure

```
src/
├── components/
│   ├── BlogList.tsx      # Blog post listing page
│   ├── BlogPost.tsx      # Individual blog post page
│   └── SEO.tsx          # SEO component for meta tags
├── lib/
│   └── sanity.ts        # Sanity client configuration and queries
├── App.tsx              # Main app component with routing
├── index.css            # Tailwind CSS imports
└── main.tsx             # App entry point
```

## Sanity Schema

The blog requires the following content types in your Sanity Studio:

- **Post**: Blog posts with title, slug, author, main image, categories, publish date, excerpt, and body content
- **Author**: Author information with name, slug, image, and bio
- **Category**: Categories for organizing posts

## Customization

- Update the blog title in `App.tsx`
- Modify the color scheme and styling using Tailwind classes
- Adjust the grid layout in `BlogList.tsx`
- Customize the SEO component for additional meta tags

## Build

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.