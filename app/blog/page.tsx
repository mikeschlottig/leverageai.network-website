import { PageLayout } from "@/components/page-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | LeverageAI Insights",
  description: "Expert insights on AI infrastructure, data analytics, and business automation. Real stories from Oregon businesses transforming with AI.",
  keywords: "AI blog, data analytics insights, AI infrastructure, business automation, Oregon AI solutions",
  openGraph: {
    type: "website",
    url: "https://leverageai.network/blog",
    title: "AI Infrastructure & Analytics Blog | LeverageAI",
    description: "Expert insights on AI infrastructure, data analytics, and business automation. Real stories from Oregon businesses transforming with AI.",
    images: [
      {
        url: "/images/og/blog-homepage.jpg",
        width: 1200,
        height: 630,
        alt: "LeverageAI Blog"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Infrastructure & Analytics Blog | LeverageAI",
    description: "Expert insights on AI infrastructure, data analytics, and business automation.",
    images: ["/images/og/blog-homepage.jpg"]
  },
  alternates: {
    canonical: "https://leverageai.network/blog"
  }
}

const blogPosts = [
  {
    slug: "when-dashboards-lie",
    title: "When Dashboards Lie: A Data Engineer's Confession",
    description: "How a property management CFO discovered their $100k monitoring system was watching the wrong signals—and what we rebuilt using 3D dependency mapping.",
    publishedAt: "2025-01-15T08:00:00-08:00",
    readTime: "5 min read",
    category: "Data Analytics",
    featured: true
  },
  {
    slug: "missed-call-cost",
    title: "The $47,000 Voicemail: What One Missed Call Cost a Law Firm",
    description: "A Portland personal injury case lost to voicemail at 6:47 PM—and how AI phone systems are capturing revenue law firms didn't know they were losing.",
    publishedAt: "2025-01-15T09:00:00-08:00",
    readTime: "4 min read",
    category: "AI Communications",
    featured: true
  },
  {
    slug: "sales-pipeline-ghost",
    title: "The Three-Month Ghost: When Sales Pipeline Becomes Sales Theater",
    description: "How a sales director's $3.2M pipeline was 67% dead deals—and how AI lead scoring transformed ghost opportunities into a 34% close rate.",
    publishedAt: "2025-01-15T10:00:00-08:00",
    readTime: "6 min read",
    category: "Sales & Marketing",
    featured: true
  }
]

export default function BlogPage() {
  return (
    <PageLayout currentPage="Blog">
      <main>
        <section className="bg-gray-50 dark:bg-gray-800 py-20">
          <div className="container mx-auto px-6 text-center">
            <p className="font-mono text-blue-600 dark:text-blue-400">Expert Insights</p>
            <h1 className="text-4xl md:text-6xl font-black mt-2 text-blue-900 dark:text-blue-100">
              AI & Analytics Blog
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Real stories from Oregon businesses transforming their operations with AI infrastructure,
              data analytics, and intelligent automation.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Card key={post.slug} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                      {post.featured && (
                        <Badge className="text-xs bg-blue-600">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="group-hover:text-blue-600 transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <span>{new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  )
}