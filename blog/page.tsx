import { getBlogPosts, getRecentPosts, categories } from '@/app/data/blog';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "")) || "https://www.beathinkr.com";

export const metadata: Metadata = {
  title: 'STEM Education Blog | Hive of Thinkrs Miami',
  description: 'Expert insights on STEM education, coding for kids, robotics, and educational technology. Discover tips, resources, and success stories from Miami\'s premier STEM education center.',
  keywords: ['STEM education blog', 'coding for kids Miami', 'robotics education', 'math enrichment', 'educational technology'],
  openGraph: {
    title: 'STEM Education Blog | Hive of Thinkrs Miami',
    description: 'Expert insights on STEM education, coding for kids, robotics, and educational technology.',
    url: `${SITE_URL}/blog`,
    images: [
      {
        url: `${SITE_URL}/opengraph-image.jpeg`,
        width: 1200,
        height: 630,
        alt: 'Hive of Thinkrs STEM Education Blog',
      },
    ],
  },
};

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${SITE_URL}/blog#blog`,
  "name": "Hive of Thinkrs STEM Education Blog",
  "description": "Expert insights on STEM education, coding for kids, robotics, and educational technology",
  "url": `${SITE_URL}/blog`,
  "publisher": {
    "@id": `${SITE_URL}#organization`
  },
  "inLanguage": "en-US",
  "isPartOf": {
    "@id": `${SITE_URL}#website`
  }
};

export default function BlogPage() {
  const posts = getBlogPosts();
  const recentPosts = getRecentPosts(3);

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">STEM Education Blog</h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Expert insights, tips, and resources for parents and educators
            </p>
            <p className="text-lg text-purple-200 max-w-2xl mx-auto">
              Discover the latest in STEM education, coding for kids, robotics, and educational technology from Miami's premier learning center.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Latest Articles</h2>
                <div className="space-y-8">
                  {posts.map((post) => (
                    <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <Image
                            src={post.featuredImage}
                            alt={post.title}
                            width={400}
                            height={250}
                            className="w-full h-48 md:h-full object-cover"
                          />
                        </div>
                        <div className="p-6 md:w-2/3">
                          <div className="flex items-center mb-3 text-sm text-gray-600">
                            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium mr-3">
                              {post.category}
                            </span>
                            <time dateTime={post.publishDate}>
                              {new Date(post.publishDate).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                              })}
                            </time>
                          </div>
                          
                          <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-purple-600 transition-colors">
                            <Link href={`/blog/${post.slug}`}>
                              {post.title}
                            </Link>
                          </h3>
                          
                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                              {post.tags.slice(0, 3).map((tag) => (
                                <span key={tag} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                                  #{tag}
                                </span>
                              ))}
                            </div>
                            
                            <Link 
                              href={`/blog/${post.slug}`}
                              className="text-purple-600 hover:text-purple-800 font-medium text-sm flex items-center group"
                            >
                              Read More
                              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Recent Posts */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="border-b border-gray-200 pb-4 last:border-0">
                      <h4 className="font-semibold text-gray-900 mb-2 hover:text-purple-600 transition-colors">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h4>
                      <p className="text-sm text-gray-600">
                        {new Date(post.publishDate).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/blog/category/${category.slug}`}
                      className="block text-gray-700 hover:text-purple-600 transition-colors py-2 px-3 rounded hover:bg-purple-50"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
                <p className="text-purple-100 mb-4">
                  Get the latest STEM education insights delivered to your inbox.
                </p>
                <Link 
                  href="/contact"
                  className="inline-block bg-white text-purple-600 font-semibold px-4 py-2 rounded hover:bg-gray-100 transition-colors"
                >
                  Subscribe Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
