import { getBlogPost, getRecentPosts } from '@/app/data/blog';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "")) || "https://www.beathinkr.com";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | Hive of Thinkrs',
    };
  }

  return {
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt,
    keywords: post.seo?.keywords || post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${post.slug}`,
      images: [
        {
          url: `${SITE_URL}${post.featuredImage}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: 'article',
      publishedTime: post.publishDate,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [`${SITE_URL}${post.featuredImage}`],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);
  const recentPosts = getRecentPosts(3);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${SITE_URL}/blog/${post.slug}#article`,
    "headline": post.title,
    "description": post.excerpt,
    "image": `${SITE_URL}${post.featuredImage}`,
    "datePublished": post.publishDate,
    "dateModified": post.publishDate,
    "author": {
      "@type": "Organization",
      "name": post.author,
      "url": SITE_URL
    },
    "publisher": {
      "@id": `${SITE_URL}#organization`
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`
    },
    "articleSection": post.category,
    "keywords": post.tags.join(", "),
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "Blog",
      "@id": `${SITE_URL}/blog#blog`
    }
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_URL
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${SITE_URL}/blog`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `${SITE_URL}/blog/${post.slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        {/* Breadcrumb */}
        <nav className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-purple-600 transition-colors">
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link href="/blog" className="hover:text-purple-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-gray-900 font-medium">{post.title}</span>
              </li>
            </ol>
          </div>
        </nav>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto px-4 py-12">
          <header className="mb-8">
            <div className="flex items-center mb-4 text-sm text-gray-600">
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium mr-3">
                {post.category}
              </span>
              <time dateTime={post.publishDate} className="mr-4">
                {new Date(post.publishDate).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </time>
              <span>By {post.author}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Featured Image */}
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span key={tag} className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div 
              className="text-gray-800 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
            />
          </div>

          {/* Newsletter CTA */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 mt-12 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Want More STEM Education Insights?</h2>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest articles, tips, and resources on STEM education, coding, and educational technology.
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Subscribe to Newsletter
            </Link>
          </div>

          {/* Related Posts */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Recent Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentPosts
                .filter(recentPost => recentPost.id !== post.id)
                .slice(0, 3)
                .map((recentPost) => (
                  <article key={recentPost.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="relative w-full h-48">
                      <Image
                        src={recentPost.featuredImage}
                        alt={recentPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="text-sm text-gray-600 mb-2">
                        {new Date(recentPost.publishDate).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2 hover:text-purple-600 transition-colors">
                        <Link href={`/blog/${recentPost.slug}`}>
                          {recentPost.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {recentPost.excerpt}
                      </p>
                    </div>
                  </article>
                ))}
            </div>
          </section>

          {/* Back to Blog */}
          <div className="mt-12 text-center">
            <Link 
              href="/blog"
              className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
