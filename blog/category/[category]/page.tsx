import { getBlogPostsByCategory, categories } from '@/app/data/blog';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "")) || "https://www.beathinkr.com";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = categories.find(cat => cat.slug === params.category);
  
  if (!category) {
    return {
      title: 'Category Not Found | Hive of Thinkrs',
    };
  }

  return {
    title: `${category.name} Articles | Hive of Thinkrs Blog`,
    description: `Read all articles in the ${category.name} category. ${category.description}`,
    openGraph: {
      title: `${category.name} Articles | Hive of Thinkrs Blog`,
      description: category.description,
      url: `${SITE_URL}/blog/category/${params.category}`,
    },
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories.find(cat => cat.slug === params.category);
  const posts = getBlogPostsByCategory(params.category);

  if (!category) {
    notFound();
  }

  const categoryJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/blog/category/${params.category}#category`,
    "name": `${category.name} Articles`,
    "description": category.description,
    "url": `${SITE_URL}/blog/category/${params.category}`,
    "isPartOf": {
      "@type": "Blog",
      "@id": `${SITE_URL}/blog#blog`
    },
    "breadcrumb": {
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
          "name": category.name,
          "item": `${SITE_URL}/blog/category/${params.category}`
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(categoryJsonLd) }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        {/* Breadcrumb */}
        <nav className="bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 py-4">
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
                <span className="text-gray-900 font-medium">{category.name}</span>
              </li>
            </ol>
          </div>
        </nav>

        {/* Category Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{category.name}</h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              {category.description}
            </p>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">No articles yet</h2>
              <p className="text-gray-600 mb-8">
                We haven't published any articles in this category yet. Check back soon!
              </p>
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
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative w-full h-48">
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3 text-sm text-gray-600">
                      <time dateTime={post.publishDate}>
                        {new Date(post.publishDate).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
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
                        {post.tags.slice(0, 2).map((tag) => (
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
                </article>
              ))}
            </div>
          )}

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
        </div>
      </div>
    </>
  );
}
