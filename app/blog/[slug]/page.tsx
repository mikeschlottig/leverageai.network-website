import { PageLayout } from "@/components/page-layout"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

// Blog post data with real content
const getPostBySlug = (slug: string) => {
  const posts: Record<string, any> = {
    "when-dashboards-lie": {
      title: "When Dashboards Lie: A Data Engineer's Confession",
      description: "How a property management CFO discovered their $100k monitoring system was watching the wrong signals—and what we rebuilt using 3D dependency mapping.",
      content: `
        <p>The property management firm's CFO showed me their dashboard at 2:47 PM on a Tuesday. Clean metrics. Green indicators. Everything supposedly humming along. "We're data-driven," she said, with the confidence of someone who'd invested six figures in the wrong solution.</p>

        <p>I asked her to open Cloudflare Analytics. The real-time view told a different story—their client portal was hemorrhaging requests, failing silently while Grafana reported smooth sailing. The monitoring they'd paid for was watching the wrong signals.</p>

        <p>This is the paradox of modern analytics: we're drowning in dashboards but starving for insight. I've seen it across industries now—Portland law firms billing by the hour but unable to forecast cash flow, health spas optimizing appointment schedules with spreadsheets, property managers tracking maintenance cycles in their heads because their "system" can't correlate the patterns.</p>

        <p>The breakthrough came when we rebuilt their stack with 3D dependency mapping. Not metaphorical 3D—actual spatial visualization of how every data pipeline, API endpoint, and database query connects. When you can see bottlenecks in three dimensions, they stop being mysterious. That stalled report generation? A cascade failure originating from a misconfigured MCP server that was rate-limiting agent requests without logging errors.</p>

        <p>We deployed Python-based predictive models using the Anaconda stack—not because it's trendy, but because reproducibility matters when you're forecasting tenant churn or legal case outcomes. The model runs on Supabase with real-time triggers. When a property shows early warning signals, the system alerts managers before turnover costs compound. For law firms, we're scoring case viability with 89% accuracy, letting partners focus on winnable work.</p>

        <p>The CFO called last week. Their operations team now catches infrastructure issues before clients notice. Revenue predictability improved 34%. The cost? Less than what they were paying their previous vendor to produce those lying dashboards.</p>

        <p>Data doesn't need to be complicated. It needs to be correct. And sometimes that means tearing down what you thought was working to see what's really broken underneath.</p>

        <p><strong>Ready to map your dependencies?</strong> <a href="/blog" target="_blank">Explore our approach</a> at leverageai.network/blog or see how Oregon businesses across legal, property management, and wellness industries are leveraging <a href="/data-analytics" target="_blank">data analytics</a> to stay ahead.</p>
      `,
      publishedAt: "2025-01-15T08:00:00-08:00",
      readTime: "5 min read",
      category: "Data Analytics",
      author: "LeverageAI Team"
    },
    "missed-call-cost": {
      title: "The $47,000 Voicemail: What One Missed Call Cost a Law Firm",
      description: "A Portland personal injury case lost to voicemail at 6:47 PM—and how AI phone systems are capturing revenue law firms didn't know they were losing.",
      content: `
        <p>The managing partner didn't know the exact moment they lost the client. It happened somewhere between the third ring and the voicemail beep at 6:47 PM on a Friday. A rear-end collision victim, still sitting in her Honda Civic with a sore neck and the other driver's insurance information in her hand, had Googled "personal injury attorney Portland Oregon" and started calling.</p>

        <p>She called four firms. Three went to voicemail. One answered.</p>

        <p>By Monday morning, when the Portland law firm checked their messages, the case was gone—signed with a competitor whose AI phone system had answered in eleven seconds, understood the caller's needs, booked a consultation for Saturday morning, and sent a confirmation text before the woman had even pulled out of the parking lot.</p>

        <p>The case settled for $140,000. The firm's standard contingency would have been $47,000. Lost to a voicemail.</p>

        <p>I've watched this pattern repeat across industries. A Eugene med spa loses a Botox client because their receptionist is mid-procedure and can't answer. A Bend property management company misses an emergency maintenance call at 11 PM—tenant moves out angry, leaves a one-star review. A restaurant in downtown Portland watches Saturday night reservations fill up at competitors while their phone rings unanswered during Friday lunch rush.</p>

        <p>The paradox: these businesses all had communication systems. Phones. Websites. Email. What they lacked was intelligence—the ability to understand intent, maintain context, and route appropriately without human intervention.</p>

        <p>We deployed an NLP-powered communication layer for that law firm. Not a simple chatbot that matches keywords, but a system that understands the difference between "I was in a car accident" and "I'm researching car accident statistics for a paper." It qualifies leads in real-time, books consultations, integrates with their case management system, and escalates appropriately when a human attorney is actually needed.</p>

        <p>Their intake rate improved 64% in ninety days. More importantly, the paralegal who used to spend four hours daily returning missed calls now focuses on case prep. The junior associate stopped fielding "What are your hours?" calls and started billing more hours to clients.</p>

        <p>The system doesn't sleep. Doesn't take lunch breaks. Doesn't get flustered when three calls come in simultaneously during the 5 PM rush. It answers, understands, and acts—24/7, across phone, website chat, and SMS.</p>

        <p>That managing partner called last week. They'd just signed a six-figure case that came in at 2 AM on a Sunday. The client's first message: "Finally, someone who answers."</p>

        <p><strong>Calculate your missed opportunity cost.</strong> Read our complete analysis at <a href="/blog" target="_blank">leverageai.network/blog</a> or see how Oregon businesses across <a href="/industries" target="_blank">legal</a>, <a href="/data-analytics" target="_blank">property management</a>, wellness, and hospitality are capturing revenue they didn't know they were losing.</p>
      `,
      publishedAt: "2025-01-15T09:00:00-08:00",
      readTime: "4 min read",
      category: "AI Communications",
      author: "LeverageAI Team"
    },
    "sales-pipeline-ghost": {
      title: "The Three-Month Ghost: When Sales Pipeline Becomes Sales Theater",
      description: "How a sales director's $3.2M pipeline was 67% dead deals—and how AI lead scoring transformed ghost opportunities into a 34% close rate.",
      content: `
        <p>The sales director showed me their CRM at 4:15 PM on a Thursday. 147 opportunities. $3.2 million in projected revenue. The board presentation looked impressive. The reality was catastrophic.</p>

        <p>I asked him to filter for deals older than 90 days. Forty-three opportunities. He'd been nursing them like seedlings, convinced that persistence would convert skepticism into contracts. His best rep had spent twelve weeks courting a commercial real estate firm in Bend—seventeen calls, four demos, two proposals. The prospect kept saying "maybe next quarter."</p>

        <p>The deal was never going to close. The behavioral signals had been screaming "no" since week two: sporadic email engagement, calls rescheduled three times, demo attendance by junior staff only, no budget questions. But without a system to interpret these patterns, the rep saw hope where there was only politeness.</p>

        <p>That quarter, they missed their number by 41%. The rep quit two months later, burned out from chasing ghosts.</p>

        <p>I've watched this pattern destroy professional services firms, property management companies, and law practices across Oregon. Sales teams drowning in leads but starving for qualified opportunities. Marketing generating volume but not value. The cost isn't just lost time—it's the deals you could have closed if your best people weren't trapped in dead-end conversations.</p>

        <p>We deployed a lead scoring model that analyzes 47 behavioral data points in real-time. Email engagement velocity. Website session depth. Response time patterns. Org chart positioning of engaged contacts. Budget authority signals. The model doesn't guess—it calculates probability based on thousands of closed deals across industries.</p>

        <p>Within thirty days, that sales director's pipeline transformed. The model flagged 28 of those 43 aging deals as sub-15% probability. He killed them. Reassigned his team to the 19 opportunities scoring above 65%. They closed seven deals in the next sixty days—$890,000 in new revenue from leads that had been languishing at the bottom of the funnel.</p>

        <p>The system runs continuously now, scoring every new lead within minutes of first contact. Automated campaign triggers respond to behavioral signals—a prospect who downloads three case studies gets a different nurture sequence than one who only visits the pricing page. The model predicts churn risk for existing clients, surfacing renewal opportunities before competitors start circling.</p>

        <p>The sales director called last week. His team's close rate improved from 18% to 34%. More importantly, his best rep isn't burning out on ghost deals anymore. She's closing.</p>

        <p><strong>Stop prospecting. Start closing.</strong> Explore our predictive AI systems at <a href="/blog" target="_blank">leverageai.network/blog</a> or see how Oregon businesses across <a href="/industries" target="_blank">professional services</a>, <a href="/data-analytics" target="_blank">real estate</a>, and legal industries are converting pipeline theater into revenue.</p>
      `,
      publishedAt: "2025-01-15T10:00:00-08:00",
      readTime: "6 min read",
      category: "Sales & Marketing",
      author: "LeverageAI Team"
    }
  }

  return posts[slug]
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post Not Found | LeverageAI"
    }
  }

  return {
    title: post.title,
    description: post.description,
    keywords: `AI blog, ${post.category.toLowerCase()}, data analytics insights, AI infrastructure, business automation, Oregon AI solutions`,
    authors: [{ name: post.author }],
    openGraph: {
      type: "article",
      url: `https://leverageai.network/blog/${params.slug}`,
      title: post.title,
      description: post.description,
      authors: [post.author],
      images: [
        {
          url: `/images/og/blog-${params.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ],
      section: post.category,
      tags: [post.category, "AI", "Business Intelligence"],
      publishedTime: post.publishedAt
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`/images/og/blog-${params.slug}.jpg`]
    },
    alternates: {
      canonical: `https://leverageai.network/blog/${params.slug}`
    }
  }
}

export async function generateStaticParams() {
  return [
    { slug: "when-dashboards-lie" },
    { slug: "missed-call-cost" },
    { slug: "sales-pipeline-ghost" }
  ]
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return (
      <PageLayout currentPage="Blog">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            Post Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link href="/blog">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout currentPage="Blog">
      <main>
        <article className="py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            {/* Back Button */}
            <div className="mb-8">
              <Link href="/blog">
                <Button variant="ghost" className="mb-4">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Button>
              </Link>
            </div>

            {/* Article Header */}
            <header className="mb-12">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary">
                  {post.category}
                </Badge>
                <span className="text-gray-500 dark:text-gray-400">•</span>
                <span className="text-gray-500 dark:text-gray-400">{post.readTime}</span>
                <span className="text-gray-500 dark:text-gray-400">•</span>
                <span className="text-gray-500 dark:text-gray-400">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-blue-900 dark:text-blue-100 mb-6">
                {post.title}
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                {post.description}
              </p>
            </header>

            {/* Article Content */}
            <div
              className="prose prose-lg dark:prose-invert max-w-none
                         prose-headings:text-blue-900 dark:prose-headings:text-blue-100
                         prose-p:text-gray-700 dark:prose-p:text-gray-300
                         prose-strong:text-blue-900 dark:prose-strong:text-blue-100
                         prose-ul:text-gray-700 dark:prose-ul:text-gray-300
                         prose-ol:text-gray-700 dark:prose-ol:text-gray-300
                         prose-li:text-gray-700 dark:prose-li:text-gray-300
                         prose-a:text-blue-600 dark:prose-a:text-blue-400"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Related Services CTA */}
            <div className="mt-16 p-8 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4 text-center">
                Ready to Transform Your {post.category}?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
                Discover how LeverageAI can help you implement these insights in your business.
              </p>
              <div className="text-center">
                <a
                  href={
                    post.category === "Data Analytics" ? "/data-analytics" :
                    post.category === "AI Communications" ? "/ai-communications" :
                    post.category === "Sales & Marketing" ? "/ai-sales-marketing" :
                    "/contact"
                  }
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Explore Our {post.category} Solutions
                </a>
              </div>
            </div>

            {/* Article Footer */}
            <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-blue-900 dark:text-blue-100">
                    {post.author}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    AI Infrastructure & Analytics Experts
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Published on
                  </p>
                  <p className="font-semibold text-blue-900 dark:text-blue-100">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </article>
      </main>
    </PageLayout>
  )
}