import { PageLayout } from "@/components/page-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Data Analytics & AI Infrastructure | LeverageAI Oregon",
  description: "Transform raw data into actionable intelligence. Real-time Grafana dashboards, predictive AI models with Anaconda, and secure infrastructure monitoring.",
  keywords: "data analytics Oregon, Grafana dashboards, Anaconda AI models, predictive analytics, real-time monitoring, business intelligence Oregon",
  openGraph: {
    type: "website",
    url: "https://leverageai.network/data-analytics",
    title: "Data Analytics & AI Infrastructure for Oregon Businesses",
    description: "Transform raw data into actionable intelligence. Real-time Grafana dashboards, predictive AI models, and secure infrastructure monitoring.",
    images: [
      {
        url: "/images/og/data-analytics.jpg",
        width: 1200,
        height: 630,
        alt: "Data Analytics & AI Infrastructure"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Analytics & AI Infrastructure for Oregon Businesses",
    description: "Real-time dashboards, predictive AI models, and secure infrastructure monitoring for Oregon businesses.",
    images: ["/images/og/data-analytics.jpg"]
  },
  alternates: {
    canonical: "https://leverageai.network/data-analytics"
  }
}

export default function DataAnalyticsPage() {
  return (
    <PageLayout currentPage="Data & Analytics Services">
      <main>
        <section className="bg-gray-50 dark:bg-gray-800 py-20">
          <div className="container mx-auto px-6 text-center">
            <p className="font-mono text-blue-600 dark:text-blue-400">Our Core Expertise</p>
            <h1 className="text-4xl md:text-6xl font-black mt-2 text-blue-900 dark:text-blue-100">
              Data & Analytics Services
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We transform your raw data into your most valuable asset. Our solutions provide clarity, drive efficiency,
              and uncover opportunities you never knew existed.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div>
                <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100">Real-time Dashboards</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Monitor your operations live with custom Grafana dashboards that visualize the metrics that matter
                  most to your business.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100">Predictive AI Models</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Using the Anaconda stack, we build and deploy machine learning models to forecast trends, score leads,
                  and mitigate risks.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100">Secure Infrastructure</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Your data's security is paramount. We implement robust, compliant data pipelines with enterprise-grade
                  monitoring and governance.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-blue-900 dark:text-blue-100">
                Built with Best-in-Class Tools
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                We don't reinvent the wheel; we master the best tools on the market to deliver robust, scalable, and
                maintainable solutions for you.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Related Blog Posts Section */}
            <div className="mt-20">
              <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-8 text-center">
                Related Insights
              </h2>
              <div className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto">
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">Data Analytics</Badge>
                    <span className="text-xs text-gray-500 dark:text-gray-400">5 min read</span>
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">
                    <a href="/blog/when-dashboards-lie" className="hover:text-blue-600 transition-colors">
                      When Dashboards Lie: A Data Engineer's Confession
                    </a>
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    How a property management CFO discovered their $100k monitoring system was watching the wrong signals—and what we rebuilt using 3D dependency mapping.
                  </p>
                </div>
              </div>
            </div>
              {[
                {
                  title: "Anaconda Platform",
                  description:
                    "The foundation of our data science and ML workflows, ensuring reproducibility, security, and access to thousands of vetted packages.",
                },
                {
                  title: "Grafana & Prometheus",
                  description:
                    "The industry-standard duo for real-time metrics collection and stunning, interactive dashboard visualizations.",
                },
                {
                  title: "6sense & Agency Analytics",
                  description:
                    "Powering our revenue intelligence and client-facing reporting to provide clear, actionable business insights.",
                },
                {
                  title: "Better Stack & Practicus AI",
                  description:
                    "For comprehensive infrastructure monitoring, incident management, and AI-powered business intelligence exploration.",
                },
                {
                  title: "Supabase",
                  description:
                    "Our choice for a scalable, secure, and cost-effective database backend with powerful real-time capabilities.",
                },
                {
                  title: "Custom Engine (In Dev)",
                  description:
                    "Our next-generation proprietary platform, combining the best features of these tools into a unified, seamless experience.",
                },
              ].map((platform) => (
                <Card
                  key={platform.title}
                  className="group relative overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-2">{platform.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{platform.description}</p>
                    <div className="absolute top-0 right-0 w-12 h-12 bg-blue-600 dark:bg-blue-500 group-hover:bg-emerald-600 transition-colors duration-300 flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-white transform rotate-45" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-blue-900 dark:text-blue-100">
                Global Insights, Local Impact
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Our analytics engines can process data from across your global operations to provide hyper-specific,
                actionable insights that improve local performance, from a single retail store to an entire supply
                chain.
              </p>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                This globe represents the interconnectedness of data in the modern enterprise.
              </p>
            </div>
            <div className="flex justify-center items-center h-64 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800">
              <p className="text-gray-500 dark:text-gray-400">[Rotating Globe Animation Would Go Here]</p>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  )
}
